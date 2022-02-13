import React, { useState } from 'react';
import AppContext from '../context/AppContext';
import { createDeviceGroup } from '../services/resources/groups';

function useDeviceGroups() {
  const [device_groups, setDeviceGroups] = useState([]);
  const [device_group, setDeviceGroup] = useState(null);
  const addDeviceGroups = (device_group) => {
    const newDeviceGroups = [...device_groups];
    newDeviceGroups.push(device_group);
    setDeviceGroups(newDeviceGroups);
  };
  const registerDeviceGroup = (payload, callback, reject) =>
    createDeviceGroup(payload)
      .then((response) => {
        const { data } = response;
        const { device_group } = data;
        callback(device_group);
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
    registerDeviceGroup,
    addDeviceGroups,
    device_groups,
    setDeviceGroups,
    device_group,
    setDeviceGroup,
  };
}

export default useDeviceGroups;
