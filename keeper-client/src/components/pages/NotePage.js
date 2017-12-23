import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import NoteForm from '../forms/NoteForm';
import api from '../../api';

class NotePage extends React.Component {

  state = {
    loaded: false,
    note: {}
  };

  handleSubmit = data => this.props.update(data).then(() => this.props.history.push('/dashboard'));

  componentDidMount() {
    api.note
      .fetch(this.props.match.params.note)
      .then(note => this.setState({ note, loaded: true }))
      .catch(() => this.setState({ loaded: true }));
  }

  render() {
    const { loaded, note } = this.state;

    return (
      <div className='container'>
        <h2>Note</h2>
        <Loader loaded={loaded}>
          <NoteForm data={note} submit={this.handleSubmit} />
        </Loader>
      </div>
    );
  }
}

NotePage.propTypes = {
  update: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { update: () => console.log('teste') })(NotePage);