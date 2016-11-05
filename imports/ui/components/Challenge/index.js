import React, { Component, PropTypes } from 'react';
// import { Challenges } from '../../../api/collections.js';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
// Team component - represents a single team item

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

// return (
//   <div>
//     <ul>
//       <span style={styles.challengeList}><Link to={`/challenges/id/${this.props.challenge._id}`} >
//         {this.props.challenge.name}
//       </Link>:{this.props.challenge.description} {this.props.challenge.starCount}</span>
//     </ul>
//   </div>
// );
//   }
// }