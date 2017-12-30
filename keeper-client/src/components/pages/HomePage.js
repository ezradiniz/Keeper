import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Image,
  Jumbotron,
  Grid
} from 'react-bootstrap';

const HomePage = ({ isAuthenticate }) => (
  <Grid>
    <Jumbotron>
      <Image src='/assets/note.png' alt='Logo' height={400} responsive />
      <p>Keeper allows users to make different kinds of notes, including text and lists. Keeper is my Google Keep version.</p>
      <ul>
        {!isAuthenticate && <div>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
        </div>}
      </ul>
    </Jumbotron>
  </Grid>
);

HomePage.propTypes = {
  isAuthenticate: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticate: !!state.user.token
  };
}

export default connect(mapStateToProps)(HomePage);
