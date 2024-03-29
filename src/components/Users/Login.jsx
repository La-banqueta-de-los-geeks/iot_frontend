import {
  ButtonActions,
  Card,
  Container,
  FormContainer,
  H1,
} from '../../styles';
import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';
import Button from '../Share/Button/index';
import instance_users from '../../services/resources/users';
import { useHistory } from 'react-router-dom';

export default () => {
  const { setOrganization, setUser } = useContext(AppContext);
  const history = useHistory();

  const send_form = (ev) => {
    ev.preventDefault();
    const email = ev.target[0].value;
    const password = ev.target[1].value;
    const payload = {
      user: {
        email: email,
        password: password,
      },
    };

    instance_users
      .login(payload)
      .then((response) => {
        let { data } = response;
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('organization', JSON.stringify(data.organization));
        setUser(data.user);
        setOrganization(data.organization);
        history.push('/');
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  return (
    <Container>
      <FormContainer>
        <Card className="mx-3 my-2">
          <H1>Login</H1>
          <form onSubmit={(ev) => send_form(ev)}>
            <input type="email" name="email" id="email" placeholder="email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <ButtonActions>
              <Button text="Reset" variant="typeB" type="reset" />
              <Button text="Login" variant="typeA" type="submit" />
            </ButtonActions>
          </form>
        </Card>
      </FormContainer>
    </Container>
  );
};
