import { Meteor } from 'meteor/meteor'
import { chai } from 'meteor/practicalmeteor:chai'
import { teamStarsFinder } from './'

const teams = [
  {
    "_id": "ta8WSE5ermcQyBxGX",
    "username": "Jody",
    "teamId": "AD",
    "starCount": 10
  },
  {
    "_id": "d4NdHy3Nxqku7MN7S",
    "username": "Amir",
    "teamId": "UI",
    "starCount": 15
  },
  {
    "_id": "BaPqqbzf6uvTdfwAE",
    "username": "Kevin",
    "teamId": "WD",
    "starCount": 0
  },
  {
    "_id": "DwzB2jp5fDcZK26wq",
    "username": "Robert",
    "teamId": "AD",
    "starCount": 24
  },
  {
    "_id": "MRz6MwYfErHo9Aamx",
    "username": "Tracey",
    "starCount": 35,
    "teamId": "AD"
  },
  {
    "_id": "k3ezgBDwDZYj6wAZR",
    "username": "Fergus",
    "starCount": 40,
    "teamId": "DM"
  },
  {
    "_id": "msE6HxEEw6hCNLJra",
    "username": "Brandon",
    "starCount": 30,
    "teamId": "AD"
  },
  {
    "_id": "25EERbFqnQzcFektr",
    "username": "Anna",
    "starCount": 30,
    "teamId": "AD"
  },
  {
    "_id": "WuyWdjRJNsAxegAuK",
    "username": "Quinlan",
    "starCount": 30,
    "teamId": "DM"
  },
  {
    "_id": "EGuZWhfieYvReZwCi",
    "username": "Sharifa",
    "starCount": 25,
    "teamId": "WD"
  },
  {
    "_id": "47YAyGoFTQ7wkztmj",
    "username": "Scott",
    "starCount": 55,
    "teamId": "UX"
  },
  {
    "_id": "iyoAjEoW7SApwjAaP",
    "username": "ScottFace",
    "starCount": 12,
    "teamId": "UX"
  }]


const lookingFor = [
  {
    players: [
      {
        _id: "MRz6MwYfErHo9Aamx",
        starCount: 35,
        teamId: "AD",
        username: "Tracey"
      },
      {
        _id: "msE6HxEEw6hCNLJra",
        starCount: 30,
        teamId: "AD",
        username: "Brandon"
      },
      {
        _id: "25EERbFqnQzcFektr",
        starCount: 30,
        teamId: "AD",
        username: "Anna"
      },
      {
        _id: "DwzB2jp5fDcZK26wq",
        starCount: 24,
        teamId: "AD",
        username: "Robert"
      },
      {
        _id: "ta8WSE5ermcQyBxGX",
        starCount: 10,
        teamId: "AD",
        username: "Jody"
      },
    ],
    starCount: 129,
    teamId: "AD"
  },
  {
    players: [
      {
        _id: "k3ezgBDwDZYj6wAZR",
        starCount: 40,
        teamId: "DM",
        username: "Fergus"
      },
      {
        _id: "WuyWdjRJNsAxegAuK",
        starCount: 30,
        teamId: "DM",
        username: "Quinlan"
      },
    ],
    starCount: 70,
    teamId: "DM"
  },
  {
    players: [
      {
        _id: "47YAyGoFTQ7wkztmj",
        starCount: 55,
        teamId: "UX",
        username: "Scott"
      },
      {
        _id: "iyoAjEoW7SApwjAaP",
        starCount: 12,
        teamId: "UX",
        username: "ScottFace"
      },
    ],
    starCount: 67,
    teamId: "UX"
  },
  {
    players: [
      {
        _id: "EGuZWhfieYvReZwCi",
        starCount: 25,
        teamId: "WD",
        username: "Sharifa"
      },
      {
        _id: "BaPqqbzf6uvTdfwAE",
        starCount: 0,
        teamId: "WD",
        username: "Kevin"
      },
    ],
    starCount: 25,
    teamId: "WD"
  },
  {
    players: [
      {
        _id: "d4NdHy3Nxqku7MN7S",
        starCount: 15,
        teamId: "UI",
        username: "Amir"
      },
    ],
    starCount: 15,
    teamId: "UI"
  },
]


if (Meteor.isClient) {
  describe('reusable functions - teamStarsFinder', function () {
    it('should take an array of objects, with a particular layout, as its input, do some work on the array, and compare its output with a manually entered array of objects, checking if they\'re deeply equal', function () {
      const teamStarsFinderOutput = teamStarsFinder(teams)
      chai.assert.deepEqual(teamStarsFinderOutput, lookingFor)
    })
    it('should not be deeply equal to a manually entered array that matches with teamStarsFinder\'s output but also has an additional object pushed onto the end of the array', function () {
      const teamStarsFinderOutput = teamStarsFinder(teams)
      let modifiedLookingFor = lookingFor
      modifiedLookingFor.push({teamId: 'face', starCount: 666})
      chai.assert.notDeepEqual(teamStarsFinderOutput, modifiedLookingFor)
    })
  })
}