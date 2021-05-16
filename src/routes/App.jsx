import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';

import Layout from '../components/Layout.jsx';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import Login from '../components/Users/Login.jsx'
import Home from '../components/Home.jsx'

import theme from '../theme/index.js'
console.log("🚀 ~ file: App.jsx ~ line 12 ~ theme", theme)
const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Layout>
      </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
