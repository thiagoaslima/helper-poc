import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { HelperCardActions } from './actions';
import { Store } from '@ngrx/store';
import { State } from './state';

@Injectable()
export class HelperCardsEffect {

    constructor(
      private actions$: Actions<HelperCardActions>,
      private store: Store<State>,
    ) {}
}
