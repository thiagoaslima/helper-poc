import { Action } from '@ngrx/store';
import { Card } from './model';
import { Observable } from 'rxjs';

export enum ActionTypes {
  RESET = 'helper-cards/reset',
  ADD_CARD = 'helper-cards/add-card',
  REMOVE_CARD = 'helper-cards/remove-card'
}

interface AddCardPayload extends Exclude<Partial<Card>, 'timestamp'> {
  name: Card['name'];
  close?: Observable<any>;
}

export class AddHelperCard implements Action {
  readonly type = ActionTypes.ADD_CARD;
  constructor(public payload: AddCardPayload) {}
}

export class RemoveHelperCard implements Action {
  readonly type = ActionTypes.REMOVE_CARD;
  constructor(public payload: { timestamp: number }) {}
}

export class ResetHelperCard implements Action {
  readonly type = ActionTypes.RESET;
  constructor() {}
}

export type HelperCardActions = AddHelperCard | RemoveHelperCard | ResetHelperCard;
