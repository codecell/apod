import React from "react";
import { Link } from 'react-router-dom';

// Styled Components
import {
  Logo,
  Navbar, NavItem,
} from './App.styles'

const Toolbar = () => (
  <Navbar>
    <Link to="/">
      <Logo />
    </Link>
    <Link to="/favorites">
      <NavItem>
        Favorites
      </NavItem>
    </Link>
  </Navbar>
);

export default Toolbar;