import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/user';

const Navbar = ({ nickname, logout, location }) => (
  <div className='navbar navbar-default'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <Link to='/' className='navbar-brand'>Keeper</Link>
      </div>
      <ul className='nav navbar-nav'>
        <li className={location.pathname === '/dashboard' ? 'active' : ' '}><Link to='/dashboard'>Dashboard</Link></li>
      </ul>
      <ul className='nav navbar-nav navbar-right'>
        <li><Link to='#' onClick={() => logout()}><span className='glyphicon glyphicon-log-in'/> Logout</Link></li>
      </ul>
      <ul className='nav navbar-nav navbar-right'>
        <li><Link to='#'><span className='glyphicon glyphicon-user'/> {nickname}</Link></li>
      </ul>
    </div>
  </div>
);

Navbar.propTypes = {
  nickname: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    nickname: state.user.nickname
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
