import { Meteor } from 'meteor/meteor';
import { Challenges } from '../imports/api/collections.js'

if (Meteor.isServer) {
  Meteor.startup(function () {
    return Meteor.methods({
      updateUserChallenges: function (myChallenge) {
        console.log(myChallenge);
        Meteor.users.update({ _id: myChallenge.userId }, {
          $push: {
            challenges: {
              reflection: myChallenge.reflection,
              starsEarned: myChallenge.starsEarned,
              challengeName: myChallenge.challengeName,
              completedAt: new Date(),
            }
          }
        })
        Meteor.users.update({ _id: myChallenge.userId }, {
          $inc: { starCount: myChallenge.starsEarned }
        })
        Challenges.update({ _id: myChallenge.challengeId }, {
          $push: {
            winners: {
              username: myChallenge.username,
              userId: myChallenge.userId,
              starsEarned: myChallenge.starsEarned,
              completedAt: new Date(),
            }
          }
        })
        return;
      },
    });
  })
}