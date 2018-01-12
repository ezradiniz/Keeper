import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap';
import NoteContainer from '../containers/NoteContainer';
import NoteModal from '../modals/NoteModal';
import { connect } from 'react-redux';
import { notesQuerySelector } from '../../reducers/note';
import { detachQuery } from '../../actions/note';

class SearchResultContainer extends React.Component {

  state = {
    notes: [],
    archive: []
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.notes) {
      this.setState({
        notes: nextProps.notes.filter(n => !n.isArchived),
        archive: nextProps.notes.filter(n => n.isArchived)
      })
    }
  }

  componentWillUnmount() {
    this.props.detachQuery();
  }

  render() {
    const { message } = this.props;

    return (
      <Grid>
        <Row className='show-grid'>
          <Col md={8} mdOffset={2}>
            <NoteContainer
              location={this.props.location}
              message={this.props.message}
              updateOnly
            />
            <hr/>
          </Col>
        </Row>
        <Row className='show-grid'>
          <h3>Notes</h3>
          {
            this.state.notes.map((note, index) =>
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
        <Row className='show-grid'>
          <h3>Archives</h3>
          {
            this.state.archive.map((note, index) =>
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
    );
  }
}

SearchResultContainer.propTypes = {
  notes: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    notes: notesQuerySelector(state)
  };
}

export default connect(mapStateToProps, { detachQuery })(SearchResultContainer);
