import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Team from '../Team';

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
    console.log(this.props.teams)
    const teamData = this._teamStarsFinder()

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Leader Board</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 offset-lg-6">
            {teamData.map((team, index) => (<Team team={team} key={index} arrayIndexNumber={teamData.indexOf(team)} />))}
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
