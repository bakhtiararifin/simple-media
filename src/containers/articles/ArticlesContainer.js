import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native-elements'

import * as articlesActions from '@redux/articles'

class RecitationsContainer extends React.Component {
  async componentDidMount() {
    const { searchArticles } = this.props

    await searchArticles()
  }

  render() {
    return <Text>Articles</Text>
  }
}

RecitationsContainer.navigationOptions = ({ navigation }) => {
  return {
    title: 'Artikel',
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
