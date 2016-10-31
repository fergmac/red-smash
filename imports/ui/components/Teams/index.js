import React, { Component, PropTypes } from 'react';
import { Teams } from '../api/teams.js';
import { Meteor } from 'meteor/meteor';

// Team component - represents a single team item
export default class Teams extends Component {
  render() {
    
    return (
       
    );
  }
}
 
Teams.propTypes = {
  team: PropTypes.object.isRequired,
};