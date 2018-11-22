import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { colors } from '@theme'

const Loading = () => {
  return (
    <View style={{ padding: 15, justifyContent: 'center' }}>
      <ActivityIndicator color={colors.primary} />
    </View>
  )
}

export default Loading
