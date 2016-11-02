import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Meteor from 'meteor/meteor';

class ChallengeDetails extends Component {
    render() {
        return(
            <div>
                <div>
                    {this.props.challenge.description}
                </div>
                <div>
                    {this.props.challenge.starCount}
                </div>
            </div>
        );
    }
}

ChallengeDetails.propTypes = {
    challenge: PropTypes.array.isRequired,
}

export default createContainer(() => {
    Meteor.subscribe('challenges');
    return {
        challenges: Challenges.find().fetch(),
    }
}, ChallengeDetails);