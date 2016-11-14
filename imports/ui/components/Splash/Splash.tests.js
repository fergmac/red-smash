import Splash from './'
import React from 'react'
import { Meteor } from 'meteor/meteor'
import { shallow } from 'enzyme'
import { chai } from 'meteor/practicalmeteor:chai'

if (Meteor.isClient) {
  describe('component - Splash', () => {
    describe('render', () => {
      it('should render', () => {
        const item = shallow(<Splash />);
        chai.assert.equal(item.text(), 'REDSMASH');
      });
    });
  });
}