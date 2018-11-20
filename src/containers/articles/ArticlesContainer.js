import React from 'react'
import { connect } from 'react-redux'

import * as articlesActions from '@redux/articles'
import { navigationOptions } from '@theme'
import ArticlesScreen from './ArticlesScreen'

class RecitationsContainer extends React.Component {
  async componentDidMount() {
    const { searchArticles } = this.props

    await searchArticles()
  }

  render() {
    return <ArticlesScreen {...this.props} />
  }
}

RecitationsContainer.navigationOptions = ({ navigation }) => {
  return {
    title: 'Test Kumparan',
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
)(RecitationsContainer)
