import { combineReducers, createStore } from 'redux';
import { contactReducer } from './pages/contact/contactReducer';
import { battleReducer } from './pages/game/gameReducer';

export const reducers = combineReducers({
  contact: contactReducer,
  battle: battleReducer,
});

export type RootState = {};

// store.js
export function configureStore(initialState: RootState = {}) {
  const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

export const store = configureStore();
