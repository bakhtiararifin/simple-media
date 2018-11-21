import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'

import * as articlesActions from '@redux/articles'
import { navigationOptions, colors } from '@theme'
import ArticlesScreen from './ArticlesScreen'

class ArticlesContainer extends React.Component {
  constructor(props) {
    super(props)

    this.searchArticle = this.searchArticle.bind(this)
  }

  async componentDidMount() {
    const { navigation, searchArticles } = this.props

    navigation.setParams({
      searchArticle: this.searchArticle,
    })

    await searchArticles({ sort: 'newest' })
  }

  searchArticle() {
    this.props.navigation.navigate('SearchArticles')
  }

  render() {
    return <ArticlesScreen {...this.props} />
  }
}

ArticlesContainer.navigationOptions = ({ navigation }) => {
  return {
    title: 'Test Kumparan',
    headerRight: (
      <Button
        onPress={navigation.getParam('searchArticle')}
        iconRight={{ name: 'search' }}
        backgroundColor={colors.primary}
      />
    ),
    ...navigationOptions,
  }
}

export default connect(
  state => ({
    articles: state.articles.data,
  }),
  {
    searchArticles: articlesActions.searchArticles,
  },
)(ArticlesContainer)
