import { createHigherOrderAction } from '../../util/reduxUtils';

export const DAMAGE_CHARACTER = 'DAMAGE_CHARACTER';
export const INIT_BATTLE = 'INIT_BATTLE';
export const SET_CHARACTER_NAME = 'SET_CHARACTER_NAME';
export const FETCH_CHARACTER_NAME = 'FETCH_CHARACTER_NAME';
export const SET_CHARACTER_HEALTH = 'SET_CHARACTER_HEALTH';
export const SET_CHARACTER_ATTACK_DICE = 'SET_CHARACTER_ATTACK_DICE';
export const INCREMENT_ROUND = 'INCREMENT_ROUND';
export const ATTACK_WITH_CHARACTER = 'ATTACK_WITH_CHARACTER';
export const ADD_BATTLE_MESSAGE = 'ADD_BATTLE_MESSAGE';

/* TODO: Fix transpilation
type DamageCharacterPayload = {
  damage: number,
};
export const damageCharacter = createHigherOrderAction<DamageCharacterPayload>(
  'DAMAGE_CHARACTER'
);
*/

export const damageCharacter = createHigherOrderAction(DAMAGE_CHARACTER);
export const setCharacterName = createHigherOrderAction(SET_CHARACTER_NAME);
export const fetchCharacterName = createHigherOrderAction(FETCH_CHARACTER_NAME);
export const setCharacterHealth = createHigherOrderAction(SET_CHARACTER_HEALTH);
export const setCharacterAttackDice = createHigherOrderAction(
  SET_CHARACTER_ATTACK_DICE
);
export const attackWithCharacter = (attackerId, defenderId) => ({
  type: ATTACK_WITH_CHARACTER,
  payload: {
    attackerId,
    defenderId,
  },
});

export const incrementRound = () => ({
  type: INCREMENT_ROUND,
});

export const initBattle = () => ({
  type: INIT_BATTLE,
});

export const addBattleMessage = (message: string) => ({
  type: ADD_BATTLE_MESSAGE,
  payload: message,
});

export const CHARACTER = {
  DAMAGE_CHARACTER,
  SET_CHARACTER_NAME,
  SET_CHARACTER_HEALTH,
  SET_CHARACTER_ATTACK_DICE,
};

export const GAME = {
  INCREMENT_ROUND,
  ATTACK_WITH_CHARACTER,
  ADD_BATTLE_MESSAGE,
};
