import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {

  state = {
    data: {
      email: '',
      password: ''
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.data);
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  render() {
    const { data } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={data.email}
            onChange={this.onChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={data.password}
            onChange={this.onChange}
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary btn-block'>Login</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
