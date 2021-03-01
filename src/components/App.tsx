import React, { useState, useEffect } from 'react';
import cogoToast from "cogo-toast";
import { BsFillHeartFill } from "react-icons/bs";
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
import { 
  Apod, fetchApod,
  addfavoriteApod, 
} from '../actions';

// navbar
import Toolbar from "./Navbar";

const App = ():JSX.Element => {
  // Global state
  const apods:Apod = useSelector((state: StoreState) => state.apod.apod);
  const apodsRequestError:string = useSelector((state: StoreState) => state.apod.error);
  const favorites:string[] = useSelector((state: StoreState) => state.favoritesReducer.favorites);

  const dispatch = useDispatch();
  // Local states
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
    
    setDateTextHelper(newDate);
    if (newDate) {
      cogoToast.loading(`Getting the NASA picture of the day for ${newDate}`, { position: "bottom-center" }).then(() => {

        // Fetch data again for new date 
        return dispatch(fetchApod(newDate));
      });
    }
  }

  /**
   * 
   * @param event , add the image url to our global state , then upade localstorgae with the state.
   */
  const onButtonClick = async (event: any) => {
    event.preventDefault();

    const favsString = localStorage.getItem("favorites");
    const favsDatabase = favsString && JSON.parse(favsString);

    if (apods.url) {
      dispatch(addfavoriteApod(apods.url));
      cogoToast.loading(`Adding this image to your favorites ...`, { position: "bottom-center" }).then(() => {
        // merge store state with localstorage
        const updatedFavs = [...favsDatabase, ...favorites];

        // Update Localstorage
        localStorage.setItem("favorites", JSON.stringify(updatedFavs));

        return cogoToast.success(`Successfully added Image to your favorites ...`, { position: "bottom-center" });
      });
    }
  }

  // fetch Next date data
  const getNextDayData = async (event: any) => {
    event.preventDefault();

    const baseDateInts = date.split("-").map(item => parseInt(item, 10));
    const nextDateString = new Date(`${baseDateInts[0]}-${baseDateInts[1]}-${(baseDateInts[2] + 1)}`).toJSON().slice(0, 10)

    cogoToast.loading(`Getting the NASA picture of the day for ${nextDateString}`, { position: "bottom-center" })
      .then(async () => {
        setDateTextHelper(nextDateString);
      // Fetch data again for next date 
       dispatch(fetchApod(nextDateString));
       return setDate(nextDateString);
    });
  }


  // fetch Next date data
  const getPrevDayData = async (event: any) => {
    event.preventDefault();

    const baseDateInts = date.split("-").map(item => parseInt(item, 10));
    const prevDateString = new Date(`${baseDateInts[0]}-${baseDateInts[1]}-${(baseDateInts[2] - 1)}`).toJSON().slice(0, 10)

    cogoToast.loading(`Getting the NASA picture of the day for ${prevDateString}`, { position: "bottom-center" })
      .then(async () => {
        setDateTextHelper(date);
      // Fetch data again for next date 
       dispatch(fetchApod(prevDateString));
       return setDate(prevDateString);
    });
  }

 const showApod = () => {
    return (
      <>
        <ApodImageWrapper>
          {apods.media_type === "image" && <ApodImage src={apods.url} fav="" />}
          {apods.media_type === "video" && (
            <ApodVideo fav="">
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
            <button onClick={onButtonClick}>
              <BsFillHeartFill />
              <span>Add to favorites</span>
            </button>
          </DateAreaWrapper>
        </ApodImageWrapper>
        
        <p>{apods.explanation}</p>
      </>
    )
  } 

    return (
      <AppWrapper error={apodsRequestError}>
        <Toolbar />
        <ErroFlash>{apodsRequestError}</ErroFlash>
        <AppHeader>
          <h2>Showing NASA Atronomy Picture of the day for {dateTextHelper ? date.split('-').join('/') : "today"}</h2>
        </AppHeader>
        <ApiDataSection>
          {showApod()}
        </ApiDataSection>
        {!apodsRequestError && (
          <>
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
          </>
        )}
        
      </AppWrapper>
    );
}

export default App;
