import * as counterActions from '../Actions/counter.actions';

export interface State {
  count: number;
}

export const counterState: State = {
  count: 0
};

export function counterReducer(state = counterState, action: counterActions.counterActions) {
  switch (action.type) {
    case counterActions.ActionTypes.Increment:
      return increment(state, action);

    case counterActions.ActionTypes.Decrement:
      return decrement(state, action);

    case counterActions.ActionTypes.Reset:
      return reset(state, action);

    default:
      return state;
  }
}

function increment(state: State, action: counterActions.Increment) {
  state.count = state.count + action.payload;
  return state;
}

function decrement(state: State, action: counterActions.Decrement) {
  state.count = state.count - action.payload;
  return state;
}

function reset(state: State, action: counterActions.Reset) {
  state.count = action.payload;
  return state;
}
