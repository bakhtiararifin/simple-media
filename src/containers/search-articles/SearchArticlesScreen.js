import React from 'react'
import { View } from 'react-native'

import Button from '@components/Button'
import FormInput from '@components/FormInput'
import FormPicker from '@components/FormPicker'
import Spacer from '@components/Spacer'

const ArticlesScreen = ({ q, sort, updateState, searchArticles }) => {
  return (
    <View style={{ flex: 1 }}>
      <FormInput label={'Keyword'} value={q} onChangeText={value => updateState({ q: value })} />

      <FormPicker
        label={'Sort By'}
        selectedValue={sort}
        onValueChange={value => updateState({ sort: value })}
        options={[{ label: 'Newest', value: 'newest' }, { label: 'Oldest', value: 'oldest' }]}
      />

      <Spacer />

      <Button title={'Search'} onPress={searchArticles} />
    </View>
  )
}

export default ArticlesScreen
