import { combineReducers, createStore } from 'redux';
import { contactReducer } from './pages/contact/contactReducer';

export const reducers = combineReducers({
    contact: contactReducer,
});

export type RootState = {
}

// store.js
export function configureStore(initialState: RootState = {}) {
    const store = createStore(reducers, initialState);
    return store;
};

export const store = configureStore();
