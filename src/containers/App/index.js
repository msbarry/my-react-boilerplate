
import React, { Component } from 'react';
import Header from '~/src/components/Header';
import style from './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return (
      <div className={style.normal}>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
