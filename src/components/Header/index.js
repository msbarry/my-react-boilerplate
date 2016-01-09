
import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Hello World!</h1>
        <Link to="/">root</Link>
        <br/>
        <Link to="/bar">bar</Link>
        <br/>
        <Link to="/counter">counter</Link>
        <br/>
        <Link to="/counter/10">counter/10</Link>
        <br/>
      </header>
    );
  }
}

export default Header;
