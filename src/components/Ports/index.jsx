import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import portsEnpoints from '../../api/resources/ports';
import { setAuthUserToken } from '../../api/ApiInstance';
import { PortsContainer, ButtonDashboard } from '../../styles'

const Ports = () => {
  const { device, device_ports, setDevicePorts } = useContext(AppContext);
  const { device_token } = device;
  setAuthUserToken(device_token);
  const filterPorts = (device_port, ports) => {
    return ports.map((port) => {
      if (port.id === device_port.id) return device_port;
      else return port;
    });
  };
  const handleClick = (device_port) => {
    let payload = {
      device_port: {
        status: device_port.status == 'ON' ? 'OFF' : 'ON',
      },
    };
    portsEnpoints
      .updatePort(device_port.id, payload)
      .then((result) => {
        setDevicePorts(filterPorts(result.data.device_port, [...device_ports]));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row">
      {device_ports && device_ports.length !== 0 ? device_ports.map((device_port) => (
        <div className="col-sm-3 col-md-2 py-2" key={device_port.id}>
          <PortsContainer key={device_port.id} >
            <p>{`${device_port.id} ${device_port.port}`}</p>
            <ButtonDashboard
              className="button-style mt-10"
              onClick={() => {
                handleClick(device_port);
              }}
            >
              {device_port.status}
            </ButtonDashboard>
          </PortsContainer>
        </div>
      )) : <p>No existen puetos registrados</p>}
    </div>
  );
};
export default Ports;
