import React, { useContext, useEffect } from 'react';
import { setAuthUserToken } from '../../api/ApiInstance';
import devicesEnpoints from '../../api/resources/devices';
import AppContext from '../../context/AppContext';
import Select from 'react-select';
import portsEnpoints from '../../api/resources/ports';
const SelectDevices = () => {
  const { user, devices, setDevices, setDevice, setDevicePorts } = useContext(
    AppContext
  );
  const { user_token } = user;
  setAuthUserToken(user_token);
  useEffect(() => {
    return devicesEnpoints
      .getDevices()
      .then((response) => {
        let { data } = response;
        setDevices(data.devices);
        console.log(data.devices.length);
        if (data.devices.length != 0) {
          let dev = data.devices[0];
          setDevice(dev);
          setAuthUserToken(dev.device_token);
          portsEnpoints
            .getPorts()
            .then((response) => {
              let { data } = response;
              setDevicePorts(data.device_ports);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (selectedOption) => {
    setDevice(
      devices.find((device) => {
        return device.id == selectedOption.value;
      })
    );
  };
  return (
    <Select
      className="mb-10"
      onChange={handleChange}
      options={devices.map((device) => {
        return { value: device.id, label: device.name };
      })}
    />
  );
};

export default SelectDevices;
