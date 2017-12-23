import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NotesList from '../lists/NotesList';
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
          <NotesList notes={notes} remove={this.handleRemove} />
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
