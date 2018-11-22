import React from 'react'
import { connect } from 'react-redux'

import * as articlesActions from '@redux/articles'
import { navigationOptions } from '@theme'
import Button from '@components/Button'
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
    const { navigation, searchArticles } = this.props
    const page = this.state.page + 1
    const sort = navigation.state.params ? navigation.state.params.sort : 'newest'
    const q = navigation.state.params ? navigation.state.params.q : ''

    this.setState({ page })

    await searchArticles({ sort, q, page })
  }

  render() {
    return <ArticlesScreen {...this.props} loadMore={this.loadMore} />
  }
}

ArticlesContainer.navigationOptions = ({ navigation }) => {
  return {
    title: 'Simple Media',
    headerRight: (
      <Button onPress={navigation.getParam('searchArticle')} iconRight={{ name: 'search' }} />
    ),
    headerLeft: <Button onPress={() => navigation.toggleDrawer()} icon={{ name: 'dehaze' }} />,
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
