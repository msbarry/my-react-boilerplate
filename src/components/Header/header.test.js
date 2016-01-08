import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from '.';

describe('header', () => {
  it('should', () => {
    document.body.innerHTML = '';
    const root = document.createElement('div');
    document.body.appendChild(root);
    ReactDOM.render(
      <Header/>,
      root
    );
    assert.equal(document.getElementsByTagName('h1')[0].textContent, 'Hello World!');
  });
});
