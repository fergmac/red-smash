// Meteor.startup(() => {
//   // code to run on server at startup
// if(!Meteor.users.find().count()) {
//   for(let i = 0; i < 4; i++) {

//     var fakeUser = Fake.user({
//         fields: ['name', 'username', 'emails.address'],
//     });

//   fakeUser.teamId = Fake.color()
//   fakeUser.starCount = Math.floor(Math.random(5));
//   fakeUser.challengesCompleted = []

//   Meteor.users.insert(fakeUser);
//     }
//   }
// if(!Challenges.find().count()) {
//   for(let i = 0; i < 5; i++) {

//     var fakeChallenge = {}

//     fakeChallenge.name = Fake.sentence()
//     fakeChallenge.description = Fake.sentence()
//     fakeChallenge.starCount = 5
//     fakeChallenge.winners = []

//      Challenges.insert(fakeChallenge);
//     }
//   }
// });
