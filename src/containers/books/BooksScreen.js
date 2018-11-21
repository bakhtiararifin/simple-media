import React from 'react'
import { ScrollView, View, Picker } from 'react-native'
import { FormLabel, Divider, Text } from 'react-native-elements'

import { colors } from '@theme'

const BooksScreen = ({ list, changeList, books }) => {
  return (
    <View style={{ flex: 1 }}>
      <FormLabel>List</FormLabel>
      <Picker
        selectedValue={list}
        style={{ marginHorizontal: 15 }}
        onValueChange={value => changeList(value)}
      >
        <Picker.Item label="Ebook Fiksi" value="e-book-fiction" />
        <Picker.Item label="Buku Fiksi" value="hardcover-fiction" />
      </Picker>
      <Divider style={{ marginHorizontal: 15, marginBottom: 30 }} />

      <ScrollView>
        {books.map(listBook => {
          const book = listBook.book_details[0]
          return (
            <View
              key={book.primary_isbn13}
              style={{ padding: 15, borderBottomColor: colors.border, borderBottomWidth: 1 }}
            >
              <Text>{book.title}</Text>
              <Text>{book.description}</Text>
              <Text>{book.author}</Text>
              <Text>{book.publisher}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default BooksScreen
