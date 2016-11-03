import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Challenges } from '../../../api/collections.js'

const styles =  {
    reflectSubmit: {
        display: 'flex',
        flexFlow: 'column nowrap'
    }
}

class ChallengeDetails extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
               <div>
               {/* this is a check if array is empty populate with following props */}
               { this.props.challenges.length ? 
                <div>
                    <div>{this.props.challenges[0].description}</div>
                    <div>{this.props.challenges[0].starCount}</div>
                </div>
                : '' }
                    <div>
                        <h2>Reflection</h2>
                        <div style={styles.reflectSubmit}>
                        <textarea></textarea>
                        <input type="submit" value="Submit"></input>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

ChallengeDetails.propTypes = {
    challenges: PropTypes.array.isRequired,
}

export default createContainer(({ params }) => {
    Meteor.subscribe('challenges', params.id);
    const challenges = Challenges.find({ _id: params.id }).fetch() || []; // pass params.id which also gets passed into publication so that we 
    return {                                                              // can get the challenge details of the specific challenge id Tracker magic going on here
        challenges: challenges, //find where this.props.params.id          // this is all then passed to the props challenges
    }
}, ChallengeDetails);