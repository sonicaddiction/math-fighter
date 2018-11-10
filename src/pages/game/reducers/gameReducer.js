import { combineReducers } from 'redux';
import { characterReducer } from './characterReducer';
import { roundReducer } from './roundReducer';
import { createHigherOrderReducer } from '../../../store';

export const battleReducer = combineReducers({
  player: createHigherOrderReducer(characterReducer, 'player'),
  enemy: createHigherOrderReducer(characterReducer, 'enemy'),
  round: roundReducer,
});
