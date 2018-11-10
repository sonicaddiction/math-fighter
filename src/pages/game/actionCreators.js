import { Character } from '../../types/gameEngine';

export const INIT_BATTLE = 'INIT_BATTLE';
export const SET_PLAYER = 'SET_PLAYER';
export const SET_ENEMY = 'SET_ENEMY';

export const DAMAGE_CHARACTER = 'DAMAGE_CHARACTER';

export function setPlayer(player: Character): Action {
  return { type: SET_PLAYER, payload: player };
}

export function setEnemy(enemy: Character): Action {
  return { type: SET_ENEMY, payload: enemy };
}

export function damageCharacter(damage: number): Action {
  return { type: DAMAGE_CHARACTER, payload: damage };
}

export const GAME_ENGINE = {
  SET_PLAYER,
  SET_ENEMY,
};

export const CHARACTER = {
  DAMAGE_CHARACTER,
};
