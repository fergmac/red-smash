import { Meteor } from 'meteor/meteor';
import { Challenges } from '../imports/api/collections.js'

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
