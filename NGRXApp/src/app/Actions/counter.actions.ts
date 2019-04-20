import { Action } from '@ngrx/store';

export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
}

export class Increment implements Action {
  readonly type = ActionTypes.Increment;
  constructor(public payload: number) {}
}

export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
  constructor(public payload: number) {}
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
  constructor(public payload: number) {}
}

export type counterActions = Increment | Decrement | Reset;
