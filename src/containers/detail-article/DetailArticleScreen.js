import React from 'react'
import { View, WebView } from 'react-native'

const DetailArticlesScreen = ({ article }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: article.web_url }}
        style={{ marginTop: -70 }}
        startInLoadingState
        javaScriptEnabled={false}
      />
    </View>
  )
}

export default DetailArticlesScreen
