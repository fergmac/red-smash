import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Challenges } from '../../../api/collections.js';
import { browserHistory } from 'react-router';
import { ButtonToolbar, Button } from 'react-bootstrap';

const styles = {
  challenge: {
    color: '#f4e17d',
    textDecoration: 'none',
  }
}

class ChallengeDetails extends Component {
  handleSubmit(event) {
    event.preventDefault();
    Meteor.call('updateUserChallenges', {
      userId: Meteor.userId(),
      challengeId: this.props.challenges[0]._id,
      reflection: this.refs.textInput.value,
      starsEarned: this.props.challenges[0].starCount,
      challengeName: this.props.challenges[0].name,
      username: Meteor.users.find({ _id: Meteor.userId() }).fetch()[0].username
    });
    browserHistory.push('/leaderboard');
  }

  render() {
    return (
      <div>
        {/* this is a check if array is empty populate with following props */}
        {
          this.props.challenges.length ?
            <div>
              <h3>{this.props.challenges[0].name}</h3>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <h3 style={styles.challenge}>{this.props.challenges[0].description}</h3>
                  </div>
                  <div className="col-lg-4">
                    <h3>
                      {this.props.challenges[0].starCount}
                      <span style={styles.challenge}>✯</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            : 'This challenge is empty for some strange reason'
        }
        <div>
          <h2>
            <br />
            Reflection
            </h2>
          <div>
            {
              this.props.currentUser ?
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <textarea type="text" ref="textInput" className="form-control" placeholder="Reflect" rows="10" />
                  </div>
                  <button type="submit" className="btn btn-default btn-lg">Submit</button>
                </form>
                : 'You must log in to complete a challenge'
            }
          </div>
        </div>
      </div>
    );
  }
}

ChallengeDetails.propTypes = {
  challenges: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
}

export default createContainer(({ params }) => {
  Meteor.subscribe('challenges', params.id);
  const challenges = Challenges.find({ _id: params.id }).fetch() || []; // pass params.id which also gets passed into publication so that we 
  return {                                                              // can get the challenge details of the specific challenge id Tracker magic going on here
    challenges: challenges, //find where this.props.params.id          // this is all then passed to the props challenges
    currentUser: Meteor.user(),
  }
}, ChallengeDetails);