
import { handleActions } from 'redux-actions';

const initialState = 0;

export default handleActions({
  'increment counter'(state) {
    return state + 1;
  },

  'decrement counter'(state) {
    return state - 1;
  }
}, initialState);
