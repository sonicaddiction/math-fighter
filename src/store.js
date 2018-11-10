import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { contactReducer } from './pages/contact/contactReducer';
import { battleReducer } from './pages/game/reducers/gameReducer';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { gameEpic } from './pages/game/epics/gameEpic';

export const rootReducer = combineReducers({
  contact: contactReducer,
  battle: battleReducer,
});

export const rootEpic = combineEpics(gameEpic);

export function createHigherOrderReducer(reducerFunction, reducerId) {
  return (state, action) => {
    const { id } = action;
    const isInitializationCall = state === undefined;

    if (id !== reducerId && !isInitializationCall) {
      return state;
    }

    return reducerFunction(state, action);
  };
}

export type RootState = {};

// store.js
export function configureStore(initialState: RootState = {}) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}

export const store = configureStore();
