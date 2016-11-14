// import ChallengeDetails from './'
// import React from 'react'
// import { Meteor } from 'meteor/meteor'
// import { shallow } from 'enzyme'
// import { chai } from 'meteor/practicalmeteor:chai'
// import { sinon } from 'meteor/practicalmeteor:sinon'
// import ReactRouter from 'react-router'

// const exampleChallenge = [
//   {
//     _id: "Jx8xfWQ7pWhFZSYLv",
//     name: "Selfie",
//     description: "Take a selfie with someone you don't know yet.",
//     starCount: 5,
//     winners: [{}]
//   }
// ]

// const exampleCurrentUser = {
//   _id: "47YAyGoFTQ7wkztmj",
//   emails: [],
//   username: "Scott"
// }

// if (Meteor.isClient) {
//   describe('component - ChallengeDetails', () => {
//     describe('render', () => {
//       beforeEach(function () {
//         Template.registerHelper('_', key => key);
//         sinon.stub(ReactRouter, 'params', () => exampleChallenge[0]._id);
//         sinon.stub(Meteor, 'subscribe', () => ({
//           subscriptionId: 0,
//           ready: () => true,
//         }));
//       });

//       it('should render', () => {
//         const params = { id: "Jx8xfWQ7pWhFZSYLv" }
//         const item = shallow(<ChallengeDetails currentUser={exampleCurrentUser} challenges={exampleChallenge} />);
//         chai.assert.equal(item.html(), 'face');
//       });
//     });
//   });
// }