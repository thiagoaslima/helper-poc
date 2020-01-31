import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { State } from './state';

const getCards = (state: State): any => state.cards;

export const selectHelperCardsState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('helperCards');

export const selectHelperCards: MemoizedSelector<
  object,
  Array<{name: string; timestamp: number}>
> = createSelector(selectHelperCardsState, getCards);
