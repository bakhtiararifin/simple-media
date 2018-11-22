import React from 'react'
import { TouchableOpacity, FlatList, View, Image, StyleSheet } from 'react-native'
import moment from 'moment'

import Text from '@components/Text'
import { colors } from '@theme'

const ArticlesScreen = ({ navigation, articles, loadMore }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={articles}
        renderItem={({ item }) => {
          const imageUrl = item.multimedia.length > 0 ? item.multimedia[0].url : null
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailArticle', { article: item })}
            >
              <View style={styles.articleContainer}>
                {imageUrl && (
                  <Image
                    resizeMode={'cover'}
                    style={{ width: '100%', height: 200 }}
                    source={{ uri: `https://www.nytimes.com/${imageUrl}` }}
                  />
                )}

                <Text bold>{item.headline.main}</Text>
                <Text>{item.snippet}</Text>
                <Text secondary>{moment(item.pub_date).format('MMMM Do YYYY')}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
        keyExtractor={article => article._id}
        onEndReached={loadMore}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  articleContainer: { padding: 15, borderBottomColor: colors.border, borderBottomWidth: 2 },
})

export default ArticlesScreen
