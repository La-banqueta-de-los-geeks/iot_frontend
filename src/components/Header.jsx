import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteSession } from '../config/utils';
import AppContext from '../context/AppContext';
import { Header, Container, Menu, ListMenu } from '../styles/';

export default (props) => {
  const history = useHistory();
  const { user, setUser } = useContext(AppContext);
  const logOut = () => {
    deleteSession();
    setUser();
    history.push('/login');
  };
  return (
    <Header>
      <Container>
        <div>Vurotron</div>
        <Menu>
          {user ? (
            <ListMenu>
              <li>
                <Link to="/"> home </Link>
              </li>
              <li>
                <a onClick={logOut}> logOut </a>
              </li>
            </ListMenu>
          ) : (
            <ListMenu>
              <li>
                <Link to="/register"> Registro </Link>
              </li>
              <li>
                <Link to="/login"> Login </Link>
              </li>
            </ListMenu>
          )}
        </Menu>
      </Container>
    </Header>
  );
};
