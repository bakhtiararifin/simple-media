import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

import { colors } from '@theme'
import FormPicker from '@components/FormPicker'
import Text from '@components/Text'

const BooksScreen = ({ list, changeList, books }) => {
  return (
    <View style={{ flex: 1 }}>
      <FormPicker
        selectedValue={list}
        onValueChange={value => changeList(value)}
        options={[
          { label: 'Ebook Fiction', value: 'e-book-fiction' },
          { label: 'Hardcover Fiction', value: 'hardcover-fiction' },
        ]}
      />

      <ScrollView>
        {books.map(listBook => {
          const book = listBook.book_details[0]
          return (
            <View key={book.primary_isbn13} style={styles.bookContainer}>
              <Text bold>{book.title}</Text>
              <Text>{book.description}</Text>
              <Text secondary>{`${book.author} | ${book.publisher}`}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  bookContainer: { padding: 15, borderBottomColor: colors.border, borderBottomWidth: 1 },
})

export default BooksScreen
