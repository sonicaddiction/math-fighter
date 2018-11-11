import { flatMap, mapTo } from 'rxjs/operators';
import {
  DAMAGE_CHARACTER,
  incrementRound,
  INIT_BATTLE,
  setCharacterName,
  setCharacterHealth,
  setCharacterAttackDice,
} from '../actionCreators';
import { combineEpics, ofType } from 'redux-observable';

export const attackEpic = action$ =>
  action$.pipe(
    ofType(DAMAGE_CHARACTER),
    mapTo(incrementRound())
  );

const initCharacterActions = (id, name, health, attackDice) => [
  setCharacterName(id)(name),
  setCharacterHealth(id)(health),
  setCharacterAttackDice(id)(attackDice),
];

export const initBattleEpic = action$ =>
  action$.pipe(
    ofType(INIT_BATTLE),
    flatMap(action => {
      const setupPlayersActions = initCharacterActions(
        'player',
        'Kristofer',
        50,
        2
      );
      const setupEnemyActions = initCharacterActions(
        'enemy',
        'Dr. Skurkas',
        50,
        2
      );

      return [...setupPlayersActions, ...setupEnemyActions, incrementRound()];
    })
  );

export const gameEpic = combineEpics(attackEpic, initBattleEpic);
