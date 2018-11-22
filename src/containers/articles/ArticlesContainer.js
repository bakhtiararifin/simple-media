import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'

import * as articlesActions from '@redux/articles'
import { navigationOptions, colors } from '@theme'
import ArticlesScreen from './ArticlesScreen'

class ArticlesContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { page: 0 }

    this.searchArticle = this.searchArticle.bind(this)
    this.loadMore = this.loadMore.bind(this)
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

  async loadMore() {
    const page = this.state.page + 1
    this.setState({ page })

    await this.props.searchArticles({ sort: 'newest', page })
  }

  render() {
    return <ArticlesScreen {...this.props} loadMore={this.loadMore} />
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
    headerLeft: (
      <Button
        onPress={() => navigation.toggleDrawer()}
        icon={{ name: 'dehaze' }}
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
