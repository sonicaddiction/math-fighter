import { combineReducers } from 'redux';

const createRandomPlayer = () => ({
  name: `Character-${Math.floor(Math.random() * 1000)}`,
  health: Math.floor(Math.random() * 20),
  attackDice: 1,
});

export const characterReducer = (state = createRandomPlayer(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialRoundState = {
  currentRound: 0,
  infoText: [],
};

export const roundReducer = (
  state: Battle = initialRoundState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const battleReducer = combineReducers({
  player: characterReducer,
  enemy: characterReducer,
  round: roundReducer,
});
