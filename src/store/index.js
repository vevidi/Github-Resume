import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { baseInfo } from './base-info';
import { languages } from './languages';

const rootReducer = combineReducers({
  baseInfo,
  languages,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
