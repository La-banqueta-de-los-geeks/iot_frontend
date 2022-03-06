import { useState } from 'react';
import { createDeviceSequence } from '../services/resources/device_sequences';

function useDeviceSequences() {
  const [deviceSequences, setDeviceSequences] = useState([]);
  const [deviceSequence, setDeviceSequence] = useState({});
  const addDeviceSequence = (deviceSequence) => {
    const newDeviceSequence = [...deviceSequences];
    newDeviceSequence.push(deviceSequence);
    setDeviceSequences(newDeviceSequence);
  };
  const registerDeviceSequence = (group_id, payload, callback, reject) =>
    createDeviceSequence(group_id, payload)
      .then((response) => {
        const { data } = response;
        const { device_sequence } = data;
        callback(device_sequence);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          /* console.log(error.response.data); */

          reject(error.response.data);
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
      });
  return {
    registerDeviceSequence,
    addDeviceSequence,
    deviceSequences,
    setDeviceSequences,
    deviceSequence,
    setDeviceSequence,
  };
}

export default useDeviceSequences;
