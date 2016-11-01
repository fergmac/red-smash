import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

// Team component - represents a single team item
export default class Teams extends Component {
  render() {
    
    return (
      <div>
        <ul>
          <span>{this.props.team.teamId}:{this.props.team.starCount}</span>
        </ul>
      </div>
    );
  }
}
 
Teams.propTypes = {
  team: PropTypes.object.isRequired,
};