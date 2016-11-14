import { Meteor } from 'meteor/meteor'
import { chai } from 'meteor/practicalmeteor:chai'
import { sortByKey } from './'
import { numberSuffixer } from './'


if (Meteor.isClient) {
  describe('reusable functions - sortByKey', function () {
    const arrayToSort = [
      {
        teamId: 'AD',
        starCount: 14
      },
      {
        teamId: 'UX',
        starCount: 9
      },
      {
        teamId: 'WD',
        starCount: 17
      },
      {
        teamId: 'UI',
        starCount: 21
      },
      {
        teamId: 'DM',
        starCount: 12
      },
    ]

    const myManualSortLeastToGreatest = [
      {
        teamId: 'UX',
        starCount: 9
      },
      {
        teamId: 'DM',
        starCount: 12
      },
      {
        teamId: 'AD',
        starCount: 14
      },
      {
        teamId: 'WD',
        starCount: 17
      },
      {
        teamId: 'UI',
        starCount: 21
      },
    ]

    const myManualSortGreatestToLeast = [
      {
        teamId: 'UI',
        starCount: 21
      },
      {
        teamId: 'WD',
        starCount: 17
      },
      {
        teamId: 'AD',
        starCount: 14
      },
      {
        teamId: 'DM',
        starCount: 12
      },
      {
        teamId: 'UX',
        starCount: 9
      },
    ]

    it('sorts an example array of objects by the object key, least to greatest', function () {
      chai.assert.deepEqual(arrayToSort.sort(sortByKey('starCount', -1)), myManualSortLeastToGreatest)
    })

    it('sorts an example array of objects by the object key, greatest to least', function () {
      chai.assert.deepEqual(arrayToSort.sort(sortByKey('starCount')), myManualSortGreatestToLeast)
    })
  })
}