import { Meteor } from 'meteor/meteor';
import { Challenges } from '../imports/api/collections.js'
import { Accounts } from 'meteor/accounts-base';

// import '/imports/startup/server';
// import '../imports/api/api-teams.js';
Accounts.onCreateUser((options, user) => {

  user.challenges = []
  user.starCount = 0
  user.teamId = 'Unassigned'
  return user;
});
Meteor.startup(() => {
  // code to run on server at startup
if(!Meteor.users.find().count()) {
  for(let i = 0; i < 4; i++) {

    var fakeUser = Fake.user({
        fields: ['username', 'emails.address'],
    });

  fakeUser.teamId = Fake.color()
  fakeUser.starCount = Math.floor(Math.random(5));
  fakeUser.challenges = []

  Meteor.users.insert(fakeUser);
    }
  }
if(!Challenges.find().count()) {
  for(let i = 0; i < 5; i++) {

    var fakeChallenge = {}

    fakeChallenge.name = Fake.sentence()
    fakeChallenge.description = Fake.sentence()
    fakeChallenge.starCount = 5
    fakeChallenge.winners = []

     Challenges.insert(fakeChallenge);
    }
  }
});
  Meteor.publish('teams', function teamsPublication() {
    return Meteor.users.find({teamId: {$exists: true}},  {fields: {'username': 1, 'starCount': 1, 'teamId': 1}});
  });
   Meteor.publish('challenges', function challengesPublication(id) {
     if(id) {
       return Challenges.find({_id: id});
     } else {
       return Challenges.find({});
     }
  });
// Meteor.methods({
//   'challenges.insert'(text) {
//     check(text, String);
//     // add update method if user id matches user id update
//     Challenges.insert({
//       text,
//       createdAt: new Date(),
//       challenge: this.challengeId,
//       challengename: Meteor.challenge.findOne(this.challengeId).challengename,
//     });
//   },
// });
