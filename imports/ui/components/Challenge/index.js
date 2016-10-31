import React, { Component, PropTypes } from 'react';
import { Challenges } from '../../../api/client/api-challenges.js';
import { Meteor } from 'meteor/meteor';

// Team component - represents a single team item
export default class Challenges extends Component {
  render() {
    
    return (
       <div>Challenge</div>
    );
  }
}
 
Challenges.propTypes = {
  challenge: PropTypes.object.isRequired,
};