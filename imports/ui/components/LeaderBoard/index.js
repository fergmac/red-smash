import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import PlayersTable from '../PlayersTable';
import { Pie } from 'react-chartjs';
import { sortByKey } from '../../../functions'

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



class LeaderBoard extends Component {
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

  // the code below is an example of a purely functional way of accomplishing above… BUT…
  // it's not complete because of an error with tracker's return on the currentUser being
  // inconsistent with the teams subscription (which comes from the users collection)…
  // this will have to be fixed, so let this serve as a starting point :
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

  render() {
    const teamData = this._teamStarsFinder()
    const pieData = this._pieFilling(teamData)

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
              <p><span className="label label-md label-primary">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 0 ? `${pieData[0].label} - ${pieData[0].value}` : ''}</p>
              <p><span className="label label-md label-success">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 1 ? `${pieData[1].label} - ${pieData[1].value}` : ''}</p>
              <p><span className="label label-md label-info">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 2 ? `${pieData[2].label} - ${pieData[2].value}` : ''}</p>
              <p><span className="label label-md label-warning">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 3 ? `${pieData[3].label} - ${pieData[3].value}` : ''}</p>
              <p><span className="label label-md label-danger">&nbsp;&nbsp;&nbsp;</span> {pieData.length > 4 ? `${pieData[4].label} - ${pieData[4].value}` : ''}</p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 offset-lg-6">
          <PlayersTable players={this.props.teams} />
          </div>
        </div>
      </div>
    );
  };
}

LeaderBoard.propTypes = {
  teams: PropTypes.array.isRequired,
}

export default createContainer(() => {
  Meteor.subscribe('teams');
  return {
    teams: Meteor.users.find({}, { username: 1, starCount: 1, teamId: 1 }).fetch(),
  };
}, LeaderBoard);
