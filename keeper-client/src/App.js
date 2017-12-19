import React from 'react';
import PropTypes from 'prop-types';

import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import HomePage from './components/pages/HomePage';

import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = ({ location }) => (
  <div className='container-fluid'>
    <GuestRoute
      location={location}
      path='/'
      exact
      component={HomePage}
    />
    <GuestRoute
      location={location}
      path='/signup'
      exact
      component={SignupPage}
    />
    <GuestRoute
      location={location}
      path='/login'
      exact
      component={LoginPage}
    />
    <UserRoute
      location={location}
      path='/dashboard'
      exact
      component={DashboardPage}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
