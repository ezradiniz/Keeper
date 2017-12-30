import React from 'react';
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap';
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
      <Grid>
        <Row className='show-grid'>
          <Col xs={4} xsOffset={4}>
            <h3>Login</h3>
            <LoginForm submit={this.handleSubmit} />
          </Col>
        </Row>
      </Grid>
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
