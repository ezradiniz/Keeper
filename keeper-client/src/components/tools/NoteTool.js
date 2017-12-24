import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove, archive, unarchive } from '../../actions/note';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  bottom: 0,
  right: 0
};

class NoteTool extends React.Component {

  onRemove = () => this.props.removeAction(this.props.note._id);

  onArchive = () => this.props.archiveAction({ ...this.props.note, isArchived: true });

  onUnarchive = () => this.props.unarchiveAction({ ...this.props.note, isArchived: false });

  render() {
    const { note, remove, share, archive, update, unarchive } = this.props;

    return (
      <div className='nav navbar-nav tool' style={style}>
        {share && note.isPrivate === false &&
          <Link to={`/notes/public/${note._id}`}>
            <span className='glyphicon glyphicon-share-alt'></span>
          </Link>
        }
        {remove &&
            <a onClick={this.onRemove}>
              <span className='glyphicon glyphicon-minus-sign'></span>
            </a>
        }
        {archive &&
            <a onClick={this.onArchive}>
              <span className='glyphicon glyphicon-folder-close'></span>
            </a>
        }
        {unarchive &&
            <a onClick={this.onUnarchive}>
              <span className='glyphicon glyphicon-folder-open'></span>
            </a>
        }
        {update &&
          <Link to={`/note/${note._id}`}>
            <span className='glyphicon glyphicon-edit'></span>
          </Link>
        }
      </div>
    );
  }
}

NoteTool.propTypes = {
  note: PropTypes.shape({}).isRequired,
  remove: PropTypes.bool,
  share: PropTypes.bool,
  archive: PropTypes.bool,
  unarchive: PropTypes.bool,
  update: PropTypes.bool,
  removeAction: PropTypes.func.isRequired,
  archiveAction: PropTypes.func.isRequired,
  unarchiveAction: PropTypes.func.isRequired
};

export default connect(null, {
  removeAction: remove,
  archiveAction: archive,
  unarchiveAction: unarchive
})(NoteTool);
