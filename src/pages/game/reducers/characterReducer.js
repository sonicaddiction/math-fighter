import { CHARACTER } from '../actionCreators';

const createRandomPlayer = () => ({
  name: `Character-${Math.floor(Math.random() * 1000)}`,
  health: Math.floor(Math.random() * 10) + 20,
  attackDice: 1,
});

export const characterInitialState = {
  name: '',
  helath: 0,
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
