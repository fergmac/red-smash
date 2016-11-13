import { Meteor } from 'meteor/meteor'
import { chai } from 'meteor/practicalmeteor:chai'

if (Meteor.isServer) {
  describe('Server-Side', function () {
    it('does something servery that should be tested', function () {
      // This code will be executed by the test driver when the app is started
      // in the correct mode
      chai.assert.equal(1, 1)
    })
  })
}
