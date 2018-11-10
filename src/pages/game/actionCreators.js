import { Character } from '../../types/gameEngine';

export const INIT_BATTLE = 'INIT_BATTLE';
export const SET_PLAYER = 'SET_PLAYER';
export const SET_ENEMY = 'SET_ENEMY';

export function setPlayer(player: Character): Action {
  return { type: SET_PLAYER, payload: player };
}

export function setEnemy(enemy: Character): Action {
  return { type: SET_ENEMY, payload: enemy };
}
