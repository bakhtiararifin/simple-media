import React from 'react'
import { connect } from 'react-redux'

import * as articlesActions from '@redux/articles'
import { navigationOptions } from '@theme'
import SearchArticlesScreen from './SearchArticlesScreen'

class SearchArticlesContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      q: '',
      sort: 'newest',
    }

    this.updateState = this.updateState.bind(this)
    this.searchArticles = this.searchArticles.bind(this)
  }

  updateState(newState) {
    this.setState(newState)
  }

  async searchArticles() {
    const { navigation, searchArticles } = this.props
    const params = {
      q: this.state.q,
      sort: this.state.sort,
    }

    await searchArticles(params)

    navigation.navigate('Articles', params)
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
    title: 'Filter',
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
