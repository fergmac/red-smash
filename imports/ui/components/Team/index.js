import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// Team component - represents a single team item
export default class Team extends Component {
  render() {
    let player = this.props.player

    console.log('here comes player')
    console.log(player)
    // console.log(JSON.stringify(face))
    return (
      <div className="row">
        <div className="col-xs-12">
          <table className="table table-striped">
            <thead>
              <tr className="face">
                <th className="text-center">Username</th>
                <th className="text-center">Stars</th>
              </tr>
            </thead>
            <tbody>
              {player.map((playerItem, index) => {
                return (
                  <tr key={index} >
                    <td>{playerItem.username}</td>
                    <td>{playerItem.starCount}</td>
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
  player: PropTypes.object.isRequired,
};