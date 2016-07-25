import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

const Root = ({ store, history, rootRoute, render }) => (
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={render}
    />
  </Provider>
)

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired,
  rootRoute: React.PropTypes.object.isRequired,
  render: React.PropTypes.func.isRequired,
}

export default Root;
