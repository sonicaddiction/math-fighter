import { combineEpics, ofType } from 'redux-observable';
import { flatMap, map } from 'rxjs/operators';
import {
  addBattleMessage,
  ATTACK_WITH_CHARACTER,
  damageCharacter,
  DAMAGE_CHARACTER,
  incrementRound,
  INIT_BATTLE,
  setCharacterAttackDice,
  setCharacterHealth,
  setCharacterName,
  INCREMENT_ROUND,
} from '../actionCreators';

const rollD6 = n =>
  Array.from(Array(n)).reduce(
    accumulator => accumulator + Math.ceil(Math.random() * 6),
    0
  );

export const damgeEpic = (action$, state$) =>
  action$.pipe(
    ofType(DAMAGE_CHARACTER),
    map(action =>
      addBattleMessage(
        `${state$.value.battle[action.id].name} takes ${
          action.payload
        } points of damage.`
      )
    )
  );

export const newRoundEpic = (action$, state$) =>
  action$.pipe(
    ofType(INCREMENT_ROUND),
    map(action =>
      addBattleMessage(
        `--- Round ${state$.value.battle.round.currentRound} ---`
      )
    )
  );

export const attackEpic = (action$, state$) =>
  action$.pipe(
    ofType(ATTACK_WITH_CHARACTER),
    flatMap(action => {
      const attackerId = action.payload.attackerId;
      const attackerName = state$.value.battle[attackerId].name;
      const defenderId = action.payload.defenderId;
      const defenderName = state$.value.battle[defenderId].name;
      const attackerAttackDice = state$.value.battle[attackerId].attackDice;
      const damageRoll = rollD6(attackerAttackDice);

      return [
        damageCharacter(defenderId)(damageRoll),
        addBattleMessage(`${attackerName} attacks ${defenderName}`),
      ];
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

export const gameEpic = combineEpics(
  attackEpic,
  initBattleEpic,
  damgeEpic,
  newRoundEpic
);
