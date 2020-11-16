import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../reducers';

import {
  AppHeader, AppWrapper,
  ApodImageWrapper, ApodImage,
  ApiDataSection, DateAreaWrapper,
} from './App.styles';

import { Apod, fetchApod } from '../actions';

const App = ():JSX.Element => {
  const apods:Apod = useSelector((state: StoreState) => state.apods);
  const dispatch = useDispatch();
  const [date, setDate] = useState('');

  useEffect(() => {
    dispatch(fetchApod());
  }, [dispatch]);

  const onDateSelect = (event: React.ChangeEvent<HTMLInputElement>):void => {
    event.preventDefault();

    const newDate = event.target.value;
    setDate(newDate);
  }

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>):any => {
    event.preventDefault()
    return dispatch(fetchApod(date));
  }

 const showApod = ():JSX.Element => {
    return (
      <React.Fragment>
        <ApodImageWrapper>
          <ApodImage src={apods.url} />
          <DateAreaWrapper>
            <input onChange={onDateSelect} type="date" value={date} name="date" id="date" />
            <button onClick={onButtonClick}>SUBMIT</button>
          </DateAreaWrapper>
        </ApodImageWrapper>
        
        <p>{apods.explanation}</p>
      </React.Fragment>
    )
  } 
    return (
      <AppWrapper>
        <AppHeader>
          <h2>NASA Atronomy Picture of the day</h2>
        </AppHeader>
        <ApiDataSection>
          {showApod()}
        </ApiDataSection>
      </AppWrapper>
    );
}

export default App;
