import { createHigherOrderAction } from '../../util/reduxUtils';

export const DAMAGE_CHARACTER = 'DAMAGE_CHARACTER';
export const INIT_BATTLE = 'INIT_BATTLE';
export const SET_CHARACTER_NAME = 'SET_CHARACTER_NAME';
export const SET_CHARACTER_HEALTH = 'SET_CHARACTER_HEALTH';
export const SET_CHARACTER_ATTACK_DICE = 'SET_CHARACTER_ATTACK_DICE';
export const INCREMENT_ROUND = 'INCREMENT_ROUND';

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
export const setCharacterHealth = createHigherOrderAction(SET_CHARACTER_HEALTH);
export const setCharacterAttackDice = createHigherOrderAction(
  SET_CHARACTER_ATTACK_DICE
);

export const incrementRound = () => ({
  type: INCREMENT_ROUND,
});

export const initBattle = () => ({
  type: INIT_BATTLE,
});

export const CHARACTER = {
  DAMAGE_CHARACTER,
  SET_CHARACTER_NAME,
  SET_CHARACTER_HEALTH,
  SET_CHARACTER_ATTACK_DICE,
};

export const GAME = {
  INCREMENT_ROUND,
};
