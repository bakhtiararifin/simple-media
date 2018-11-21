import React from 'react'
import { connect } from 'react-redux'

import * as articlesActions from '@redux/articles'
import { navigationOptions } from '@theme'
import SearchArticlesScreen from './SearchArticlesScreen'

class SearchArticlesContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      keyword: '',
      sort: 'newest',
    }

    this.updateState = this.updateState.bind(this)
    this.searchArticles = this.searchArticles.bind(this)
  }

  updateState(newState) {
    this.setState(newState)
  }

  searchArticles() {
    alert('search articles')
  }

  render() {
    return (
      <SearchArticlesScreen
        {...this.state}
        {...this.props}
        updateState={this.updateState}
        searchArticles={this.searchArticles}
      />
    )
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
