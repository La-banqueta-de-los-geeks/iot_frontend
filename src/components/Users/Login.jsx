import React, { useState } from 'react';
import { Card, Container, H1, ButtonActions, ButtonPrimary, ButtonSecondary } from '../../styles'
import useUsers from '../../hooks/useUsers';
import config from '../../config';
import axios from 'axios';
import instance_users from '../../api/resources/users'
import { useHistory } from "react-router-dom";
// Components
import Button from '../Share/Button/index.jsx';
import instance_users from '../../api/resources/users'

export default () => {
  console.log('config', config);
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [organization, setOrganization] = useState(null)
  const history = useHistory();

  const send_form = (ev) => {

    ev.preventDefault()
    let email = ev.target[0].value
    let password = ev.target[1].value
    let payload = {
      user: {
        email: email,
        password: password
      }
    }
      
    instance_users.create(payload)
      .then((response) => {
        let { data } = response
        localStorage.setItem('token', JSON.stringify(token.token))
        setUser(data.user)
        setOrganization(data.organization)
        setToken(data.token)
        console.log(user, organization, token, data);
        history.push("/");

      }).catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container >
      <FormContainer>
        <Card className="mx-3 my-2">
          <H1>Login</H1>
          <form onSubmit={(ev) => send_form(ev)}>
            <input type="email" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <ButtonActions>
              <Button text='Reset' variant='typeB' type="reset" />
              <Button text='Crear' variant='typeA' type="submit" />
            </ButtonActions>
          </form>
        </Card>
      </FormContainer>

    </Container >

  )
};