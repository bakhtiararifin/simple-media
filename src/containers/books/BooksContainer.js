import React from 'react'
import { connect } from 'react-redux'

import * as booksActions from '@redux/books'
import { navigationOptions } from '@theme'
import BooksScreen from './BooksScreen'

class BooksContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: 'e-book-fiction',
    }

    this.changeList = this.changeList.bind(this)
  }

  async componentDidMount() {
    const { searchBooks } = this.props

    await searchBooks({ list: this.state.list })
  }

  async changeList(list) {
    this.setState({ list })

    await searchBooks({ list: this.state.list })
  }

  render() {
    return <BooksScreen {...this.state} {...this.props} changeList={this.changeList} />
  }
}

BooksContainer.navigationOptions = ({ navigation }) => {
  return {
    title: 'Buku',
    ...navigationOptions,
  }
}

export default connect(
  state => ({
    books: state.books.data,
  }),
  {
    searchBooks: booksActions.searchBooks,
  },
)(BooksContainer)
