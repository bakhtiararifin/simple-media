import { createStackNavigator, createAppContainer } from 'react-navigation'

import ArticlesContainer from './containers/articles/ArticlesContainer'
import SearchArticlesContainer from './containers/search-articles/SearchArticlesContainer'

const AppNavigator = createStackNavigator({
  Articles: {
    screen: ArticlesContainer,
  },
  SearchArticles: {
    screen: SearchArticlesContainer,
  },
})

export default createAppContainer(AppNavigator)
