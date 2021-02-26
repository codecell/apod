import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100vh;
  padding: 0 5% 0;
  position: relative;
  overflow-y: scroll;

  @media screen and (min-width: 40em) {
    padding: 0 5% 4rem;
  }
`

const AppHeader = styled.header`
  color: teal;
  text-align: center;
  padding: 1% 0;
  margin-bottom: 1rem;

  @media screen and (min-width: 40em) {
    padding: 0 0 2rem 0;
  }
`;

const ApiDataSection = styled.div`
  width: 100%;
  margin: auto;

  p {
    font-size: 0.9rem;
    width: 100%;
    text-align: left;
    margin: auto;
  }

  @media screen and (min-width: 40em) {
    width: 75%;

    p {
      text-align: center;
    }
  }
`;


const DateAreaWrapper = styled.form`
  border: 1.2px solid teal;
  width: 100%;
  display: flex;
  height: 35px;
  margin: 1rem auto;
  border-radius: 0.35rem;

  input {
    padding-left: 0.5rem;
    border-radius: 0.35rem 0 0 0.35rem;
    color: #484848;
    height: 100%;
    border: none;
    flex: 0.7;
  }

  button {
    border-radius:  0 0.35rem 0.35rem 0;
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
    color: #efefef;
    background: teal;
    border: 1.2px solid teal;
    flex: 0.3;
  }

  @media screen and (min-width: 40em) {
    width: 60%;

    button {
      font-size: 0.9rem;
    }
  }
`;

const ApodImageWrapper = styled.div`
  margin: auto auto 1rem;
  width: 100%;

  @media screen and (min-width: 40em) {
    width: 75%;
  }
`

const ApodImage = styled.img.attrs({
  alt: 'NASA Astronomy Picture of the day'
})`
  height: 60vh;
  width: 100%;
  object-fit: cover;
`;

const ApodVideo = styled.div`
  height: 60vh;
  width: 100%;
`;

interface BtnProp {
  right: string
}

const BtnToggle = styled.label`
  position: absolute;
  font-size: 2rem;
  cursor: pointer;
  left: ${(props: BtnProp) => props.right ? "" : "20%"};
  right: ${(props: BtnProp) => props.right ? "20%" : ""};
  transition: 250ms ease-in-out;
  text-shadow: #555 1px 0 10px;
  bottom: 10%;

  &:hover {
    color: teal;
  }

  @media screen and (min-width: 40em) {
    left: ${(props: BtnProp) => props.right ? "" : "20%"};
    right: ${(props: BtnProp) => props.right ? "20%" : ""};
    top: 45%;
  }
`;

const ErroFlash = styled.div`
  color: tomato;
  width: 100%;
  margin: auto;
  padding: 2.5em;

  @media screen and (min-width: 40em) {
    width: 75%;
  }
`

export {
  AppWrapper, AppHeader,
  ApodImageWrapper, ApodImage,
  ApiDataSection, DateAreaWrapper,
  ErroFlash, ApodVideo, BtnToggle,
}