
import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  componentDidMount() {
    this._interval = setInterval(() => {
      const { routeParams: { id }, history } = this.props;
      history.replace(`/counter/${(+id) + 1}`);
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    const { routeParams: { id }, history } = this.props;
    function increment() {
      history.push(`/counter/${(+id) + 1}`);
    }
    function decrement() {
      history.push(`/counter/${(+id) - 1}`);
    }
    return (
      <div>
        <div>Counter = <span id="cntr">{id}</span></div>
        <button id="incr" onClick={increment}>+</button>
        <button id="decr" onClick={decrement}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  routeParams: React.PropTypes.shape({
    id: PropTypes.isRequired
  })
};

export default Counter;
