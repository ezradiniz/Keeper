import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import NoteUpdateForm from '../forms/NoteUpdateForm';
import { update } from '../../actions/note';
import api from '../../api';

class NotePage extends React.Component {

  state = {
    loaded: false,
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
        <div className='col-md-4 col-md-offset-4'>
          {note &&
              <div>
                <h3>Note</h3>
                <Loader loaded={loaded}>
                  <NoteUpdateForm data={note} submit={this.handleSubmit} />
                </Loader>
              </div>
          }
          {!note &&
              <div className='alert alert-danger'>
                <p className='text-center'>Note not found</p>
              </div>
          }
        </div>
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

export default connect(null, { update })(NotePage);
