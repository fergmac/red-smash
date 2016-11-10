import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Challenges } from '../../../api/collections.js';
import { browserHistory } from 'react-router';
import { ButtonToolbar, Button } from 'react-bootstrap';

const styles = {
    reflectSubmit: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
    },
    challenge: {
        color: '#f4e17d',
        textDecoration: 'none',
    },
    details: {
        marginTop: '10rem',
        marginBottom: '10rem',
        display: 'flex',
        justifyContent: 'space-around',
    },
    reflect: {
        marginTop: '5rem',
        marginBottom: '5rem',
        width: '800px'
    }
}

class ChallengeDetails extends Component {
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.refs);
  
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

        console.log(this.props)
        return (
            <div>
                <div>
                    {/* this is a check if array is empty populate with following props */}
                    {this.props.challenges.length ?
                        <div>
                            <h3>{this.props.challenges[0].name}</h3>
                            <div style={styles.details}>
                                <div style={styles.challenge} >{this.props.challenges[0].description}</div>
                                <div>
                                    <span>{this.props.challenges[0].starCount}</span>
                                    <span style={styles.challenge}>✯</span>
                                </div>
                            </div>
                        </div>
                        : ''}
                    <div>
                        <h2>Reflection</h2>
                        <div>
                            {this.props.currentUser ?
                                <form style={styles.reflectSubmit} onSubmit={this.handleSubmit.bind(this)} >
                                    <textarea
                                        type="text"
                                        ref="textInput"
                                        placeholder="Reflect"
                                        rows="10"
                                        style={styles.reflect}
                                        />
                                    <button className="btn btn-success btn-lg">Submit</button>
                                </form> : ''}
                        </div>
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
    console.log(Meteor.users);
    Meteor.subscribe('challenges', params.id);
    const challenges = Challenges.find({ _id: params.id }).fetch() || []; // pass params.id which also gets passed into publication so that we 
    return {                                                              // can get the challenge details of the specific challenge id Tracker magic going on here
        challenges: challenges, //find where this.props.params.id          // this is all then passed to the props challenges
        currentUser: Meteor.user(),     
    }
}, ChallengeDetails);