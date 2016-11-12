import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Challenges } from '../../../api/collections.js'
import { Link } from 'react-router';

const styles = {
  challengeList: {
    color: '#f4e17d',
    textDecoration: 'none',
  }
}

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
            {
              this.props.challenges.map((challenge, index) => {
                return (
                  <tr key={index}>
                    <td><Link to={`/challenges/id/${challenge._id}`} style={styles.challengeList} >{challenge.name}</Link></td>
                    <td>{challenge.description}</td>
                    <td className="text-center">{challenge.starCount}<span style={styles.challengeList}>✯</span></td>
                  </tr>)
              })
            }
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

