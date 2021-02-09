import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import {
  Header,
  Container,
  Menu,
  ListMenu,

} from '../styles/';

export default () => {
  const { state } = useContext(AppContext);
  const { social_networks } = state;
  return (
    <Header >
      <Container>
        <div>.</div>
        <Menu>
          <ListMenu>
            <li>
              <Link to="/"> home </Link>
            </li>
            <li>
              <Link to="/register"> Registro </Link>
            </li>
            <li>
              <Link to="/login"> Login </Link>
            </li>
          </ListMenu>
        </Menu>
      </Container>
    </Header>
  );
};
