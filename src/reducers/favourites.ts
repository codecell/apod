import { addfavoriteApod, LikeApodAction } from "../actions";
import { ActionTypes } from '../actions/types'

export interface FavoritesReducerState {
  favorites: string[];
  error: string;
}

const initialState = {
  favorites: [],
  error: ''
}

const favoritesReducer = (state: FavoritesReducerState = initialState, action: LikeApodAction) => {
  switch(action.type) {
    case ActionTypes.likeApod:
      return {
        ...state,
        favorites: state.favorites.includes(action.payload) ? state.favorites : state.favorites.concat(action.payload),
        error: ''
      };
    default:
      return state;
  }
}

export default favoritesReducer;