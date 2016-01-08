import assert from 'assert';

import App from '.';
import ReactDOM from 'react-dom';
import React from 'react';

import domFixture from '~/src/dom-test-fixture';

describe('app', () => {
  it('should', () => {
    ReactDOM.render(
      <App/>,
      domFixture()
    );
    assert.equal(document.getElementsByTagName('h1')[0].textContent, 'Hello World!');
  });
});
