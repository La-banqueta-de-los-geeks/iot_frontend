import React, { useContext } from 'react';
import AppContext from '../context/AppContext'

export default () => {
  const context = useContext(AppContext);
  console.log(context);
  return(
    <p>
      l
    </p>
  )
}