import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ isAuthenticate, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthenticate ? <Redirect to='/dashboard' /> : <Component {...props} />}
  />
);

GuestRoute.propTypes = {
  isAuthenticate: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.user.token
  }
}

export default connect(mapStateToProps)(GuestRoute);
