import axios from 'axios';
import {  Dispatch } from 'redux';
import { ActionTypes } from './types'

// NOTE: Apod|apod anywhere used refers to **Astronomy Picture of the Day**

/**
 * @object Apod - The expected response date from API call.
 */
export interface Apod {
  copyright?: string;
  explanation?: string;
  date?: string;
  url?: string;
  msg?: string;
  media_type?: string;
}

/**
 * @object FetchApodAction - The dispatch Action type to be passed to the apodReducer to initiate 
 * redux store Update
 */
export interface FetchApodAction {
  payload: Apod;
  type: ActionTypes.fetchApods | ActionTypes.fetchApodFailure;
  error: string;
}


/**
 * @Object fetchApod - The fetch Apod data action creator
 */
export const fetchApod = (date:string = '2020-11-12') => {
  return async (dispatch: Dispatch) => {
    const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.REACT_APP_API_KEY}`;

    try {
      const response = await axios.get<Apod>(url)

      dispatch<FetchApodAction>({
        type: ActionTypes.fetchApods,
        payload: response.data,
        error: ''
      });
    } catch(error) {
      dispatch<FetchApodAction>({
        type: ActionTypes.fetchApodFailure,
        payload: {},
        error: error.response.data.msg
      });
    }    
  }
}


