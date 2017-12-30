import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import setAuthToken from './api/setAuthToken';
import { fetchCurrent } from './actions/user';

import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import ArchivePage from './components/pages/ArchivePage';
import HomePage from './components/pages/HomePage';
import PublicNote from './components/pages/PublicNote';
import TopNavigation from './components/navigations/TopNavigation';

import { Route } from 'react-router-dom';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

import alertOptions from './components/alerts';
import AlertContainer from 'react-alert'

class App extends React.Component {

  state = {
    loaded: false
  };

  componentDidMount() {
    if (localStorage.keeperJWT) {
      setAuthToken(localStorage.keeperJWT);
      this.props.fetchCurrent().then(() => this.setState({ loaded: true }));
    } else {
      this.setState({ loaded: true });
    }
  }

  render() {
    const { location, isAuthenticate } = this.props;

    return (
      <div>
        <AlertContainer ref={a => this.msg = a} {...alertOptions} />
        {isAuthenticate && <Route message={(text, options) => this.msg.show(text, options)} location={location} path='/' component={TopNavigation} />}
        <Route
          location={location}
          message={(text, options) => this.msg.show(text, options)}
          path='/'
          exact
          component={HomePage}
        />
        <Loader loaded={this.state.loaded}>
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
            message={(text, options) => this.msg.show(text, options)}
            path='/dashboard'
            exact
            component={DashboardPage}
          />
          <UserRoute
            location={location}
            message={(text, options) => this.msg.show(text, options)}
            path='/archive'
            exact
            component={ArchivePage}
          />
          <Route
            location={location}
            message={(text, options) => this.msg.show(text, options)}
            path='/notes/public/:note'
            exact
            component={PublicNote}
          />
        </Loader>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  fetchCurrent: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticate : !!state.user.token
  };
}

export default connect(mapStateToProps, { fetchCurrent })(App);
