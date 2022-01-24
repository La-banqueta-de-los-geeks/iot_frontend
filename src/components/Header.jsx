import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { deleteSession } from '../config/utils';
import AppContext from '../context/AppContext';
import { HeaderContainer, Menu, ListMenu } from '../styles';

const Header = (props) => {
  const history = useHistory();
  const { user, setUser } = useContext(AppContext);
  const logOut = () => {
    deleteSession();
    setUser();
    history.push('/login');
  };
  return (
    <HeaderContainer>
      <Menu>
        {user ? (
          <ListMenu>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link onClick={logOut}> Logout </Link>
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
    </HeaderContainer>
  );
};

export default Header;
