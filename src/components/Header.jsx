import React from 'react';
import { Link } from 'react-router-dom';
// import AppContext from '../context/AppContext';
import {
  Header,
  Menu,
  ListMenu,

} from "../styles";

export default () => (
  <Header>
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
   
  </Header>
  );
