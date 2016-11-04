import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Challenges } from '../../../api/collections.js';
import { browserHistory } from 'react-router';
// import Link from 'react-router';
// import ChallengeList from '../ChallengeList';

const styles =  {
    reflectSubmit: {
        display: 'flex',
        flexFlow: 'column nowrap'
    }
}

class ChallengeDetails extends Component {
    // constructor () {
    //     super()

    //     this.state = {
    //         reflection: '',
    //     }
    // }
    handleSubmit(event) {
    event.preventDefault();
    console.log(this.refs);
    // Find the text field via the React ref
    // const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    //  Meteor.call('reflections.insert', text);
    Meteor.call('updateUserChallenges', {
        userId: Meteor.userId(),
        challengeId: this.props.challenges[0]._id,
        reflection: this.refs.textInput.value,
        starsEarned: 7, //change this to like below
        challengeName: this.props.challenges[0].name,
        username: Meteor.users.find({_id: Meteor.userId()}).fetch()[0].username
    });

    browserHistory.push('/leaderboard');
    // Meteor.users.update({id: currentUser._id}, { $push: { 
    //   challenges: {
    //     reflection: this.refs.textInput.value,
    //     starsEarned: Math.floor(Math.random(5)),
    //     challengeName: this.props.challenges[0].name,
    //     createdAt: {
    //       $currentDate: {
    //         lastModified: true,
    //       }
    //     }

    // } }, $inc: { starCount: 1 }})

    // Challenges.update({id: this.props.challenges[0]._id}, { $push: {
    //     winners: {
    //       username: currentUser.username,
    //       userId: currentUser._id,
    //       starCount: Math.floor(Math.random(5)),
    //       createdAt: {
    //         $currentDate: {
    //           lastModified: true,
    //         }
    //       }
    //     }
    // } })
  //   Users.update({id: currentUser }, { $push: {
  //       challenges: {
  //         reflection: 'i love this',
  //         starsEarned: Math.floor(Math.random(5)),
  //         challengeName: 'take a selfie',
  //         createAt: new Date(),
  //     }
  //   },
  //     { $inc: {
  //       starCount: starCount += 5, 
  //   }
  // });
  //   Challenges.update({id: currentChallenge}, {
  //     winners: {
  //       username: '',
  //       userId: '',
  //       starCount: Math.floor(Math.random(5)),
  //       createAt: new Date(),
  //     }
  //   });

    // Clear form
    // ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

    render() {
      
        console.log(this.props)
        return(
            <div>
               <div>
               {/* this is a check if array is empty populate with following props */}
               { this.props.challenges.length ? 
                <div>
                    <div>challenge: {this.props.challenges[0].description}</div>
                    <div>stars: {this.props.challenges[0].starCount}</div>
                </div>
                : '' }
                    <div>
                        <h2>Reflection</h2>
                        <div>
                        { this.props.currentUser ?
                        <form style={styles.reflectSubmit} onSubmit={this.handleSubmit.bind(this)} >
                            <textarea
                                type="text"
                                ref="textInput"
                                placeholder="Reflect"
                            />
                            <input
                                type="submit"
                                placeholder="Submit"
                            />
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
    // currentChallenges: PropTypes.object,
}

export default createContainer(({ params }) => {
  console.log(Meteor.users);
    Meteor.subscribe('challenges', params.id);
    const challenges = Challenges.find({ _id: params.id }).fetch() || []; // pass params.id which also gets passed into publication so that we 
    return {                                                              // can get the challenge details of the specific challenge id Tracker magic going on here
        challenges: challenges, //find where this.props.params.id          // this is all then passed to the props challenges
        currentUser: Meteor.user(),  
        // currentChallenge: Challenges._id,      
    }
}, ChallengeDetails);