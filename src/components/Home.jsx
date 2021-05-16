import React, { useContext } from 'react';
import AppContext from '../context/AppContext'

export default () => {
  const { user, organization, token } = useContext(AppContext);
  return (
    <div>
      <p>
        {JSON.stringify(user, null, 3)}
      </p>
      <p>
        {JSON.stringify(token, null, 3)}
      </p>
      <p>
        {JSON.stringify(organization, null, 3)}
      </p>
    </div>
  )
}