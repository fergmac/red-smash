import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// a silly little function to add a suffix to the end of a number (e.g. '21' to '21st')
const numberSuffixer = (num) => {
  switch(num%10) {
    case 1:
      return num+'st'
    case 2:
      return num+'nd'
    case 3:
      return num+'rd'
    default:
      return num+'th'
  }
}

// Team component - represents a single team item
export default class Team extends Component {
  render() {
    let face = this.props.team
    // console.log(JSON.stringify(face))
    return (
      <div className="row">
        <div className="col-xs-12">
          <h2>{this.props.team.teamId}: {this.props.team.starCount} … {numberSuffixer(this.props.arrayIndexNumber + 1)}</h2>

          <table className="table table-striped">
            <thead>
              <tr className="face">
                <th className="text-center">Username</th>
                <th className="text-center">Stars</th>
              </tr>
            </thead>
            <tbody>
              {this.props.team.players.map((player, index) => {
                return (
                  <tr key={index} >
                    <td>{player.username}</td>
                    <td>{player.starCount}</td>
                  </tr>)
              })}
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}

Team.propTypes = {
  team: PropTypes.object.isRequired,
};