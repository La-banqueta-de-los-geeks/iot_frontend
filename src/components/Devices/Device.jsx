import React, { useContext, useEffect } from 'react';
import { setAuthUserToken } from '../../api/ApiInstance';
import portsEnpoints from '../../api/resources/ports';
import AppContext from '../../context/AppContext';
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
    <div className="dashboard-device">
      <div className="device-tittle">
        <h2>{device.name}</h2>
        <button className="button-style fix" type="button">
          E
        </button>
      </div>
      <p>{device.status}</p>
      <button type="button" className="button-style">
        Agregar Puerto
      </button>
    </div>
  );
};

export default Device;
