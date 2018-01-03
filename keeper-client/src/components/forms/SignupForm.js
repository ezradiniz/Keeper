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

class SignupForm extends React.Component {

  state = {
    data: {
      nickname: '',
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
              <strong>Warning</strong> - Some error ocurred. Please try again.
            </Alert>
          </Col>
        }
        <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup >
            <Col componentClass={ControlLabel} sm={2}>
              Nickname
            </Col>
            <Col sm={12}>
              <FormControl
                type='nickname'
                name='nickname'
                defaultValue={data.nickname}
                onChange={this.onChange}
              />
            </Col>
          </FormGroup>
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
            Sign Up
          </Button>
        </Form>
      </Loader>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
