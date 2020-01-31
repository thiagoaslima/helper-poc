import { Card } from './model';

export interface State {
  cards: Card[];
}

export const initialState: State = {
  cards: []
};
