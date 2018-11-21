import { combineReducers } from 'redux'

import articles from './articles'
import books from './books'

export default combineReducers({
  articles,
  books,
})
