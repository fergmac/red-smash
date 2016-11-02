import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Challenges = new Mongo.Collection('challenges');

  // Meteor.publish('teams', function teamsPublication() {
  //   return Meteor.users.find({});
  // });
  //  Meteor.publish('challenges', function challengesPublication() {
  //   return Meteor.challenges.find({});
  // });

// if (Meteor.isServer) {
//   // This code only runs on the server
//    // Only publish tasks that are public or belong to the current user
//   Meteor.publish('challenges', function challengesPublication() {
//     return Challenges.find({

//     });
//   });
// }

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
