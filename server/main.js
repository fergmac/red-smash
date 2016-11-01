import { Meteor } from 'meteor/meteor';
// import '/imports/startup/server';
// import '../imports/api/api-teams.js';

Accounts.onCreateUser((options, user) => {

  user.challenges = []
  user.starCount = 0
//   user.team = options.team;
  return user;
});

Meteor.startup(() => {
  // code to run on server at startup
if(!Meteor.users.find().count()) {
  for(let i = 0; i < 4; i++) {

    var fakeUser = Fake.user({
        fields: ['name', 'username', 'emails.address'],
    });

  fakeUser.teamId = Fake.color()
  fakeUser.starCount = Math.floor(Math.random(5));
  fakeUser.challengesCompleted = []

  Meteor.users.insert(fakeUser);
    }
  }
});

  Meteor.publish('teams', function teamsPublication() {
    return Meteor.users.find({}, { fields: { 'teams': 1, 'starCount': 1}});
  });

