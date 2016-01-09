
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import App from '~/src/containers/App';
import Counter from '~/src/components/Counter';
import configureStore from '~/src/store';
import domFixture from '~/src/dom-test-fixture';
import assert from 'assert';
import { Simulate } from 'react-addons-test-utils';
import { Router, Route } from 'react-router';
import createHistory from 'history/lib/createMemoryHistory';
import { syncReduxAndRouter } from 'redux-simple-router';

describe('app', () => {
  it('should increment and decrement', () => {
    const store = configureStore();
    const history = createHistory('/counter/0');
    syncReduxAndRouter(history, store);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <Route path="counter/:id" component={Counter}/>
          </Route>
        </Router>
      </Provider>,
      domFixture()
    );
    assert.equal(document.getElementById('cntr').textContent, '0');
    Simulate.click(document.getElementById('incr'));
    assert.equal(document.getElementById('cntr').textContent, '1');
    Simulate.click(document.getElementById('decr'));
    assert.equal(document.getElementById('cntr').textContent, '0');
  });
});
