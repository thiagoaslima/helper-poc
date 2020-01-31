import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { cardsReducer } from './reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { State } from './state';
import { EffectsModule } from '@ngrx/effects';
import { HelperCardsEffect } from './effects';

export function logger(reducer: ActionReducer<State>): any {
  // default, no options
  return storeLogger({
    filter: {
      blacklist: [
        '@ngrx/store-devtools/recompute',
        '@ngrx/store/update-reducers'
      ]
    }
  })(reducer);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('helperCards', cardsReducer, {metaReducers: [logger]}),
    EffectsModule.forFeature([HelperCardsEffect]),
    StoreDevtoolsModule.instrument(),
  ]
})
export class HelperStoreModule {}
