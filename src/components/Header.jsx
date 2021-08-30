import React from 'react';
import { Link } from 'react-router-dom';
// import AppContext from '../context/AppContext';
import {
  HeaderContainer,
  Menu,
  ListMenu,

} from "../styles";

const Header = () => (
  <HeaderContainer>
    <Menu>
      <ListMenu>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/register"> Registro </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
      </ListMenu>
    </Menu>
   
  </HeaderContainer>
  );

  export default Header