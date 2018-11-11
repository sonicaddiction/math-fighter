import { CHARACTER } from '../actionCreators';

export const characterInitialState = {
  name: '',
  health: 0,
  attackDice: 0,
  id: null,
};

export const characterReducer = (state = characterInitialState, action) => {
  switch (action.type) {
    case CHARACTER.DAMAGE_CHARACTER:
      return {
        ...state,
        health: state.health - action.payload,
      };
    case CHARACTER.SET_CHARACTER_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case CHARACTER.SET_CHARACTER_HEALTH:
      return {
        ...state,
        health: action.payload,
      };
    case CHARACTER.SET_CHARACTER_ATTACK_DICE:
      return {
        ...state,
        attackDice: action.payload,
      };
    default:
      return state;
  }
};
