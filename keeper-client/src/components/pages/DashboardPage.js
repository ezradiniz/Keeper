import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from 'react-loader';
import NoteSection from '../sections/NoteSection';
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
    const { notes } = this.props;

    return (
      <div className='container'>
        <div className='text-center'>
          <Link to='/notes/new' className='btn btn-info btn-lg'><span className='glyphicon glyphicon-plus'> Note</span></Link>
        </div>
        <hr/>
        <Loader loaded={this.state.loaded}>
          <NoteSection
            notes={notes}
            share
            remove
            archive
            update
          />
        </Loader>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  fetchAll: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired
};


function mapStateToProps(state) {
  return {
    notes: allNotesSelector(state)
  };
}

export default connect(mapStateToProps, { fetchAll })(DashboardPage);
