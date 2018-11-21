import { createStackNavigator, createAppContainer } from 'react-navigation'

import ArticlesContainer from './containers/articles/ArticlesContainer'
import SearchArticlesContainer from './containers/search-articles/SearchArticlesContainer'
import BooksContainer from './containers/books/BooksContainer'

const AppNavigator = createStackNavigator(
  {
    Articles: {
      screen: ArticlesContainer,
    },
    SearchArticles: {
      screen: SearchArticlesContainer,
    },
    Books: {
      screen: BooksContainer,
    },
  },
  {
    initialRouteName: 'Books',
  },
)

export default createAppContainer(AppNavigator)
