import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Teams = new Mongo.Collection('teams');

if (Meteor.isServer) {
  // This code only runs on the server
 
  Meteor.publish('teams', function teamsPublication() {
    return Teams.find({

    });
  });
}

Meteor.methods({
  'teams.insert'(text) {
    check(text, String);
    
    Teams.insert({
      text,
      createdAt: new Date(),
      team: this.teamId,
      teamname: Meteor.team.findOne(this.teamId).teamname,
    });
  },
});
