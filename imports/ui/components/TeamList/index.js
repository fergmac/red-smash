import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Team from '../Team';

class TeamList extends Component {
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
    }
    return teamStats
  }

  render() {
    console.log(this._teamStarsFinder());
    const teamData = this._teamStarsFinder()

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
            {teamData.map((team, index) => (<Team team={team} key={index} />))}
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