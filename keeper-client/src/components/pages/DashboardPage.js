import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../forms/NoteForm';
import { connect } from 'react-redux';
import { create, fetchAll } from '../../actions/note';

class DashboardPage extends React.Component {

  state = {
    notes: []
  };

  componentDidMount() {
    this.props.fetchAll().then(notes => this.setState({ notes: [ ...notes ] }));
  }

  handleSubmit = data => this.props.create(data).then(note => {
    this.setState({ notes: [ ...this.state.notes, note ] });
  });

  render() {
    return (
      <div className='container'>
        <h2>Dashboard</h2>
        <div>
          <h3>New Note</h3>
          <NoteForm submit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired
};

export default connect(null, { fetchAll, create })(DashboardPage);
