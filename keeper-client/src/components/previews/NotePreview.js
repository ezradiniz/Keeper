import React from 'react';
import PropTypes from 'prop-types';
import { formatText } from '../../util/noteText';
import renderHTML from 'react-render-html';

const style = {
  cursor: 'pointer',
  height: '200px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

const NotePreview = ({ note, toggle }) => (
  <div style={style} onClick={() => toggle() }>
    <h5 className='text-center'>
      <strong>{formatText(note.subject, 20)}</strong>
    </h5>
    {renderHTML(note.body)}
  </div>
);

NotePreview.propTypes = {
  note: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};

export default NotePreview;
