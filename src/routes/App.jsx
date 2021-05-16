import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../components/Layout.jsx';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import initialState from '../initialState';
import Login from '../components/Users/Login.jsx'
import Home from '../components/Home.jsx'

const App = () => {
  const [user, setUser] = useState({})
  const [organization, setOrganization] = useState({})
  const [token, setToken] = useState({})
  return (
    <AppContext.Provider value={{ user, setUser, organization, setOrganization, token, setToken }}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
