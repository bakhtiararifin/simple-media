import React from 'react'
import { Button } from 'react-native-elements'

import { colors } from '@theme'

const CustomButton = ({ title, ...otherProps }) => {
  return (
    <Button title={title} backgroundColor={colors.primary} color={colors.white} {...otherProps} />
  )
}

export default CustomButton
