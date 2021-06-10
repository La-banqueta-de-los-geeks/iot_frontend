import React, { useContext } from 'react';
import Dashboard from '../components/Dashboard'
import AppContext from '../context/AppContext'

export default () => {
  const { user, organization, token } = useContext(AppContext);
  return (
    <>
      <p>
        {JSON.stringify(user, null, 3)}
      </p>
      <p>
        {JSON.stringify(token, null, 3)}
      </p>
      <p>
        {JSON.stringify(organization, null, 3)}
      </p>
      <Dashboard />
    </>
  )
}