import styled from 'styled-components';

interface ErrorProp {
  error: string
}

const AppWrapper = styled.div`
  height: 100vh;
  padding: 0 5% 0;
  position: relative;
  overflow-y: scroll;

  @media screen and (min-width: 40em) {
    padding: ${(prop: ErrorProp) => prop.error ? "5rem 5% 4rem" : "0 5% 4rem"};
  }
`

const AppHeader = styled.header`
  color: teal;
  text-align: center;
  padding: 1% 0;
  margin-bottom: 1rem;

  @media screen and (min-width: 40em) {
    padding: 1rem 0;
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

  &:hover {
    border: 1.2px solid #025955;
  }

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
    padding: 0.5rem 0rem;
    font-size: 0.7rem;
    color: #efefef;
    background: teal;
    border: 1.2px solid teal;
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 250ms ease-in-out;

    &:hover {
      background-color: #025955;
      border: 1.2px solid #025955;
    }
  }

  @media screen and (min-width: 40em) {
    width: 70%;

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
`;

interface FavUrl {
  fav: string
}

const ApodImage = styled.img.attrs({
  alt: 'NASA Astronomy Picture of the day'
})`
  height: 60vh;
  width: 100%;
  object-fit: cover;

  @media screen and (min-width: 40em) {
    width: ${(props: FavUrl) => props.fav ? "30%" : "100%"};
    margin: ${(props: FavUrl) => props.fav ? "0 0.4rem 0.4rem 0" : ""};
  }
`;

const ApodVideo = styled.div`
  height: 60vh;
  width: 100%;

  @media screen and (min-width: 40em) {
    width: ${(props: FavUrl) => props.fav ? "30%" : "100%"};
    margin: ${(props: FavUrl) => props.fav ? "0 0.4rem 0.4rem 0" : ""};
  }
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
  bottom: 15%;

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
`;

const Navbar = styled.nav`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #DBDBDB;
  padding: 0.5rem 2%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  background-color: #191919;

  @media screen and (min-width: 40em) {
    padding: 0.8rem 10%;
  } 
`;

const NavItem = styled.span`
  color: #efefef;
  cursor: pointer;
  transition: 250ms ease-in-out;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: teal;

    ::after {
      content: " *";
      width: 100%;
      height: 100%;
    }
  }
`;


const Logo = styled.img.attrs({
  src: "/nasaLogo.svg"
})`
  object-fit: contain;
  height: 4rem;
  min-width: 2rem;
  cursor: pointer;
`;

// Favorites Page Utils
const FavoritesCanvas = styled.article`
  width: 100%;
  padding: 5.5rem 2% 0;

  h2 {
    text-align: center;
  }
  
  @media screen and (min-width: 40em) {
    padding: 5.5rem 5% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;  
  }
`;

export {
  AppWrapper, AppHeader,
  ApodImageWrapper, ApodImage,
  ApiDataSection, DateAreaWrapper,
  ErroFlash, ApodVideo, BtnToggle,
  Logo, Navbar, NavItem, FavoritesCanvas,
}