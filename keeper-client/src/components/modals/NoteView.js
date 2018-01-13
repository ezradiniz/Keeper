import React from 'react';
import {
  Button,
  Glyphicon
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import RichTextEditor from 'react-rte';

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
    {renderHTML(RichTextEditor.createValueFromString(note.body, 'raw').toString('html'))}
  </div>
);

NoteView.propTypes = {
  note: PropTypes.shape({}).isRequired,
  toggle: PropTypes.func.isRequired
};

export default NoteView;
