import { CHARACTER } from '../actionCreators';

export const characterInitialState = {
  name: '',
  health: 0,
  attackDice: 0,
};

export const characterReducer = (state = characterInitialState, action) => {
  switch (action.type) {
    case CHARACTER.DAMAGE_CHARACTER:
      return {
        ...state,
        health: state.health - action.payload,
      };
    default:
      return state;
  }
};
