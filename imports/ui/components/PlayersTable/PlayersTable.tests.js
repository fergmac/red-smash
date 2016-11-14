import PlayersTable from './'
import React from 'react'
import { Meteor } from 'meteor/meteor'
import { shallow } from 'enzyme'
import { chai } from 'meteor/practicalmeteor:chai'
import { sinon } from 'meteor/practicalmeteor:sinon'

const tableData = [
  {
    id: "MRz6MwYfErHo9Aamx",
    starCount: 35,
    teamId: "AD",
    username: "Tracey",
  },
  {
    id: "47YAyGoFTQ7wkztmj",
    starCount: 55,
    teamId: "UX",
    username: "Scott",
  },
  {
    id: "k3ezgBDwDZYj6wAZR",
    starCount: 40,
    teamId: "DM",
    username: "Fergus",
  },
]

if (Meteor.isClient) {
  describe('component - PlayersTable', () => {
    describe('render', () => {
      it('should render', () => {
        const item = shallow(<PlayersTable players={tableData} />);
        chai.assert(item.hasClass('table-striped'));
      });

      it('should render the data passed into the table via props', () => {
        const item = shallow(<PlayersTable players={tableData} />);
        chai.assert(item.html().search('2nd') >= 0);
      });
    });

    describe('logic', () => {
      it('should call the numberSuffixer function', () => {
        numberSuffixer = sinon.spy()
        shallow(<PlayersTable players={tableData} />)
        expect(numberSuffixer.called)
      });
    });
  });
}