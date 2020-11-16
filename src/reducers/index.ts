import { combineReducers } from 'redux';
import apod, { ApodReducerState } from './apod';
import { Apod } from '../actions'

export interface StoreState {
  apod: ApodReducerState;
}

export const reducers = combineReducers<StoreState>({
  apod,
})