
import React, { Component } from 'react';
import Header from '../../components/Header';
import style from './style.css';

class App extends Component {
  render() {
    return (
      <div className={style.normal}>
        <Header/>
      </div>
    );
  }
}

export default App;
