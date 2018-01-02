import React from 'react';
import PropTypes from 'prop-types';

import UserRoute from './UserRoute';
import GuestRoute from './GuestRoute';

import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import DashboardPage from '../pages/DashboardPage';
import ArchivePage from '../pages/ArchivePage';
import PublicNote from '../pages/PublicNote';

import { Route } from 'react-router-dom';

const Routes = ({ location, ...rest }) => {

  return (
    <div>
      <GuestRoute
        {...rest}
        location={location}
        path='/signup'
        exact
        component={SignupPage}
      />
      <GuestRoute
        {...rest}
        location={location}
        path='/login'
        exact
        component={LoginPage}
      />
      <UserRoute
        {...rest}
        location={location}
        path='/dashboard'
        exact
        component={DashboardPage}
      />
      <UserRoute
        {...rest}
        location={location}
        path='/archive'
        exact
        component={ArchivePage}
      />
      <Route
        {...rest}
        location={location}
        path='/notes/public/:note'
        exact
        component={PublicNote}
      />
    </div>
  );
};

Routes.propsType = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
};

export default Routes;
