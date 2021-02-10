import React from 'react';
import { Card, Container, H1, ButtonActions, FormContainer } from '../../styles'
import useUsers from '../../hooks/useUsers';
import config from '../../config';
import axios from 'axios';

// Components
import Button from '../Share/Button/index.jsx';
import instance_users from '../../api/resources/users'

export default () => {
  console.log('config', config);
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
    // axios.post(config.v1.users.login, payload)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     alert(error.response.data.message);
    //   });
      instance_users.create(payload)
      .then((result) => {
        console.log(result);
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