import React from 'react';
import {
  Alert,
  Col,
  Grid,
  Row
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import fetchAll from '../../actions/log';
import { allLogsSelector } from '../../reducers/log'

class LogPage extends React.Component {

  componentDidMount() {
    if (!this.props.request) {
      this.props.fetchAll();
    }
  }

  render() {
    const { logs, request } = this.props;

    return (
      <Loader loaded={request}>
        <Grid>
          <Row className='show-grid'>
            <Col className='text-center'>
              <h3 className='text-center'>Your Logs</h3>
              <hr/>
            </Col>
          </Row>
          {
            logs.map(log =>
              <Row key={log._id} className='show-grid'>
                <Col xs={8} xsOffset={2}>
                  <Alert  bsStyle='info'>
                    <p className='text-center'>
                      <strong>{log.type}</strong> {log.message}
                    </p>
                  </Alert>
                </Col>
              </Row>
            )
          }
        </Grid>
      </Loader>
    );
  }
}

LogPage.defaultProps = {
  request: false
};

LogPage.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchAll : PropTypes.func.isRequired,
  request: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    logs: allLogsSelector(state),
    request: !!state.log.request
  };
}

export default connect(mapStateToProps, { fetchAll })(LogPage);
