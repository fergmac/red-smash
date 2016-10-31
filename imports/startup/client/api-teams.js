import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Teams = new Mongo.Collection('teams');

if (Meteor.isServer) {
  // This code only runs on the server
   // Only publish tasks that are public or belong to the current user
  Meteor.publish('teams', function teamsPublication() {
    return Teams.find({

    });
  });
}

Meteor.methods({
  'teams.insert'(text) {
    check(text, String);
    // add update method if user id matches user id update
    Teams.insert({
      text,
      createdAt: new Date(),
      team: this.teamId,
      teamname: Meteor.team.findOne(this.teamId).teamname,
    });
  },
});
