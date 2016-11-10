import { Meteor } from 'meteor/meteor';
import { Challenges } from '../imports/api/collections.js'
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {

  user.challenges = []
  user.starCount = 0
  user.teamId = 'Unassigned'

  return user;
});
Meteor.startup(() => {
  // code to run on server at startup
  if (!Meteor.users.find().count()) {
    for (let i = 0; i < 4; i++) {

      var fakeUser = Fake.user({
        fields: ['username', 'emails.address'],
      });

      fakeUser.teamId = Fake.color()
      fakeUser.starCount = Math.floor(Math.random(5));
      fakeUser.challenges = Fake.challenges([
        {
          reflection: 'i love this',
          starsEarned: Math.floor(Math.random(5)),
          challengeName: 'take a selfie',
          createAt: new Date(),
        },
      ]);

      Meteor.users.insert(fakeUser);
    }
  }
  if (!Challenges.find().count()) {
    Challenges.insert(
      {
        name: "Selfie",
        description: "Take a selfie with someone you don't know yet.",
        starCount: 5,
        winners: []
      }
    )
    Challenges.insert(
      {
        name: "Network",
        description: "Go to a networking event with a fellow classmate.",
        starCount: 5,
        winners: []
      }
    )
    Challenges.insert(
      {
        name: "Talent",
        description: "Share one of your many talents with a fellow classmate.",
        starCount: 5,
        winners: []
      }
    )
    Challenges.insert(
      {
        name: "Tutor",
        description: "Tutor a friend on something you know that they want to understand better.",
        starCount: 5,
        winners: []
      }
    )
    Challenges.insert(
      {
        name: "Hugs",
        description: "Give Kevin Kevin a hug.",
        starCount: 5,
        winners: []
      }
    )
    Challenges.insert(
      {
        name: "Walk/Ride",
        description: "Walk and or ride your bike to school for a full week.",
        starCount: 5,
        winners: []
      }
<<<<<<< HEAD
    )    
=======
    )

    // for (let i = 0; i < 5; i++) {

    //   var fakeChallenge = {}

    //   fakeChallenge.name = Fake.sentence()
    //   fakeChallenge.description = Fake.sentence()
    //   fakeChallenge.starCount = 5
    //   fakeChallenge.winners = []

    //   Challenges.insert(fakeChallenge);
    //   }
>>>>>>> feature-tidy-components
  }
});

Meteor.publish('teams', function teamsPublication() {
  return Meteor.users.find({ teamId: { $exists: true } }, { fields: { 'username': 1, 'starCount': 1, 'teamId': 1 } });
});

Meteor.publish('currentUserCompletedChallenges', function teamsPublication() {
  console.log(id)
  return Meteor.users.find({}, {});
});

Meteor.publish('challenges', function challengesPublication(id) {
  if (id) {
    return Challenges.find({ _id: id });
  } else {
    return Challenges.find({});
  }
});

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
      incrementStarCount: function () {
        // return Tickets.remove({PLU: "0000000000000"});
      },
      updateChallengeWinners: function () {

      }
    });
  })
}
