import React from 'react'
import PlayersTable from '../'
import renderer from 'react-test-renderer'
import { sortByKey, numberSuffixer } from '../../../../functions'

test('renders the PlayersTable component (a table, populated by props!)', () => {
  const players = [
    {
      username: 'Thomas',
      teamId: 'UX',
      starCount: 12
    },
    {
      username: 'Mike',
      teamId: 'UX',
      starCount: 8
    },
    {
      username: 'Zoe',
      teamId: 'AD',
      starCount: 14
    },
    {
      username: 'Barry',
      teamId: 'WD',
      starCount: 3
    },
    {
      username: 'Chloe',
      teamId: 'DM',
      starCount: 11
    },
    {
      username: 'Roberta',
      teamId: 'AD',
      starCount: 17
    },
    {
      username: 'Clarence',
      teamId: 'WD',
      starCount: 7
    },
    {
      username: 'Wilfred',
      teamId: 'UI',
      starCount: 15
    },
    {
      username: 'Audrey',
      teamId: 'WD',
      starCount: 4
    },
    {
      username: 'Donatello',
      teamId: 'UI',
      starCount: 9
    },
    {
      username: 'Kyle',
      teamId: 'DM',
      starCount: 19
    },
  ]

  const tree = renderer.create(
    <PlayersTable players={players} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
