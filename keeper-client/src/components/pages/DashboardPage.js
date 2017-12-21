import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import NoteForm from '../forms/NoteForm';
import NotesList from '../lists/NotesList';
import { connect } from 'react-redux';
import { create, fetchAll } from '../../actions/note';

class DashboardPage extends React.Component {

  state = {
    notes: [],
    loaded: false
  };

  componentDidMount() {
    this.props.fetchAll().then(notes => this.setState({ notes: [ ...notes ], loaded: true }));
  }

  handleSubmit = data => this.props.create(data).then(note => {
    this.setState({ notes: [ note, ...this.state.notes] });
  });

  render() {
    const { notes, loaded } = this.state;

    return (
      <div className='container'>
        <h2>Dashboard</h2>
        <div>
          <h3>New Note</h3>
          <NoteForm submit={this.handleSubmit} />
        </div>
        <hr/>
        <Loader loaded={loaded}>
          <NotesList notes={notes} />
        </Loader>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired
};

export default connect(null, { fetchAll, create })(DashboardPage);
