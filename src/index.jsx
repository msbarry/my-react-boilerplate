
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './store';

const store = configureStore();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
