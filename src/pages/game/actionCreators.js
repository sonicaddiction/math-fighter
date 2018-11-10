import { Character } from '../../types/gameEngine';

export const INIT_BATTLE = 'INIT_BATTLE';
export const SET_PLAYER = 'SET_PLAYER';
export const SET_ENEMY = 'SET_ENEMY';

export const DAMAGE_CHARACTER = 'DAMAGE_CHARACTER';

export function createHigherOrderAction<T>(actionType, payload: T) {
  return id => (payload: T) => ({
    id,
    type: actionType,
    payload,
  });
}

export function setPlayer(player: Character): Action {
  return { type: SET_PLAYER, payload: player };
}

export function setEnemy(enemy: Character): Action {
  return { type: SET_ENEMY, payload: enemy };
}

/* TODO: Fix transpilation
type DamageCharacterPayload = {
  damage: number,
};
export const damageCharacter = createHigherOrderAction<DamageCharacterPayload>(
  'DAMAGE_CHARACTER'
);
*/

export const damageCharacter = createHigherOrderAction('DAMAGE_CHARACTER');

export const GAME_ENGINE = {
  SET_PLAYER,
  SET_ENEMY,
};

export const CHARACTER = {
  DAMAGE_CHARACTER,
};
