import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../reducers';

// Styled Components
import {
  AppHeader, AppWrapper,
  ApodImageWrapper, ApodImage,
  ApiDataSection, DateAreaWrapper,
  ErroFlash,
} from './App.styles';

// Action utils
import { Apod, fetchApod } from '../actions';

const App = ():JSX.Element => {
  const apods:Apod = useSelector((state: StoreState) => state.apod.apod);
  const apodsRequestError:string = useSelector((state: StoreState) => state.apod.error);

  const dispatch = useDispatch();
  const [date, setDate] = useState('');

  // Make initial API call
  useEffect(() => {
    dispatch(fetchApod());
  }, [dispatch]);

  // Update state with selected Date
  const onDateSelect = (event: React.ChangeEvent<HTMLInputElement>):void => {
    event.preventDefault();

    const newDate = event.target.value;
    setDate(newDate);
  }

  // Fetch data again for new date 
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>):any => {
    event.preventDefault()
    return dispatch(fetchApod(date));
  }

 const showApod = ():JSX.Element => {
   if (apodsRequestError) {
      return (<ErroFlash>{apodsRequestError}</ErroFlash>)
   }

    return (
      <React.Fragment>
        <ApodImageWrapper>
          {apods.media_type === "image" && <ApodImage src={apods.url} />}
          {apods.media_type === "video" && <React.Fragment>
            <video width="320" height="240" controls>
              <source src={apods.url}></source>
              Your browser does not support the video tag.
            </video>
          </React.Fragment>}
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
