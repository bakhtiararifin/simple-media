import React from 'react'
import Text from '@components/Text'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(<Text>text</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('bold text', () => {
  const tree = renderer.create(<Text bold>text</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('secondary text', () => {
  const tree = renderer.create(<Text secondary>text</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})
