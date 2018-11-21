import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from 'react-native-elements'
import moment from 'moment'

import { colors } from '@theme'

const BooksScreen = ({ navigation, articles }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Books</Text>
      {/* <ScrollView>
        {articles.map(article => (
          <View
            key={article._id}
            style={{ padding: 15, borderBottomColor: colors.border, borderBottomWidth: 1 }}
          >
            <Text h3>{article.headline.main}</Text>
            <Text>{article.snippet}</Text>
            <Text>{moment(article.pub_date).format('MMMM Do YYYY')}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  )
}

export default BooksScreen
