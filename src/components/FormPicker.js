import React from 'react'
import { View, Picker } from 'react-native'
import { FormLabel, Divider } from 'react-native-elements'

const CustomFormPicker = ({ label, selectedValue, options = [], style = {}, ...otherProps }) => {
  const defaultStyle = {
    marginHorizontal: 15,
  }

  return (
    <View>
      {label && <FormLabel>{label}</FormLabel>}
      <Picker selectedValue={selectedValue} style={{ ...defaultStyle, ...style }} {...otherProps}>
        {options.map(option => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
      <Divider style={{ marginHorizontal: 15 }} />
    </View>
  )
}

export default CustomFormPicker
