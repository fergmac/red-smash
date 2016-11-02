import React, { Component, PropTypes } from 'react';
// import { Challenges } from '../../../api/collections.js';
import { Meteor } from 'meteor/meteor';

// Team component - represents a single team item
export default class Challenges extends Component {
  render() {
    
    return (
       <div>
        <ul>
         <span>{this.props.challenge.name}:{this.props.challenge.description} {this.props.challenge.starCount}</span> 
        </ul>
      </div>
    );
  }
}
 
Challenges.propTypes = {
  challenge: PropTypes.object.isRequired,
};