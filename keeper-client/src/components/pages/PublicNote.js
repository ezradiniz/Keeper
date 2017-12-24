import React from 'react';
import PropTypes from 'prop-types';
import api from '../../api';
import Loader from 'react-loader';
import NoteModal from '../modals/NoteModal';

class PublicNote extends React.Component {

  state = {
    loaded: false
  };

  componentDidMount() {
    api.note.fetchPublic(this.props.match.params.note)
      .then(note => this.setState({ note, loaded: true }))
      .catch(() => this.setState({ loaded: true }));
  }

  render() {
    const { note, loaded } = this.state;

    return (
      <Loader loaded={loaded}>
        <div className='row'>
          <div className='col-xs-4 col-xs-offset-4 note-col'>
            {note &&
                <NoteModal note={note} />
            }
            {!note &&
                <div className='alert alert-danger'>
                  <p className='text-center'>Note not found</p>
                </div>
            }
          </div>
        </div>
      </Loader>
    );
  }
}

PublicNote.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      note: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default PublicNote;
