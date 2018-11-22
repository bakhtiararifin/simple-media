import React from 'react'
import FormPicker from '@components/FormPicker'

import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer
    .create(
      <FormPicker
        label="Gender"
        selectedValue="male"
        options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders correctly without label', () => {
  const tree = renderer
    .create(
      <FormPicker
        selectedValue="male"
        options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
