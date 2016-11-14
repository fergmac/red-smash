// import { lookingFor } from './teamStarsFinder.tests'
import { Meteor } from 'meteor/meteor'
import { chai } from 'meteor/practicalmeteor:chai'
import { pieFilling } from './'

const lookingForPie = [
  {
    color: "#9B121E",
    highlight: "#9B121E",
    label: "AD",
    labelColor: "white",
    labelFontSize: "16px",
    value: 129
  },
  {
    color: "#CB3B46",
    highlight: "#CB3B46",
    label: "DM",
    labelColor: "white",
    labelFontSize: "16px",
    value: 70
  },
  {
    color: "#F0AD4E",
    highlight: "#F0AD4E",
    label: "UX",
    labelColor: "white",
    labelFontSize: "16px",
    value: 67
  },
  {
    color: "#F0D64E",
    highlight: "#F0D64E",
    label: "WD",
    labelColor: "white",
    labelFontSize: "16px",
    value: 25
  },
  {
    color: "#222222",
    highlight: "#222222",
    label: "UI",
    labelColor: "white",
    labelFontSize: "16px",
    value: 15
  }
]

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
  describe('reusable functions - pieFilling', function () {
    it('should take an array of objects, with a particular layout, as its input, do some work on the array, and compare its output with a manually entered array of objects, checking if they\'re deeply equal', function () {
      const pieFillingOutput = pieFilling(lookingFor)
      chai.assert.deepEqual(pieFillingOutput, lookingForPie)
    })
    
    it('should not be deeply equal to a manually entered array that matches with pieFilling\'s output but also has an additional object pushed onto the end of the array', function () {
      const pieFillingOutput = pieFilling(lookingFor)
      let modifiedLookingForPie = lookingForPie
      modifiedLookingForPie.push({label: 'face', value: 666})
      chai.assert.notDeepEqual(pieFillingOutput, modifiedLookingForPie)
    })
  })
}
