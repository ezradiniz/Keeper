import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../forms/NoteForm';
import { connect } from 'react-redux';
import { create } from '../../actions/note';

class NewNotePage extends React.Component {

  handleSubmit = data => this.props.create(data).then(() => this.props.history.push('/dashboard'));

  render() {
    return (
      <div className='container'>
        <div className='col-md-4 col-md-offset-4'>
          <h3>New Note</h3>
          <NoteForm submit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

NewNotePage.propTypes = {
  create: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { create })(NewNotePage);
