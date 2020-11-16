import { combineReducers } from 'redux';
import apod, { ApodReducerState } from './apod';

export interface StoreState {
  apod: ApodReducerState;
}

export const reducers = combineReducers<StoreState>({
  apod,
})