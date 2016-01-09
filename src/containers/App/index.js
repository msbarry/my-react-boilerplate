
import React, { Component } from 'react';
import Header from '~/src/components/Header';
import style from './style.css';

export default class App extends Component {
  render() {
    return (
      <div className={style.normal}>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
