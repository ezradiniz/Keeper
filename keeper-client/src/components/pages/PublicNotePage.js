import React from 'react';
import {
  Alert,
  Col,
  Grid,
  Row
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import api from '../../api';
import NoteModal from '../modals/NoteModal';

class PublicNotePage extends React.Component {

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
        <Grid>
          <Row className='show-grid'>
            {note &&
                <div>
                  <Col xs={1} md={1} />
                  <Col xs={7} md={7} className='note-col'>
                    <NoteModal note={note} onlyView />
                  </Col>
                </div>
            }
          </Row>
          <Row className='show-grid'>
            {!note &&
                <Col xs={4} xsOffset={4}>
                  <Alert bsStyle='warning' className='text-center'>
                    Note not found
                  </Alert>
                </Col>
            }
          </Row>
        </Grid>
      </Loader>
    );
  }
}

PublicNotePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      note: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default PublicNotePage;
