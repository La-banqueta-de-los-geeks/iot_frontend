import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import { SearchOrganization, SearchUser } from '../config/utils';
import useDeviceGroups from '../hooks/useDeviceGroups';
import AppContext from '../context/AppContext';
import Dashboard from '../components/Dashbord';
import Layout from '../components/Layout';
import Login from '../components/Users/Login';
import ProtectedRoute from './ProtectedRoute';
import Register from '../components/Users/Register';
import { ThemeProvider } from 'styled-components';
import Unauthorized from './Unauthorized';
import theme from '../theme/index';
import useDeviceSequences from '../hooks/useDeviceSequences';
import usePortValues from '../hooks/usePortValues';
import useSequences from '../hooks/useSequences';

console.log('🚀 ~ file: App.jsx ~ line 12 ~ theme', theme);
const App = () => {
  const {
    registerDeviceGroup,
    addDeviceGroups,
    device_groups,
    setDeviceGroups,
    device_group,
    setDeviceGroup,
  } = useDeviceGroups();
  const {
    portValues,
    setPortValues,
    portValue,
    setPortValue,
    registerPortValue,
    addPortValue,
    allPortValues,
  } = usePortValues();
  const {
    registerDeviceSequence,
    addDeviceSequence,
    deviceSequences,
    setDeviceSequences,
    deviceSequence,
    setDeviceSequence,
  } = useDeviceSequences();
  const {
    sequences,
    setSequences,
    sequence,
    setSequence,
    addSequence,
    registerSequence,
    allSequences,
  } = useSequences();
  const [device_ports, setDevicePorts] = useState([]);
  const [devices, setDevices] = useState([]);
  const [device, setDevice] = useState(null);
  const [user, setUser] = useState(SearchUser());
  const [organization, setOrganization] = useState(SearchOrganization);

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);
    setOrganization(null);
  };

  const registerNewPortValue = registerPortValue(organization);
  const getAllPortValues = allPortValues(organization);

  const getAllSequences = allSequences(device);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        organization,
        setOrganization,
        devices,
        setDevices,
        device,
        setDevice,
        device_ports,
        setDevicePorts,
        device_groups,
        setDeviceGroups,
        device_group,
        setDeviceGroup,
        registerDeviceGroup,
        addDeviceGroups,
        registerDeviceSequence,
        addDeviceSequence,
        deviceSequences,
        setDeviceSequences,
        deviceSequence,
        setDeviceSequence,
        portValues,
        setPortValues,
        portValue,
        setPortValue,
        registerNewPortValue,
        addPortValue,
        getAllPortValues,
        registerSequence,
        getAllSequences,
        sequences,
        setSequences,
        sequence,
        setSequence,
        addSequence,
      }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/unauthorized" component={Unauthorized} />
              <ProtectedRoute
                exact
                path="/"
                user={user}
                handleLogout={handleLogout}
                component={Dashboard}
              />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
};
export default App;
