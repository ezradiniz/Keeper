import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import setAuthToken from './api/setAuthToken';
import { fetchCurrent } from './actions/user';

import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import NewNotePage from './components/pages/NewNotePage';
import NotePage from './components/pages/NotePage';
import ArchivePage from './components/pages/ArchivePage';
import HomePage from './components/pages/HomePage';
import PublicNote from './components/pages/PublicNote';
import Navbar from './components/navigations/Navbar';

import { Route } from 'react-router-dom';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

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
    const { loaded } = this.state;
    const { location, isAuthenticate } = this.props;

    return (
      <Loader loaded={loaded}>
        {isAuthenticate && <Route location={location} path='/' component={Navbar} />}
        <Route
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
          path='/note/:note'
          exact
          component={NotePage}
        />
        <UserRoute
          location={location}
          path='/notes/new'
          exact
          component={NewNotePage}
        />
        <UserRoute
          location={location}
          path='/dashboard'
          exact
          component={DashboardPage}
        />
        <UserRoute
          location={location}
          path='/archive'
          exact
          component={ArchivePage}
        />
        <Route
          location={location}
          path='/notes/public/:note'
          exact
          component={PublicNote}
        />
      </Loader>
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
