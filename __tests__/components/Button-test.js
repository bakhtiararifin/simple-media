import React from 'react'
import Button from '@components/Button'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(<Button title="Button" />).toJSON()
  expect(tree).toMatchSnapshot()
})
