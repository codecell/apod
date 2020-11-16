import { Apod, FetchApodAction,} from '../actions';
import { ActionTypes } from '../actions/types'

const apodReducer = (state: Apod = {}, action:FetchApodAction) => {
  switch(action.type) {
    case ActionTypes.fetchApods:
      return action.payload;
    default:
      return state;
  }
}

export default apodReducer;