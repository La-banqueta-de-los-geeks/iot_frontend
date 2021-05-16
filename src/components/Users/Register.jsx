import React, { useContext, useState } from 'react';
import { Card, Container, H1, ButtonActions, ButtonPrimary, ButtonSecondary } from '../../styles'
import instance_users from '../../api/resources/users'
import { useHistory } from "react-router-dom";
import AppContext from '../../context/AppContext';
export default () => {
  const { user, setUser } = useContext(AppContext)
  const { token, setToken } = useContext(AppContext)
  const { organization, setOrganization } = useContext(AppContext)
  const history = useHistory();

  const send_form = (ev) => {

    ev.preventDefault()
    let organization_name = ev.target[0].value
    let email = ev.target[1].value
    let password = ev.target[2].value
    let payload = {
      user: {
        email: email,
        password: password,
        organization_attributes: {
          name: organization_name
        }
      }
    }
    instance_users.register(payload)
      .then((response) => {
        let { data } = response
        localStorage.setItem('token', JSON.stringify(data.token))
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('organization', JSON.stringify(data.organization))
        setUser(data.user)
        setOrganization(data.organization)
        setToken(data.token)
        history.push("/");
      }).catch((err) => {
        alert(err)
        console.log(err);
      });
  }
  return (
    <Container >
      <Card className="mx-3 my-2">
        <H1>Login</H1>
        <form onSubmit={(ev) => send_form(ev)}>
          <input type="text" name="organization_name" id="organization_name" placeholder="organization name" />
          <input type="email" name="email" id="email" placeholder="email" />
          <input type="password" name="password" id="password" placeholder="password" />
          <ButtonActions>
            <ButtonSecondary type="reset">reset</ButtonSecondary>
            <ButtonPrimary type="submit">Crear</ButtonPrimary>
          </ButtonActions>
        </form>
      </Card>
    </Container >

  )
};