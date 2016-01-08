
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import App from '~/src/containers/App';
import configureStore from '~/src/store';
import domFixture from '~/src/dom-test-fixture';
import assert from 'assert';
import { Simulate } from 'react-addons-test-utils';

const store = configureStore();

describe('app', () => {
  it('should increment and decrement', () => {
    render(
      <Provider store={store}>
        <App/>
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
