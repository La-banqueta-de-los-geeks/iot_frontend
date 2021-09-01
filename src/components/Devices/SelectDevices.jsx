import React, { useContext, useEffect } from 'react';
import Select from 'react-select';
import { setAuthUserToken } from '../../api/ApiInstance';
import devicesEnpoints from '../../api/resources/devices';
import AppContext from '../../context/AppContext';
import { Container , DashboardContainer} from '../../styles'

const SelectDevices = () => {
  const { user, devices, setDevices, setDevice } = useContext(
    AppContext
  );
  const { user_token } = user;
  setAuthUserToken(user_token);
  useEffect(() => {
    devicesEnpoints
      .getDevices()
      .then((response) => {
        let { data } = response;
        setDevices(data.devices);
        if (data.devices.length != 0)
        {
          setDevice(data.devices[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (selectedOption) => {
    let device = devices.find((device) => device.id == selectedOption.value)
    setDevice(
      device
    );
  };
  return (
    <Container>
      <Select
        className="mb-10"
        onChange={handleChange}
        options={devices.map((device) => ({ value: device.id, label: device.name }))}
      />
    </Container>
  );
};

export default SelectDevices;
