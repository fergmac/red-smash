import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';

const styles = {
  challengeList: {
    color: '#f4e17d',
    textDecoration: 'none',
  }
}
export default class Challenge extends Component {
  render() {
    console.log(this);
    return (
          <tr>
            <td><Link to={`/challenges/id/${this.props.challenge._id}`} style={styles.challengeList}>{this.props.challenge.name}</Link></td>
            <td>{this.props.challenge.description}</td>
            <td className="text-center">{this.props.challenge.starCount}<span style={styles.challengeList}>✯</span></td>
          </tr>
    );
  }
}

Challenge.propTypes = {
  challenge: PropTypes.object.isRequired,
};
