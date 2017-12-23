import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = ({ isAuthenticate }) => (
  <div className='container'>
    <div className='jumbotron'>
      <h1>Keeper</h1>
      <p>Notes and Snippets</p>
      <ul className='nav navbar-nav'>
        {!isAuthenticate && <div>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
        </div>}
      </ul>
    </div>
  </div>
);

HomePage.propTypes = {
  isAuthenticate: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.user.token
  }
}

export default connect(mapStateToProps)(HomePage);
