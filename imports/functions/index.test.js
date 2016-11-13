import { Meteor } from 'meteor/meteor'
import { chai } from 'meteor/practicalmeteor:chai'
import numberSuffixer from './'
import sortByKey from './'

if (Meteor.isClient) {
  describe('numberSuffixer', function () {
    it('converts the number 721 to \'721st\'', function () {
      return false
    })
  })
}