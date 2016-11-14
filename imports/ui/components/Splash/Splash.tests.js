import Splash from './'
import React from 'react'
import { Meteor } from 'meteor/meteor'
import { shallow } from 'enzyme'
import { chai } from 'meteor/practicalmeteor:chai'

if (Meteor.isClient) {
  describe('component - Splash', () => {
    it('should render', () => {
      const item = shallow(<Splash />);
      chai.assert.equal(item.text(), 'REDSMASH');
      // chai.assert.strictEqual(item.hasClass('text-center'), 'RED SMASH')
      // chai.assert.equal(item.find('.editing').length, 0);
      // chai.assert.equal(item.find('input[type="text"]').prop('defaultValue'), 'testing');
    });
  });
}