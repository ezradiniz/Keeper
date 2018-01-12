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
import { fetchAll } from '../../actions/log';
import { allLogsSelector, logsLoaderSelector } from '../../reducers/log'

class LogPage extends React.Component {

  componentDidMount() {
    if (this.props.logs.length === 0) {
      this.props.fetchAll().then(() => this.setState({ loaded: true }));
    }
  }

  render() {
    const { logs, loaded } = this.props;

    return (
      <Loader loaded={loaded}>
        <Grid>
          <Row className='show-grid'>
            <Col className='text-center'>
              <h3 className='text-center'>Your Logs</h3>
              <hr/>
            </Col>
          </Row>
          {
            logs.map((log, index) =>
              <Row key={index} className='show-grid'>
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

LogPage.propTypes = {
  logs: PropTypes.array.isRequired,
  fetchAll : PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    logs: allLogsSelector(state),
    loaded: logsLoaderSelector(state)
  };
}

export default connect(mapStateToProps, { fetchAll })(LogPage);
