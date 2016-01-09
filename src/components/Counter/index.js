
import { replacePath } from 'redux-simple-router';
import React, { Component, PropTypes } from 'react';
import { increment, decrement } from '../../actions/counter';

class Counter extends Component {
  componentDidMount() {
    this._interval = setInterval(() => {
      const { routeParams: { id } } = this.props;
      this.props.dispatch(replacePath(`/counter/${(+id) + 1}`));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    const {
      routeParams: { id },
      counter,
      dispatch
    } = this.props;
    const incr = () => dispatch(increment());
    const decr = () => dispatch(decrement());
    return (
      <div>
        <div>Counter = <span id="cntr">{(+id) + counter}</span></div>
        <button id="incr" onClick={incr}>+</button>
        <button id="decr" onClick={decr}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  routeParams: React.PropTypes.shape({
    id: PropTypes.isRequired
  }),
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Counter;
