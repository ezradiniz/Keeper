import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';

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
    this.props.submit(this.state.data).catch(() => this.setState({ loaded: true }));
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  render() {
    const { data, loaded } = this.state;

    return (
      <Loader loaded={loaded}>
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <label htmlFor='nickname'>Nickname</label>
          <input
            type='text'
            id='nickname'
            name='nickname'
            value={data.nickname}
            onChange={this.onChange}
            className='form-control'
          />
        </div>
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
    </Loader>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;
