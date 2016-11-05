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

const sortByPlayerKey = (key) => (a, b) => {
  switch (true) {
    case a.player[key] < b.player[key]:
      return 1;
    case a.player[key] > b.player[key]:
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
    const distinctTeams = [...new Set(
      this.props.teams
        .map((user) => user.teamId))]
      .map((team) => {
        return { teamId: team, starCount: 0, players: [] }
      })

    const teamStats = distinctTeams
      .reduce((dtAll, dtItem) => {
        this.props.teams.reduce((uaAll, uaItem) => {
          if (uaItem.teamId === dtItem.teamId) {
            dtItem.starCount += uaItem.starCount
            dtItem.players.push(uaItem)
          }
          console.log('dtItem ', dtItem)
          return dtItem
        })
        console.log('dtAll', dtAll)
        return dtAll
      }, distinctTeams)
    return teamStats
  }

  render() {
    const teamData = this._teamStarsFinder().sort(sortByKey('starCount'))

    return (
      <div className="container">
        <div className="row">
          {/* <button className="btn btn-default">Click to Challenge</button> */}
          <div className="col-lg-12">
            <h1>Leader Board</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
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
    teams: Meteor.users.find({}, { username: 1, starCount: 1 }).fetch(),
  };
}, TeamList);