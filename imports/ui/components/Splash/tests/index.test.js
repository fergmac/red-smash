import React from 'react'
import Splash from '../'
import renderer from 'react-test-renderer'

describe('Splash', () => {
  it('renders a Splash')
})

test('renders the Splasher', () => {
  const tree = renderer.create(
    <Splash />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
