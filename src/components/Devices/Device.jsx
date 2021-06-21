import React from 'react';
const Device = ({ device }) => {
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
