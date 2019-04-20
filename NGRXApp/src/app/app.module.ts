import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppComponent
} from './app.component';
import {
  StoreModule
} from '@ngrx/store';
import {
  EffectsModule
} from '@ngrx/effects';
import {
  StoreDevtoolsModule
} from '@ngrx/store-devtools';
import {
  environment
} from '../environments/environment';



import {
  MyCounterComponent
} from './my-counter/my-counter.component';
import { counterReducer } from './Reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
