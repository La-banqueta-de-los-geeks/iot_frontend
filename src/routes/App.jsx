import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import Login from '../components/Users/Login';
import Register from '../components/Users/Register';
import Home from '../components/Home';
import Dashboard from '../components/Dashbord';
import ProtectedRoute from './ProtectedRoute';
import { SearchOrganization, SearchUser } from '../config/utils';
import theme from '../theme/index';
import Unauthorized from './Unauthorized';

console.log('🚀 ~ file: App.jsx ~ line 12 ~ theme', theme);
const App = () => {
  const [device_ports, setDevicePorts] = useState([]);
  const [devices, setDevices] = useState([]);
  const [device, setDevice] = useState([]);
  const [user, setUser] = useState(SearchUser());
  const [organization, setOrganization] = useState(SearchOrganization);

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);
    setOrganization(null);
  };
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
      }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
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
