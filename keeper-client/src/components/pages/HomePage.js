import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className='container'>
    <div className='jumbotron'>
      <h1>Keeper</h1>
      <p>Notes and Snippets</p>
      <ul className='nav navbar-nav'>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
      </ul>
    </div>
  </div>
);

export default HomePage;
