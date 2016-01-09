
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import Header from '~/src/components/Header';
import Counter from '~/src/components/Counter';
import style from './style.css';
import { connect } from 'react-redux';
import * as CounterActions from '~/src/actions/counter';

class App extends Component {
  componentDidMount() {
    this._interval = setInterval(() => {
      this.props.increment();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return (
      <div className={style.normal}>
        <Header/>
        <Counter {...this.props}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
