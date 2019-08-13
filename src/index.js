import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import MainPage from './containers/views/main';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(logger, thunk));

render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('editor')
);