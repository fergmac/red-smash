import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { sortByKey, numberSuffixer } from '../../../functions'

export default class PlayersTable extends Component {
  render() {
    return (
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
          {this.props.players.sort(sortByKey('starCount')).map((playerItem, index) => {
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
    );
  }
}

PlayersTable.propTypes = {
  players: PropTypes.array.isRequired,
};