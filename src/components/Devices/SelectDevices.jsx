import React, { useContext, useEffect } from 'react';

import AppContext from '../../context/AppContext';
import ListGroup from 'react-bootstrap/ListGroup';
import { getDeviceGroups } from '../../services/resources/groups';
import { getDevices } from '../../services/resources/devices';
import { getPorts } from '../../services/resources/ports';
import { setAuthUserToken } from '../../services/ApiInstance';

const SelectDevices = () => {
  const {
    user,
    devices,
    setDevices,
    setDevice,
    device,
    setDevicePorts,
    setDeviceGroup,
    setDeviceGroups,
  } = useContext(AppContext);

  const { user_token } = user;
  setAuthUserToken(user_token);

  useEffect(() => {
    getDevices()
      .then((response) => {
        let { devices } = response;
        setDevices(devices);
        if (devices.length != 0) setDevice(devices[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (new_device) => {
    setDevice(new_device);
  };

  useEffect(() => {
    if (!device) return;
    setAuthUserToken(device.device_token);
    Promise.all([getDeviceGroups(device.id), getPorts()])
      .then(([groups, ports]) => {
        setDeviceGroups(groups.device_groups);
        setDevicePorts(ports.device_ports);
        const [first] = groups.device_groups;
        if (first) setDeviceGroup(first);
      })
      .catch((err) => {
        setDeviceGroups([]);
        setDevicePorts([]);
        console.log(err);
      });
  }, [device]);

  return (
    <>
      {devices.length !== 0 ? (
        <div className="menu-main-device_sequences">
          {devices.map((device) => (
            <ListGroup key={device.id} className="content-device_sequences">
              <ListGroup.Item
                onClick={() => {
                  handleChange(device);
                }}
              >
                {device.name}
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      ) : (
        <p>No existen secuencias</p>
      )}
    </>
  );
};

export default SelectDevices;
