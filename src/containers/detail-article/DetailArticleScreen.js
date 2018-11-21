import React from 'react'
import { View, WebView } from 'react-native'

const DetailArticlesScreen = ({ article }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: article.web_url }} style={{ marginTop: 20 }} />
    </View>
  )
}

export default DetailArticlesScreen
