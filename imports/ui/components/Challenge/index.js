import React, { Component, PropTypes } from 'react';
// import { Challenges } from '../../../api/collections.js';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
// Team component - represents a single team item
export default class Challenge extends Component {
  render() {
    console.log(this);
    return (
       <div>
        <ul>
         <span><Link to={`/challenges/id/${this.props.challenge._id}`} >{this.props.challenge.name}</Link>:{this.props.challenge.description} {this.props.challenge.starCount}</span> 
        </ul>
      </div>
    );
  }
}
 
Challenge.propTypes = {
  challenge: PropTypes.object.isRequired,
};