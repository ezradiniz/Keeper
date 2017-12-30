import React from 'react';
import {
  Button,
  ButtonToolbar,
  Glyphicon,
  OverlayTrigger
} from 'react-bootstrap';
import {
  archiveTip,
  removeTip,
  restoreTip,
  shareTip,
  updateTip
} from './NoteTooltips';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove, archive, restore, setCurrent } from '../../actions/note';
import { LinkContainer } from 'react-router-bootstrap';
import confirm from '../dialogs/index';

const style = {
  position: 'absolute',
  bottom: 0,
  right: 0,
};

class NoteTool extends React.Component {

  onRemove = () => {
    confirm('Are you sure to remove this note ?').then(
      (result) => {
        this.props.removeAction(this.props.note._id).then(() => {
          this.props.message('Note has been removed', { type: 'success' });
        });
      },
      (result) => {
        this.props.message('Note has not been removed', { type: 'info' });
      }
    );
  };

  onArchive = () => this.props.archiveAction({ ...this.props.note, isArchived: true }).then(() => {
    this.props.message('Note has been archived', { type: 'success' });
  });

  onRestore = () => this.props.restoreAction({ ...this.props.note, isArchived: false }).then(() => {
    this.props.message('Note has been restored', { type: 'success' });
  });


  render() {
    const { note, remove, share, archive, update, restore } = this.props;

    return (
      <ButtonToolbar style={style}>
        {share && note.isPrivate === false &&
          <OverlayTrigger placement='bottom' overlay={shareTip}>
            <LinkContainer to={`/notes/public/${note._id}`}>
              <Button bsStyle='link'><Glyphicon glyph='share-alt note-icon' /></Button>
            </LinkContainer>
          </OverlayTrigger>
        }
        {restore &&
            <OverlayTrigger placement='bottom' overlay={restoreTip}>
              <Button bsStyle='link' onClick={this.onRestore}>
                <Glyphicon glyph='folder-open note-icon' />
              </Button>
            </OverlayTrigger>
        }
        {archive &&
            <OverlayTrigger placement='bottom' overlay={archiveTip}>
              <Button bsStyle='link' onClick={this.onArchive}>
                <Glyphicon glyph='folder-close note-icon' />
              </Button>
            </OverlayTrigger>
        }
        {update &&
            <OverlayTrigger placement='bottom' overlay={updateTip}>
              <Button bsStyle='link' onClick={() => this.props.currentAction(note)}>
                <Glyphicon glyph='edit note-icon' />
            </Button>
            </OverlayTrigger>
        }
        {remove &&
            <OverlayTrigger placement='bottom' overlay={removeTip}>
              <Button bsStyle='link' onClick={this.onRemove}>
                <Glyphicon glyph='minus-sign note-icon' />
              </Button>
            </OverlayTrigger>
        }
      </ButtonToolbar>
    );
  }
}

NoteTool.propTypes = {
  note: PropTypes.object.isRequired,
  remove: PropTypes.bool,
  share: PropTypes.bool,
  archive: PropTypes.bool,
  restore: PropTypes.bool,
  update: PropTypes.bool,
  removeAction: PropTypes.func.isRequired,
  archiveAction: PropTypes.func.isRequired,
  restoreAction: PropTypes.func.isRequired,
  currentAction: PropTypes.func.isRequired
};

export default connect(null, {
  removeAction: remove,
  archiveAction: archive,
  restoreAction: restore,
  currentAction: setCurrent
})(NoteTool);
