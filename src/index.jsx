
import { render } from 'react-dom';
import React from 'react';
import Foo from './components/Foo';
import Bar from './components/Bar';
import Counter from './components/Counter';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';

import App from './containers/App';
import configureStore from './store';

const store = configureStore();
const history = createHistory({
  queryKey: false
});
syncReduxAndRouter(history, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Foo}/>
        <Route path="bar" component={Bar}/>
        <Route path="bar/:id" component={Bar}/>
        <Redirect from="counter" to="counter/0"/>
        <Route path="counter/:id" component={Counter}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
