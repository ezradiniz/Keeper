import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const UserRoute = ({ isAuthenticate, message, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthenticate ? <Component {...props} message={message} /> : <Redirect to='/' />}
  />
);

UserRoute.propTypes = {
  isAuthenticate: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  message: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.user.token
  }
}

export default connect(mapStateToProps)(UserRoute);
