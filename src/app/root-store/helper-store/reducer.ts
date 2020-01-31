import { HelperCardActions, ActionTypes } from './actions';
import { initialState, State } from './state';
import { defaultCard } from './model';

export function cardsReducer(state = initialState, action: HelperCardActions): State {
  switch (action.type) {
    case ActionTypes.ADD_CARD: {
      const newCard = {
        ...defaultCard,
        ...action.payload,
        timestamp: Date.now()
      };

      return {
        cards: [...state.cards, newCard]
      };
    }
    case ActionTypes.REMOVE_CARD:
      return {
        cards: state.cards.filter(card => {
          return card.timestamp !== action.payload.timestamp;
        })
      };
    case ActionTypes.RESET:
      return {
        cards: []
      };
    default: {
      return state;
    }
  }
}
