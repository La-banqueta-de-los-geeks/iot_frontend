import React from 'react';

import AppContext from '../context/AppContext';
import devicesEnpoints from "../api/resources/devices"

function useDevices() {
  const { setDevices, setDevice, devices } = React.useContext(
    AppContext
  );
  const addDevices = (device) => {
    const newDevices = [...devices];
    newDevices.push(device);
    setDevices(newDevices);
  };
  const registerDevice = (payload, callback, reject) => devicesEnpoints.createDevice(payload)
      .then(response => {
        const { data } = response
        const { device } = data
        addDevices(device)
        setDevice(device)
        callback()
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          /* console.log(error.response.data); */

          reject(error.response.data)
          /* console.log(error.response.status);
          console.log(error.response.headers); */
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      })
  return ({
    registerDevice,
    addDevices
  })
}

export default useDevices