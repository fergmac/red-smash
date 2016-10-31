import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Challenges } from '../../../startup/client/api-challenges.js';
import { Meteor } from 'meteor/meteor';

class ChallengeList extends Component {
    render() {
        return (
            <div>Challenges</div>
        );

    };
    
}
ChallengeList.propTypes = {
  challenges: PropTypes.array.isRequired,
}

export default createContainer(() => {
  Meteor.subscribe('challenges');
  return {
    challenges: Challenges.find().fetch(),
  };
}, ChallengeList);