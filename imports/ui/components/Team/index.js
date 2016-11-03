import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// Team component - represents a single team item
export default class Team extends Component {



  render() {
    let face = this.props.team
    // console.log(JSON.stringify(face))
    return (
      <div className="row">
        <div className="col-xs-4">
          <p>{this.props.team.teamId}</p>
          <ul className="list-group">
            {this.props.team.players.map((player, index) => {
              return (<li key={index} className="list-group-item">{player.username} | {player.starCount}</li>)
            })}
          </ul>
        </div>
        <div className="col-xs-8">
          <p>{this.props.team.starCount}</p>
        </div>
      </div>
    );
  }
}

Team.propTypes = {
  team: PropTypes.object.isRequired,
};