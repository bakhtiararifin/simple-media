import React from 'react'
import { TouchableOpacity, FlatList, View } from 'react-native'
import { Text } from 'react-native-elements'
import moment from 'moment'

import { colors } from '@theme'

const ArticlesScreen = ({ navigation, articles, loadMore }) => {
  return (
    <View style={{ flex: 1 }}>
        <FlatList
          data={articles}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailArticle', { article: item })}
            >
              <View style={{ padding: 15, borderBottomColor: colors.border, borderBottomWidth: 1 }}>
                <Text h3>{item.headline.main}</Text>
                <Text>{item.snippet}</Text>
                <Text>{moment(item.pub_date).format('MMMM Do YYYY')}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={article => article._id}
          onEndReached={loadMore}
        />
    </View>
  )
}

export default ArticlesScreen
