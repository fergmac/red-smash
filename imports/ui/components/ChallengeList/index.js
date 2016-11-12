import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Challenges } from '../../../api/collections.js'
import Challenge from '../Challenge';

class ChallengeList extends Component {
  render() {
    return (
      <div>
        <h1>Challenges</h1>
        <table className="table table-striped">
          <thead>
            <tr className="face">
              <th className="text-center" className="text-left">Challenge</th>
              <th className="text-center" className="text-left">Description</th>
              <th className="text-center">Stars</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {this.props.challenges.map((challenge, index) => (<Challenge challenge={challenge} key={index} />))}
          </tbody>
        </table>
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

