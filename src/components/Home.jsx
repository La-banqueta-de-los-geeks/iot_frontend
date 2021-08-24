import React, { useContext } from 'react';
import Dashboard from "./Dashboard"
import AppContext from '../context/AppContext'
import {Main , H1 , DevTools} from '../styles'

export default () => {
  const { user, organization, token } = useContext(AppContext);
  return (
    <>
      <Main>
        <H1>Vurotron</H1>
        <Dashboard />
        <DevTools>
          <h2>Develepers tools</h2>
          <p>
            {JSON.stringify(user, null, 3)}
          </p>
          <p>
            {JSON.stringify(token, null, 3)}
          </p>
          <p>
            {JSON.stringify(organization, null, 3)}
          </p>
        </DevTools>
      </Main>
    </>
  )
}