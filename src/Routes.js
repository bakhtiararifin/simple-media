import { createStackNavigator, createAppContainer } from 'react-navigation'

import ArticlesContainer from './containers/articles/ArticlesContainer'

const AppNavigator = createStackNavigator({
  Articles: {
    screen: ArticlesContainer,
  },
})

export default createAppContainer(AppNavigator)
