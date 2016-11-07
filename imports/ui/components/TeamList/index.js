import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
// import Team from '../Team';
import { Pie } from 'react-chartjs';

// a silly little function to add a suffix to the end of a number (e.g. '21' to '21st')
const numberSuffixer = (num) => {
  switch ((num % 100).toString().substr(0, 1)) {
    case '1':
      if (num > 1) {
        return num + 'th'
      }
    default:
      switch (num % 10) {
        case 1:
          return num + 'st'
        case 2:
          return num + 'nd'
        case 3:
          return num + 'rd'
        default:
          return num + 'th'
      }
  }
}

const themeColours = {
  default: '#9B121E',
  success: '#CB3B46',
  info: '#F0AD4E',
  danger: '#F0D64E',
  warning: '#222222',
}


const chartColours = [
  themeColours.default,
  themeColours.success,
  themeColours.info,
  themeColours.danger,
  themeColours.warning,
]

// global options variable
const pieOptions = {
  responsive: true,
  scaleBeginAtZero: true,
  // legend.labels.generateLabels(),
  // legend.onClick()
}

const sortByKey = (key) => (a, b) => {
  switch (true) {
    case a[key] < b[key]:
      return 1;
    case a[key] > b[key]:
      return -1;
    default:
      return 0;
  }
}

class TeamList extends Component {
  //  
  // it will be necessary to refactor this at some point, since this of course won't scale
  // an idea might be generating a new Mongo collection called "teams" or something, and
  // get it to regenerate each time there's a change to the users collection, or just find
  // a way for aggregates to work in Meteor-React, which would be ideal
  _teamStarsFinder() {
    let teamStats = [...new Set(
      this.props.teams
        .map((user) => user.teamId))]
      .map((team) => { return { teamId: team, starCount: 0, players: [] } })

    let userArray = this.props.teams

    for (i = 0; i < teamStats.length; i++) {
      for (j = 0; j < userArray.length; j++) {
        if (userArray[j].teamId === teamStats[i].teamId) {
          teamStats[i].starCount += userArray[j].starCount
          teamStats[i].players.push(userArray[j])
        }
      }
      teamStats[i].players.sort(sortByKey('starCount'))
    }
    teamStats.sort(sortByKey('starCount'))

    return teamStats
  }

  _pieFilling(teamData) {
    const pieData = teamData.map((team, index) => {
      return {
        label: team.teamId,
        color: chartColours[index],
        highlight: chartColours[index],
        value: team.starCount,
        labelColor: 'white',
        labelFontSize: '16px'
      }
    })
    return pieData
  }


  // the code below is an example of a purely functional way of accomplishing above… BUT…
  // it's not complete because of an error with tracker's return on the currentUser being
  // inconsistent with the teams subscription (which comes from the users collection)…
  // this will have to be fixed, so let this server as a starting point :
  // _teamStarsFinder() {
  //   // TODO: this should get fixed so that the current user works… booo… tracker

  //   const distinctTeams = [...new Set(
  //     this.props.teams
  //       .map((user) => user.teamId))]
  //     .map((team) => {
  //       return { teamId: team, starCount: 0, players: [] }
  //     })

  //   const teamStats = distinctTeams
  //     .reduce((dtAll, dtItem) => {
  //       this.props.teams.reduce((uaAll, uaItem) => {
  //         if (uaItem.teamId === dtItem.teamId) {
  //           dtItem.starCount += uaItem.starCount
  //           dtItem.players.push(uaItem)
  //         }
  //         return dtItem.players.sort(sortByKey('starCount'))
  //       })
  //       return dtAll
  //     }, distinctTeams)
  //   return teamStats.sort(sortByKey('starCount'))
  // }




  render() {
    const teamData = this._teamStarsFinder()
    const pieData = this._pieFilling(teamData)
    console.log(pieData)

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Leader Board</h1>
            <br />
            <div className="col-lg-2"></div>
            <div className="col-lg-6">
              <Pie ref="pieChart" data={pieData} options={pieOptions} />
            </div>
            <div className="col-lg-2 text-left container">
              <h3>Legend</h3>
              <p><span className="label label-md label-primary">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 0 ? pieData[0].label : ''}</p>
              <p><span className="label label-md label-success">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 1 ? pieData[1].label : ''}</p>
              <p><span className="label label-md label-info">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 2 ? pieData[2].label : ''}</p>
              <p><span className="label label-md label-warning">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 3 ? pieData[3].label : ''}</p>
              <p><span className="label label-md label-danger">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 4 ? pieData[4].label : ''}</p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 offset-lg-6">
            <table className="table table-striped">
              <thead>
                <tr className="face">
                  <th className="text-left">Username</th>
                  <th className="text-left">Team</th>
                  <th className="text-left">Stars</th>
                  <th className="text-left">Overall Rank</th>
                </tr>
              </thead>
              <tbody>
                {this.props.teams.map((playerItem, index) => {
                  return (
                    <tr key={index} >
                      <td className="text-left">{playerItem.username}</td>
                      <td className="text-left">{playerItem.teamId}</td>
                      <td className="text-left">{playerItem.starCount}</td>
                      <td className="text-left">{numberSuffixer(index + 1)}</td>
                    </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}

TeamList.propTypes = {
  teams: PropTypes.array.isRequired,
}

export default createContainer(() => {
  Meteor.subscribe('teams');
  return {
    teams: Meteor.users.find({}, { username: 1, starCount: 1, teamId: 1 }).fetch(),
  };
}, TeamList);
