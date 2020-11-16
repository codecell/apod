import { Apod, FetchApodAction} from '../actions';
import { ActionTypes } from '../actions/types'


export interface ApodReducerState {
  apod: Apod;
  error: string;
}

const initialState = {
  apod: {},
  error: ''
}

const apodReducer = (state: ApodReducerState = initialState, action: FetchApodAction) => {
  switch(action.type) {
    case ActionTypes.fetchApods:
      return {
        ...state,
        apod: action.payload
      };
    case ActionTypes.fetchApodFailure:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default apodReducer;