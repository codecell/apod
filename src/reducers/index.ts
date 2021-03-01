import { combineReducers } from 'redux';
import apod, { ApodReducerState } from './apod';
import favoritesReducer, { FavoritesReducerState } from './favourites';

export interface StoreState {
  apod: ApodReducerState;
  favoritesReducer: FavoritesReducerState
}

export const reducers = combineReducers<StoreState>({
  apod,
  favoritesReducer
});