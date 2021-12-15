import React, { useContext, useEffect } from 'react';
import { setAuthUserToken } from '../../api/ApiInstance';
import portsEnpoints from '../../api/resources/ports';
import AppContext from '../../context/AppContext';
import { ButtonDashboard } from '../../styles'
import { CreatePort } from '../Ports/CreatePort';
import Button from 'react-bootstrap/Button';

const Device = () => {
  const { device, setDevicePorts } = useContext(
    AppContext
  );
  useEffect(() => {
    const device_token = device.device_token
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
  }, [device])
  return (
    <div className="mx-1">
      <h2 className="my-1">{`${device.name} ${device.status}`}</h2>
      <div className="d-flex justify-content-end">
        <Button variant="secondary mx-1" >
          {"Actualizar"}
        </Button>
        <CreatePort />
      </div>
    </div>
  );
};

export default Device;
