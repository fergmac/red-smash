import AccountsUIWrapper from './'
import React from 'react'
import { Meteor } from 'meteor/meteor'
import { shallow } from 'enzyme'
import { chai } from 'meteor/practicalmeteor:chai'
import { sinon } from 'meteor/practicalmeteor:sinon'

if (Meteor.isClient) {
  describe('component - AccountsUIWrapper', () => {
    describe('render', () => {
      it('should render (at least its <span> tag)', () => {
        const item = shallow(<AccountsUIWrapper />);
        chai.assert(item.html().search('<span>') >= 0);
      });
    });
  });
}