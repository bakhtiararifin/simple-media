import React from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput, Divider } from 'react-native-elements'

const CustomFormInput = ({ label, ...otherProps }) => {
  return (
    <View>
      <FormLabel>{label}</FormLabel>
      <FormInput {...otherProps} />
      <Divider style={{ marginHorizontal: 15, marginBottom: 15 }} />
    </View>
  )
}

export default CustomFormInput
