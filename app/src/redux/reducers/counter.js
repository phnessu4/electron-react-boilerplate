import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    // case 'USER_FETCH_REQUESTED':
    //   console.log(state);
    //   return state;
    default:
      return state;
  }
}
