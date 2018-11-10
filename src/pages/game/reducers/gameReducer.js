import { combineReducers } from 'redux';
import { characterReducer } from './characterReducer';
import { roundReducer } from './roundReducer';

export const battleReducer = combineReducers({
  player: characterReducer,
  enemy: characterReducer,
  round: roundReducer,
});
