import React, { useContext } from 'react';
import AppContext from '../context/AppContext'

export default () => {
  const {state} = useContext(AppContext);
  console.log(state);
  return(
    <p>
      l
    </p>
  )
}