import type { Action } from '../../types';
import type { Character } from '../../types/gameEngine';

export type Battle = {
  player: Character,
  enemy: Character,
  currentRound: number,
};

const initialState: Address = {
  player: null,
  enemy: null,
  currentRound: 0,
};

export const battleReducer = (state: Battle = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
