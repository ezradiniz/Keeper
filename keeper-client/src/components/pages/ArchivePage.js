import React from 'react';
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoteContainer from '../containers/NoteContainer';
import NoteModal from '../modals/NoteModal';
import Loader from 'react-loader';
import { fetchAllArchive, remove } from '../../actions/note';
import {
  allNotesArchivedSelector,
  notesLoaderSelector,
  notesSearchSelector
} from '../../reducers/note';

class ArchivePage extends React.Component {

  componentDidMount() {
    if (this.props.notes.length === 0) {
      this.props.fetchAllArchive().then(() => this.setState({ loaded: true }));
    }
  }

  handleRemove = note => this.props.remove(note);

  render() {
    const { notes, message, loaded, searching } = this.props;

    return (
      <Loader loaded={loaded}>
        <Grid>
          <Row className='show-grid'>
            <Col xs={8} xsOffset={2}>
              <NoteContainer
                location={this.props.location}
                message={this.props.message}
                updateOnly
              />
            </Col>
          </Row>
          {!searching &&
              <Row className='show-grid'>
                <Col className='text-center'>
                  <h3 className='text-center'>You have {notes.length} archived notes</h3>
                  <hr/>
                </Col>
              </Row>
          }
          <Row className='show-grid'>
            {
              notes.map((note, index) =>
                <Col
                  key={index}
                  md={3}
                  xs={10}
                  className='note-col'
                >
                  <NoteModal
                    note={note}
                    message={message}
                  />
                </Col>
              )
            }
          </Row>
        </Grid>
      </Loader>
    );
  }
}

ArchivePage.propTypes = {
  fetchAllArchive: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
  message: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    notes: allNotesArchivedSelector(state),
    loaded: notesLoaderSelector(state),
    searching: notesSearchSelector(state)
  };
}

export default connect(mapStateToProps, { fetchAllArchive, remove })(ArchivePage);
