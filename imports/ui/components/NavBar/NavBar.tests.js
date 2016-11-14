import NavBar from './'
import React from 'react'
import { Meteor } from 'meteor/meteor'
import { shallow } from 'enzyme'
import { chai } from 'meteor/practicalmeteor:chai'
import { sinon } from 'meteor/practicalmeteor:sinon'

if (Meteor.isClient) {
  describe('component - NavBar', () => {
    describe('render', () => {
      it('should render', () => {
        const item = shallow(<NavBar />);
        chai.assert(item.hasClass('navbar'));
      });
    });
  });
}