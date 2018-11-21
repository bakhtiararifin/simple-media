import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation'

import ArticlesContainer from './containers/articles/ArticlesContainer'
import SearchArticlesContainer from './containers/search-articles/SearchArticlesContainer'
import DetailArticleContainer from './containers/detail-article/DetailArticleContainer'
import BooksContainer from './containers/books/BooksContainer'

const AppDrawerNavigator = createDrawerNavigator({
  ArticlesStack: createStackNavigator(
    {
      Articles: {
        screen: ArticlesContainer,
      },
      SearchArticles: {
        screen: SearchArticlesContainer,
      },
      DetailArticle: {
        screen: DetailArticleContainer,
      },
    },
    {
      navigationOptions: {
        drawerLabel: 'Artikel',
      },
    },
  ),
  BooksStack: createStackNavigator(
    {
      Books: {
        screen: BooksContainer,
      },
    },
    {
      navigationOptions: {
        drawerLabel: 'Buku',
      },
    },
  ),
})

export default createAppContainer(AppDrawerNavigator)
