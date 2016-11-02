import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Challenges } from '../../../api/collections.js'
import Challenge from '../Challenges';

class ChallengeList extends Component {
    render() {
        return (
          <div>
            <div>Challenges</div>
            {this.props.challenges.map((challenge, index) => (<Challenge challenge={challenge}  key={index} />))}
         </div>
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