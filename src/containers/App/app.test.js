
import { render } from 'react-dom';
import React from 'react';

import App from '~/src/containers/App';
import Counter from '~/src/components/Counter';
import domFixture from '~/src/dom-test-fixture';
import assert from 'assert';
import { Simulate } from 'react-addons-test-utils';
import { Router, Route } from 'react-router';
import createMemoryHistory from 'history/lib/createMemoryHistory';

describe('app', () => {
  it('should increment and decrement', () => {
    const history = createMemoryHistory('/counter/0');
    render(
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="counter/:id" component={Counter}/>
        </Route>
      </Router>,
      domFixture()
    );
    assert.equal(document.getElementById('cntr').textContent, '0');
    Simulate.click(document.getElementById('incr'));
    assert.equal(document.getElementById('cntr').textContent, '1');
    Simulate.click(document.getElementById('decr'));
    assert.equal(document.getElementById('cntr').textContent, '0');
  });
});
