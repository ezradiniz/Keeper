import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../../actions/user';

import SignupForm from '../forms/SignupForm';

class SignupPage extends React.Component {

  handleSubmit = data => this.props.signup(data).then(() => {
    this.props.history.push('/dashboard');
  });

  render() {
    return (
      <div className='container'>
        <h2>Join us</h2>
        <SignupForm submit={this.handleSubmit} />
      </div>
    );
  }
}

SignupPage.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { signup })(SignupPage);
