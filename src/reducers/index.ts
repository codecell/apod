import { combineReducers } from 'redux';
import apodReducer from './apod';
import { Apod } from '../actions'

export interface StoreState {
  apods: Apod
}

export const reducers = combineReducers<StoreState>({
  apods: apodReducer
})