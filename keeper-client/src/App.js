import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import setAuthToken from './api/setAuthToken';
import { fetchCurrent } from './actions/user';

import HomePage from './components/pages/HomePage';
import TopNavigation from './components/navigations/TopNavigation';

import Routes from './components/routes';
import { Route } from 'react-router-dom';

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

  onMessageAlert = (text, options) => this.msg.show(text, options);

  render() {
    const { location, isAuthenticate } = this.props;

    return (
      <div>
        <AlertContainer ref={a => this.msg = a} {...alertOptions} />
        {isAuthenticate &&
            <Route
              location={location}
              path='/'
              component={TopNavigation}
            />
        }
        <Route
          location={location}
          message={this.onMessageAlert}
          path='/'
          exact
          component={HomePage}
        />
        <Loader loaded={this.state.loaded}>
          <Routes
            location={location}
            message={this.onMessageAlert}
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
