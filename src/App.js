import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import reducer from './redux/reducer'
import Routes from './Routes'

const client = axios.create({
  baseURL: 'https://api.nytimes.com',
  responseType: 'json',
  headers: { 'api-key': '913d00f305014707a983aef9e9bd3038' },
})

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
