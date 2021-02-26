import React, { useState, useEffect } from 'react';
import cogoToast from "cogo-toast";
import ReactPlayer from "react-player/lazy";
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../reducers';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// Styled Components
import {
  AppHeader, AppWrapper,
  ApodImageWrapper, ApodImage,
  ApiDataSection, DateAreaWrapper,
  ErroFlash, ApodVideo, BtnToggle,
} from './App.styles';

// Action utils
import { Apod, fetchApod } from '../actions';

const App = ():JSX.Element => {
  const apods:Apod = useSelector((state: StoreState) => state.apod.apod);
  const apodsRequestError:string = useSelector((state: StoreState) => state.apod.error);

  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const [dateTextHelper, setDateTextHelper] = useState("");

  // Make initial API call with today's date
  useEffect(() => {
    const todayDate = new Date().toJSON().slice(0, 10);
    setDate(todayDate);
    dispatch(fetchApod(todayDate));
  }, [dispatch]);

  // Update state with selected Date
  const onDateSelect = (event: React.ChangeEvent<HTMLInputElement>):void => {
    event.preventDefault();

    const newDate = event.target.value;
    setDate(newDate);
  }

  
  const onButtonClick = async (event: any) => {
    event.preventDefault();
    setDateTextHelper(date);
    if (date) {
      cogoToast.loading(`Getting the NASA picture of the day for ${date}`, { position: "bottom-center" }).then(() => {

        // Fetch data again for new date 
        return dispatch(fetchApod(date));
      });
    }
  }

  // fetch Next date data
  const getNextDayData = async (event: any) => {
    event.preventDefault();

    const baseDateInts = date.split("-").map(item => parseInt(item, 10));
    
    setDate(new Date(`${baseDateInts[0]}-${baseDateInts[1]}-${(baseDateInts[2]++)}`).toJSON().slice(0, 10));

    cogoToast.loading(`Getting the NASA picture of the day for ${date}`, { position: "bottom-center" })
      .then(async () => {
        setDateTextHelper(date);
      // Fetch data again for next date 
      return dispatch(fetchApod(date));
    });
  }


  // fetch Next date data
  const getPrevDayData = async (event: any) => {
    event.preventDefault();

    const baseDateInts = date.split("-").map(item => parseInt(item, 10));
    
    setDate(new Date(`${baseDateInts[0]}-${baseDateInts[1]}-${(baseDateInts[2] - 1)}`).toJSON().slice(0, 10));

    return cogoToast.loading(`Getting the NASA picture of the day for ${date}`, { position: "bottom-center" })
      .then(async () => {
        setDateTextHelper(date);
      // Fetch data again for previous date 
      await dispatch(fetchApod(date));
    });
  }

 const showApod = () => {
    return (
      <>
        <ApodImageWrapper>
          {apods.media_type === "image" && <ApodImage src={apods.url} />}
          {apods.media_type === "video" && (
            <ApodVideo>
              <ReactPlayer
                muted={true}
                url={apods.url}
                width="100%"
                height="100%"
                playing={false}
                controls={true}
              />
            </ApodVideo>
            )}
          <DateAreaWrapper>
            <input onChange={onDateSelect} type="date" value={date} name="date" id="date" />
            <button onClick={onButtonClick}>SUBMIT</button>
          </DateAreaWrapper>
        </ApodImageWrapper>
        
        <p>{apods.explanation}</p>
      </>
    )
  } 

    return (
      <AppWrapper>
        <ErroFlash>{apodsRequestError}</ErroFlash>
        <AppHeader>
          <h2>Showing NASA Atronomy Picture of the day for {dateTextHelper ? date.split('-').join('/') : "today"}</h2>
        </AppHeader>
        <ApiDataSection>
          {showApod()}
        </ApiDataSection>
        <BtnToggle 
          right={""}
          onClick={(event) => getPrevDayData(event)}
        >
          <BsChevronLeft />
        </BtnToggle>
        <BtnToggle 
          right={"right"}
          onClick={(event) => getNextDayData(event)}
        >
          <BsChevronRight />
        </BtnToggle>
      </AppWrapper>
    );
}

export default App;
