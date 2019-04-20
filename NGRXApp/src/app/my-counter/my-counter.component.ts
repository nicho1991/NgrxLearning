import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../Actions/counter.actions';


@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number}>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(new Increment(5));
  }

  decrement() {
    this.store.dispatch(new Decrement(5));
  }

  reset() {
    this.store.dispatch(new Reset(0));
  }
}
