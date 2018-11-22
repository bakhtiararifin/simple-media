export const SEARCH_BOOKS = 'simple-media/articles/SEARCH_BOOKS'
export const SEARCH_BOOKS_SUCCESS = 'simple-media/articles/SEARCH_BOOKS_SUCCESS'
export const SEARCH_BOOKS_FAIL = 'simple-media/articles/SEARCH_BOOKS_FAIL'

export default function reducer(state = { data: [] }, action) {
  switch (action.type) {
    case SEARCH_BOOKS:
      return { ...state, loading: true }
    case SEARCH_BOOKS_SUCCESS:
      return { ...state, loading: false, data: action.payload.data.results }
    case SEARCH_BOOKS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories',
      }
    default:
      return state
  }
}

export function searchBooks(params) {
  return {
    type: SEARCH_BOOKS,
    payload: {
      request: {
        url: '/svc/books/v3/lists.json',
        params,
      },
    },
  }
}
