import React from 'react'
import Spacer from '@components/Spacer'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(<Spacer />).toJSON()
  expect(tree).toMatchSnapshot()
})
