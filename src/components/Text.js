import React from 'react'
import { Text } from 'react-native-elements'

import { colors } from '@theme'

const CustomText = ({ bold = false, secondary = false, style = {}, ...otherProps }) => {
  const defaultStyle = {
    color: colors.textPrimary,
    fontSize: 14,
    paddingVertical: 5,
  }

  if (bold) {
    defaultStyle.fontWeight = 'bold'
  }

  if (secondary) {
    defaultStyle.color = colors.textSecondary
    defaultStyle.fontSize = 12
  }

  return <Text style={{ ...defaultStyle, ...style }} {...otherProps} />
}

export default CustomText
