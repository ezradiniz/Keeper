import React from 'react';
import {
  Col,
  Grid,
  Row
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import NoteModal from '../modals/NoteModal';
import NotePageContainer from './NotePageContainer';
import { connect } from 'react-redux';
import { fetchAll } from '../../actions/note';
import { allNotesSelector } from '../../reducers/note';

class DashboardPage extends React.Component {

  state = {
    loaded: false
  };

  componentDidMount() {
    this.props.fetchAll().then(() => this.setState({ loaded: true }));
  }

  render() {
    const { notes, message } = this.props;

    return (
      <Grid>
        <Row className='show-grid'>
          <Col md={8} mdOffset={2}>
            <NotePageContainer message={this.props.message} />
            <hr/>
          </Col>
        </Row>
        <Row className='show-grid'>
          <Loader loaded={this.state.loaded}>
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
                    share
                    remove
                    archive
                    update
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
  notes: PropTypes.array.isRequired,
  message: PropTypes.func.isRequired
};


function mapStateToProps(state) {
  return {
    notes: allNotesSelector(state)
  };
}

export default connect(mapStateToProps, { fetchAll })(DashboardPage);
