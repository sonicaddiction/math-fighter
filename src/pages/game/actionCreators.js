import { createHigherOrderAction } from '../../util/reduxUtils';

export const DAMAGE_CHARACTER = 'DAMAGE_CHARACTER';
export const INCREMENT_ROUND = 'INCREMENT_ROUND';

/* TODO: Fix transpilation
type DamageCharacterPayload = {
  damage: number,
};
export const damageCharacter = createHigherOrderAction<DamageCharacterPayload>(
  'DAMAGE_CHARACTER'
);
*/

export const damageCharacter = createHigherOrderAction('DAMAGE_CHARACTER');

export const incrementRound = () => ({
  type: INCREMENT_ROUND,
});

export const CHARACTER = {
  DAMAGE_CHARACTER,
};

export const GAME = {
  INCREMENT_ROUND,
};
