import assert from 'assert';

import App from '.';
import ReactDOM from 'react-dom';
import React from 'react';

import '../../test-setup';

describe('app', () => {
  it('should', () => {
    document.body.innerHTML = '';
    const root = document.createElement('div');
    document.body.appendChild(root);
    ReactDOM.render(
      <App/>,
      root
    );
    assert.equal(document.getElementsByTagName('h1')[0].textContent, 'Hello World!');
  });
});
