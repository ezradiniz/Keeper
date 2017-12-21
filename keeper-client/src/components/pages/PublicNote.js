import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import { fetchPublic } from '../../actions/note';

class PublicNote extends React.Component {

  state = {
    loaded: false
  };

  componentDidMount() {
    this.props
      .fetchPublic(this.props.match.params.note)
      .then(note => this.setState({ note, loaded: true }))
      .catch(() => this.setState({ loaded: true }));
  }

  render() {
    const { note, loaded } = this.state;

    return (
      <Loader loaded={loaded}>
        <div>
          <div className='container bootstrap snippet'>
            {note && <div className='row'>
              <ul className='notes'>
                <li>
                  <h5>Nickname: {note.nickname}</h5>
                  <div className='lazur-bg'>
                    <small>{note.updatedAt}</small>
                    <h4>{note.subject}</h4>
                    <p>{note.body}</p>
                  </div>
                </li>
              </ul>
            </div>}
            {!note && <div className='alert alert-danger'>
              <p className='text-center'>Note not found</p>
            </div>}
          </div>
        </div>
      </Loader>
    );
  }
}

PublicNote.propTypes = {
  fetchPublic: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      note: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default connect(null, { fetchPublic })(PublicNote);
