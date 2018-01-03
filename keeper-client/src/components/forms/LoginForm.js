import React from 'react';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import PropTypes from 'prop-types';
import Loader from 'react-loader';

bootstrapUtils.addStyle(Button, 'note');

class LoginForm extends React.Component {

  state = {
    data: {
      email: '',
      password: ''
    },
    loaded: true
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loaded: false });
    this.props.submit(this.state.data).catch(() => this.setState({ loaded: true, errors: true }));
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  render() {
    const { data, loaded, errors } = this.state;

    return (
      <Loader loaded={loaded}>
        {errors &&
          <Col>
            <Alert bsStyle='warning'>
              <strong>Warning</strong> - Invalid Email or Password
            </Alert>
          </Col>
        }
        <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup >
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={12}>
              <FormControl
                type='email'
                name='email'
                defaultValue={data.email}
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
          <FormGroup >
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={12}>
              <FormControl
                type='password'
                name='password'
                defaultValue={data.password}
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
          <Button bsStyle='note' type='submit'>
            Login
          </Button>
        </Form>
      </Loader>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
