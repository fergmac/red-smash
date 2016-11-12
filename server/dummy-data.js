import { Meteor } from 'meteor/meteor';
import { Challenges } from '../imports/api/collections.js'

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
    )
  }
});
