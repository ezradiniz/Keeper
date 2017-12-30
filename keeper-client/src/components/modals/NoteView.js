import React from 'react';
import {
  Button,
  Glyphicon
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

const style = {
  position: 'absolute',
  top: 0,
  right: 0,
};

const NoteView = ({ note, toggle }) => (
  <div className='note-view'>
    <Button style={style}bsStyle='link' onClick={toggle}>
      <Glyphicon glyph='remove note-icon'/>
    </Button>
    <h5 className='text-center'>
      <strong>{note.subject}</strong>
    </h5>
    {renderHTML(note.body)}
  </div>
);

NoteView.propTypes = {
  note: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};

export default NoteView;
