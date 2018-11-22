import React from 'react'
import FormInput from '@components/FormInput'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(<FormInput label="Name" />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders correctly without label', () => {
  const tree = renderer.create(<FormInput />).toJSON()
  expect(tree).toMatchSnapshot()
})
