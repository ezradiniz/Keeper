import React from 'react';
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap';
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
      <Grid>
        <Row className='show-grid'>
          <Col xs={4} xsOffset={4}>
            <h3>Join us</h3>
            <SignupForm submit={this.handleSubmit} />
          </Col>
        </Row>
      </Grid>
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
