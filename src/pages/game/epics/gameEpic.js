import { mapTo } from 'rxjs/operators';
import { DAMAGE_CHARACTER, incrementRound } from '../actionCreators';
import { combineEpics, ofType } from 'redux-observable';

export const attackEpic = action$ =>
  action$.pipe(
    ofType(DAMAGE_CHARACTER),
    mapTo(incrementRound())
  );

export const gameEpic = combineEpics(attackEpic);
