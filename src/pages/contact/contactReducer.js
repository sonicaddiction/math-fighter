import { combineReducers } from 'redux';
import type { Action } from '../../types';

export type Address = {
  name: string,
  street: string,
  areaCode: string,
  city: string,
};

const initialState: Address = {
  name: 'Kristofer Fagerström',
  street: 'Fatburs kvarngata 3',
  areaCode: '11864',
  city: 'Stockholm',
};

export const addressReducer = (
  state: Address = initialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const contactReducer = combineReducers({
  address: addressReducer,
});
