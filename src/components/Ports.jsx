import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import '../assets/styles/components/Ports.scss';
const Ports = () => {
  const { device_ports } = useContext(AppContext);

  const handleChange = (selectedOption) => {
    // setDevice(devices.find((device) => { return device.id == selectedOption.value }))
  };
  return (
    <>
      {device_ports.map((device_port) => {
        return (
          <div key={device_port.id} className="dashboard-ports-card">
            <p>{device_port.port}</p>
            <button className="button-style mt-10">{device_port.status}</button>
          </div>
        );
      })}
    </>
  );
};
export default Ports;
