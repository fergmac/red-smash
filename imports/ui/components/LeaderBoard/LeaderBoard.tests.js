import LeaderBoard from './'
import React from 'react'
import { Meteor } from 'meteor/meteor'
import { shallow } from 'enzyme'
import { chai } from 'meteor/practicalmeteor:chai'
import { sinon } from 'meteor/practicalmeteor:sinon'

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

if (Meteor.isClient) {
  describe('component - LeaderBoard', () => {
    describe('render', () => {
      it('should render', () => {
        const item = shallow(<LeaderBoard teams={teams} />);
        chai.assert(item.html().search('<h1>') >= 0);
      });
    });

    describe('logic', () => {
      it('should call the teamStarsFinder function', () => {
        teamStarsFinder = sinon.spy()
        shallow(<LeaderBoard teams={teams} />)
        expect(teamStarsFinder.called)
      });

      it('should call the pieFilling function', () => {
        pieFilling = sinon.spy()
        shallow(<LeaderBoard teams={teams} />)
        expect(pieFilling.called)
      });
    });
  });
}