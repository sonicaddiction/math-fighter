import type { Action } from '../../types';
import type { Character } from '../../types/gameEngine';

export type Battle = {
  player: Character,
  enemy: Character,
  currentRound: number,
};

const createRandomPlayer = (): Character => ({
  name: `Character-${Math.floor(Math.random() * 1000)}`,
  health: Math.floor(Math.random() * 20),
  attackDice: 1,
});

const initialState: Address = {
  player: createRandomPlayer(),
  enemy: createRandomPlayer(),
  currentRound: 0,
};

export const battleReducer = (state: Battle = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
