import React from 'react'
import { View, Picker } from 'react-native'
import { FormLabel, FormInput, Divider, Button } from 'react-native-elements'

import { colors } from '@theme'

const ArticlesScreen = ({ q, sort, updateState, searchArticles }) => {
  return (
    <View style={{ flex: 1 }}>
      <FormLabel>Keyword</FormLabel>
      <FormInput value={q} onChangeText={value => updateState({ q: value })} />
      <Divider style={{ marginHorizontal: 15, marginBottom: 15 }} />

      <FormLabel>Urutkan dari</FormLabel>
      <Picker
        selectedValue={sort}
        style={{ marginHorizontal: 15 }}
        onValueChange={value => updateState({ sort: value })}
      >
        <Picker.Item label="Berita terbaru" value="newest" />
        <Picker.Item label="Berita terlama" value="oldest" />
      </Picker>
      <Divider style={{ marginHorizontal: 15, marginBottom: 30 }} />

      <Button
        title="Cari"
        backgroundColor={colors.primary}
        color={colors.white}
        onPress={searchArticles}
      />
    </View>
  )
}

export default ArticlesScreen
