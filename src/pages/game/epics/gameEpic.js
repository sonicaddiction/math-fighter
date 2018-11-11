import { combineEpics, ofType } from 'redux-observable';
import { flatMap } from 'rxjs/operators';
import {
  ATTACK_WITH_CHARACTER,
  damageCharacter,
  incrementRound,
  INIT_BATTLE,
  setCharacterAttackDice,
  setCharacterHealth,
  setCharacterName,
} from '../actionCreators';

const rollD6 = n =>
  Array.from(Array(n)).reduce(
    accumulator => accumulator + Math.ceil(Math.random() * 6),
    0
  );

export const attackEpic = (action$, state$) =>
  action$.pipe(
    ofType(ATTACK_WITH_CHARACTER),
    flatMap(action => {
      const attackerId = action.payload.attackerId;
      const playerAttackDice = state$.value.battle[attackerId].attackDice;
      const damageRoll = rollD6(playerAttackDice);
      return [damageCharacter('enemy')(damageRoll)];
    })
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
