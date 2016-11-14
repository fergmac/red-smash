// import { Meteor } from 'meteor/meteor'
// import { chai } from 'meteor/practicalmeteor:chai'
// import { numberSuffixer } from './'
// import { sortByKey } from './'

// if (Meteor.isClient) {
//   describe('reusable functions', function () {
//     describe('numberSuffixer', function () {
//       it('converts the number 721 to \'721st\'', function () {
//         chai.assert.equal(numberSuffixer(721), '721st')
//       })

//       it('converts the string 721 to \'721st\'', function () {
//         chai.assert.equal(numberSuffixer('721'), '721st')
//       })

//       it('converts the number 211 to \'211th\'', function () {
//         chai.assert.equal(numberSuffixer(211), '211th')
//       })

//       it('converts the string 1000000000000001 to \'1000000000000001st\'', function () {
//         chai.assert.equal(numberSuffixer('1000000000000001'), '1000000000000001st')
//       })

//       it('fails to convert the number 10000000000000000000000002 to \'10000000000000000000000002nd\'', function () {
//         chai.assert.equal(numberSuffixer(10000000000000000000000002), 10000000000000000000000002)
//       })

//       it('fails to convert the string 10000000000000000000000002 to \'10000000000000000000000002nd\' because of floating point math error-handling', function () {
//         chai.assert.equal(numberSuffixer(10000000000000000000000002), 10000000000000000000000002)
//       })

//       it('returns the number -211 as \'-211\'', function () {
//         chai.assert.equal(numberSuffixer(-211), '-211')
//       })

//       it('returns the number 102.4 as 102.4', function () {
//         chai.assert.equal(numberSuffixer(102.4), 102.4)
//       })

//       it('returns the string \'102.4\' as \'102.4\'', function () {
//         chai.assert.equal(numberSuffixer('102.4'), '102.4')
//       })

//       it('returns the string \'face\' as \'face\'', function () {
//         chai.assert.equal(numberSuffixer('face'), 'face')
//       })

//       it('returns an object that is equal to the input (using deepEqual)', function () {
//         chai.assert.deepEqual(numberSuffixer({ face: 'feet' }), { face: 'feet' })
//       })
//     })

//     describe('sortByKey', function () {
//       const arrayToSort = [
//         {
//           teamId: 'AD',
//           starCount: 14
//         },
//         {
//           teamId: 'UX',
//           starCount: 9
//         },
//         {
//           teamId: 'WD',
//           starCount: 17
//         },
//         {
//           teamId: 'UI',
//           starCount: 21
//         },
//         {
//           teamId: 'DM',
//           starCount: 12
//         },
//       ]

//       const myManualSortLeastToGreatest = [
//         {
//           teamId: 'UX',
//           starCount: 9
//         },
//         {
//           teamId: 'DM',
//           starCount: 12
//         },
//         {
//           teamId: 'AD',
//           starCount: 14
//         },
//         {
//           teamId: 'WD',
//           starCount: 17
//         },
//         {
//           teamId: 'UI',
//           starCount: 21
//         },
//       ]

//       const myManualSortGreatestToLeast = [
//         {
//           teamId: 'UI',
//           starCount: 21
//         },
//         {
//           teamId: 'WD',
//           starCount: 17
//         },
//         {
//           teamId: 'AD',
//           starCount: 14
//         },
//         {
//           teamId: 'DM',
//           starCount: 12
//         },
//         {
//           teamId: 'UX',
//           starCount: 9
//         },
//       ]

//       it('sorts an example array of objects by the object key, least to greatest', function () {
//         chai.assert.deepEqual(arrayToSort.sort(sortByKey('starCount', -1)), myManualSortLeastToGreatest)
//       })

//       it('sorts an example array of objects by the object key, greatest to least', function () {
//         chai.assert.deepEqual(arrayToSort.sort(sortByKey('starCount')), myManualSortGreatestToLeast)
//       })
//     })
//   })
// }