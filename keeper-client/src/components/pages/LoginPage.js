import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../actions/user';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {

  handleSubmit = data => this.props.login(data).then(() => {
    this.props.history.push('/dashboard');
  });

  render() {
    return (
      <div className='container'>
        <h2>Login</h2>
        <LoginForm submit={this.handleSubmit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { login })(LoginPage);
