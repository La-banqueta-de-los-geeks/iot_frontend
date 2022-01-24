import React, { useContext, useEffect } from 'react';

import AppContext from '../../context/AppContext';
import Button from 'react-bootstrap/Button';
import { CreatePort } from '../Ports/CreatePort';
import portsEnpoints from '../../services/resources/ports';
import { setAuthUserToken } from '../../services/ApiInstance';

const Device = () => {
  const { device, setDevicePorts } = useContext(AppContext);
  useEffect(() => {
    const device_token = device.device_token;
    setAuthUserToken(device_token);
    portsEnpoints
      .getPorts()
      .then((response) => {
        let { data } = response;
        setDevicePorts(data.device_ports);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [device]);
  return (
    <div className="mx-1">
      <h2 className="my-1">{`${device.name} ${device.status}`}</h2>
      <div className="d-flex justify-content-end">
        <Button variant="secondary mx-1">{'Actualizar'}</Button>
        <CreatePort />
      </div>
    </div>
  );
};

export default Device;
