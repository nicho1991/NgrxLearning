import { Action } from '@ngrx/store';
import { ActionTypes } from '../Actions/counter.actions';


export const initialCounterState = 0;

export function counterReducer(state = initialCounterState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1;

    case ActionTypes.Decrement:
      return state - 1;

    case ActionTypes.Reset:
      return 0;

    default:
      return state;
  }
}
