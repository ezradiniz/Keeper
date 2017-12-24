import React from 'react';
import PropTypes from 'prop-types';
import { formatText } from '../../util/noteText';

const NotePreview = ({ note, toggle }) => (
  <div className='note-content' onClick={() => toggle()}>
    <div className='intro-content'>
      <h5>{formatText(note.subject, 20)}</h5>
      <p className='text-left'>{formatText(note.body, 90)}</p>
    </div>
  </div>
);

NotePreview.propTypes = {
  note: PropTypes.shape({}).isRequired,
  toggle: PropTypes.func.isRequired
};

export default NotePreview;
