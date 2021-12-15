import React from 'react';

import AppContext from '../context/AppContext';
import portsEnpoints from '../api/resources/ports';

function usePorts() {

  const {device_ports, setDevicePorts} = React.useContext(
    AppContext
  );
  const addDevicePorts = (device_port) => {
    const newPorts = [...device_ports];
    newPorts.push(device_port);
    setDevicePorts(newPorts);
  };
  const registerDevicePort = (payload, callback, reject) => portsEnpoints.createPort(payload)
      .then(response => {
        const { data } = response
        const { device_port } = data
        addDevicePorts(device_port)
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
    registerDevicePort,
    addDevicePorts
  })
}

export default usePorts