export const SEARCH_ARTICLES = 'test-kumparan/articles/SEARCH_ARTICLES'
export const SEARCH_ARTICLES_SUCCESS = 'test-kumparan/articles/SEARCH_ARTICLES_SUCCESS'
export const SEARCH_ARTICLES_FAIL = 'test-kumparan/articles/SEARCH_ARTICLES_FAIL'

export default function reducer(state = { data: [] }, action) {
  switch (action.type) {
    case SEARCH_ARTICLES:
      return { ...state, loading: true }
    case SEARCH_ARTICLES_SUCCESS:
      return { ...state, loading: false, data: action.payload.data.response.docs }
    case SEARCH_ARTICLES_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories',
      }
    default:
      return state
  }
}

export function searchArticles(params) {
  return {
    type: SEARCH_ARTICLES,
    payload: {
      request: {
        url: '/svc/search/v2/articlesearch.json',
      },
    },
  }
}
