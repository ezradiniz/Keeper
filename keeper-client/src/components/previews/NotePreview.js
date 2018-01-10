import React from 'react';
import PropTypes from 'prop-types';
import { formatText } from '../../util/noteText';
import renderHTML from 'react-render-html';
import RichTextEditor from 'react-rte';

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
    {renderHTML(RichTextEditor.createValueFromString(note.body, 'raw').toString('html'))}
  </div>
);

NotePreview.propTypes = {
  note: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};

export default NotePreview;
