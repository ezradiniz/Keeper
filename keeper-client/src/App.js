import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';

const App = ({ location }) => (
  <div>
    <h1>Keeper</h1>
    <Route location={location} path='/login' exact component={LoginPage} />
    <Route location={location} path='/signup' exact component={SignupPage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
