import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Nav,
  NavItem,
  Navbar
} from 'react-bootstrap';
import SearchForm from '../forms/SearchForm';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchQuery, fetchAll, fetchAllArchive } from '../../actions/note';
import { logout } from '../../actions/user';

class TopNavigation extends React.Component {

  submit = query => this.props.fetchQuery(query);

  render() {
    const {
      isAuthenticate,
      history,
      nickname,
      logout,
      location
    } = this.props;

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>
              <Image src='/assets/note.png' alt='Logo' height={25} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        {!isAuthenticate &&
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to='/login'>
                  <NavItem>Login</NavItem>
                </LinkContainer>
                <LinkContainer to='/signup'>
                  <NavItem>Sign Up</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        }
        {isAuthenticate &&
            <Navbar.Collapse>
              <Nav activeHref={location.pathname}>
                <LinkContainer to='/dashboard'>
                  <NavItem>Dashboard</NavItem>
                </LinkContainer>
                <LinkContainer to='/archive'>
                  <NavItem>Archive</NavItem>
                </LinkContainer>
                <LinkContainer to='/logs'>
                  <NavItem>Logs</NavItem>
                </LinkContainer>
              </Nav>
              <Navbar.Form pullLeft>
                <SearchForm
                  submit={this.submit}
                  query={location.pathname === '/search' ? 'ok' : ''}
                  history={history}
                />
              </Navbar.Form>
              <Nav pullRight>
                <NavItem role='button' onClick={() => logout()}>
                  <span className='glyphicon glyphicon-log-out'> Logout</span>
                </NavItem>
              </Nav>
              <Navbar.Text pullRight>
                <span className='glyphicon glyphicon-user'> {nickname}</span>
              </Navbar.Text>
            </Navbar.Collapse>
        }
      </Navbar>
    );
  }
}

TopNavigation.propTypes = {
  nickname: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    nickname: state.user.nickname || '',
    isAuthenticate : !!state.user.token
  };
}

export default connect(mapStateToProps, {
  fetchAll,
  fetchAllArchive,
  fetchQuery,
  logout
})(TopNavigation);
