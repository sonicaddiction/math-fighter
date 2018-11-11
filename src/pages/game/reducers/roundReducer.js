import { GAME } from '../actionCreators';

const initialRoundState = {
  currentRound: 0,
  infoText: [],
};

export const roundReducer = (
  state: Battle = initialRoundState,
  action: Action
) => {
  switch (action.type) {
    case GAME.ADD_BATTLE_MESSAGE:
      return {
        ...state,
        infoText: [...state.infoText, action.payload],
      };
    case GAME.INCREMENT_ROUND:
      return {
        ...state,
        currentRound: state.currentRound + 1,
      };
    default:
      return state;
  }
};
