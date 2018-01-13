import React from 'react';
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import NoteModal from '../modals/NoteModal';
import NoteContainer from '../containers/NoteContainer';
import { fetchAll } from '../../actions/note';
import { allNotesSelector, notesLoaderSelector } from '../../reducers/note';

class DashboardPage extends React.Component {

  componentDidMount() {
    if (!this.props.request) {
      this.props.fetchAll().then(() => this.setState({ loaded: true }));
    }
  }

  render() {
    const { notes, message, loaded } = this.props;

    return (
      <Grid>
        <Row className='show-grid'>
          <Col md={8} mdOffset={2}>
            <NoteContainer
              location={this.props.location}
              message={this.props.message}
            />
            <hr/>
          </Col>
        </Row>
        <Row className='show-grid'>
          <Loader loaded={loaded}>
            {
              notes.map(note =>
                <Col
                  key={note._id}
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
          </Loader>
        </Row>
      </Grid>
    );
  }
}

DashboardPage.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  message: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  request: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};


function mapStateToProps(state) {
  return {
    notes: allNotesSelector(state),
    loaded: notesLoaderSelector(state),
    request: !!state.note.requestNotes
  };
}

export default connect(mapStateToProps, { fetchAll })(DashboardPage);
