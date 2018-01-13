import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import RichTextEditor from 'react-rte';
import formatText from '../../util/noteText';

const style = {
  cursor: 'pointer',
  height: '200px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

const NotePreview = ({ note, toggle }) => (
  <div role="presentation" style={style} onClick={() => toggle() }>
    <h5 className='text-center'>
      <strong>{formatText(note.subject, 20)}</strong>
    </h5>
    {renderHTML(RichTextEditor.createValueFromString(note.body, 'raw').toString('html'))}
  </div>
);

NotePreview.propTypes = {
  note: PropTypes.shape({}).isRequired,
  toggle: PropTypes.func.isRequired
};

export default NotePreview;
