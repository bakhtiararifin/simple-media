import React from 'react'
import { connect } from 'react-redux'

import * as articlesActions from '@redux/articles'
import { navigationOptions } from '@theme'
import SearchArticlesScreen from './SearchArticlesScreen'

class SearchArticlesContainer extends React.Component {
  render() {
    return <SearchArticlesScreen {...this.props} />
  }
}

SearchArticlesContainer.navigationOptions = ({ navigation }) => {
  return {
    title: 'Pencarian',
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
)(SearchArticlesContainer)
