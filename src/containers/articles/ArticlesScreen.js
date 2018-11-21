import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-elements'
import moment from 'moment'

import { colors } from '@theme'

const ArticlesScreen = ({ navigation, articles }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {articles.map(article => (
          <TouchableOpacity
            key={article._id}
            onPress={() => navigation.navigate('DetailArticle', { article })}
          >
            <View style={{ padding: 15, borderBottomColor: colors.border, borderBottomWidth: 1 }}>
              <Text h3>{article.headline.main}</Text>
              <Text>{article.snippet}</Text>
              <Text>{moment(article.pub_date).format('MMMM Do YYYY')}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default ArticlesScreen
