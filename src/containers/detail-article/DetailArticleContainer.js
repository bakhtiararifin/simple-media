import React from 'react'

import { navigationOptions } from '@theme'
import DetailArticleScreen from './DetailArticleScreen'

class DetailArticleContainer extends React.Component {
  render() {
    return <DetailArticleScreen article={this.props.navigation.state.params.article} />
  }
}

DetailArticleContainer.navigationOptions = ({ navigation }) => {
  return {
    title: 'Detail Artikel',
    ...navigationOptions,
  }
}

export default DetailArticleContainer
