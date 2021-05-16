import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '../components/Layout.jsx';
import AppContext from '../context/AppContext';
import Login from '../components/Users/Login.jsx'
import Register from '../components/Users/Register.jsx'
import Home from '../components/Home.jsx'
import { SearchOrganization, SearchToken, SearchUser } from '../config/utils';

const App = () => {
  const [user, setUser] = useState(SearchUser())
  const [organization, setOrganization] = useState(SearchOrganization)
  const [token, setToken] = useState(SearchToken())
  return (
    <AppContext.Provider value={{ user, setUser, organization, setOrganization, token, setToken }}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
