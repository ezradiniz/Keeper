import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoteSection from '../sections/NoteSection';
import Loader from 'react-loader';
import { fetchAllArchive, remove } from '../../actions/note';
import { allNotesSelector } from '../../reducers/note';

class ArchivePage extends React.Component {

  state = {
    loaded: false
  };

  componentDidMount() {
    this.props.fetchAllArchive().then(() => this.setState({ loaded: true }));
  }

  handleRemove = note => this.props.remove(note);

  render() {
    const { notes } = this.props;

    return (
      <div className='container'>
        <Loader loaded={this.state.loaded}>
          {notes.length > 0 &&
            <div>
              <h3 className='text-center'>You have {notes.length} archived notes</h3>
              <NoteSection
                notes={notes}
                remove
                update
                share
                unarchive
              />
            </div>
          }
          {notes.length <= 0 &&
              <div className='alert alert-danger'>
                <p className='text-center'>0 archived Notes</p>
              </div>
          }
        </Loader>
      </div>
    );
  }
}

ArchivePage.propTypes = {
  fetchAllArchive: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    notes: allNotesSelector(state)
  };
}

export default connect(mapStateToProps, { fetchAllArchive, remove })(ArchivePage);
