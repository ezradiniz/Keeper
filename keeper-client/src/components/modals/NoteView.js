import React from 'react';
import PropTypes from 'prop-types';

const style1 = {
  position: 'absolute',
  fontSize: '10px',
  bottom: '1px',
  right: '5px',
  fontWeight: 'bold'
};

const style2 = {
  position: 'absolute',
  fontSize: '10px',
  bottom: '1px',
  left: '5px',
  fontWeight: 'bold'
};

const NoteView = ({ note, toggle }) => (
  <div className='note'>
    <span className='glyphicon glyphicon-remove-circle btn quit' onClick={toggle}></span>
    <br/>
    <div className='intro-content note-preview'>
      <h5>{note.subject}</h5>
      <p className='text-left'>{note.body}</p>
      <p style={style1}> {note.updatedAt}</p>
      <p style={style2}>
        {(note.nickname) ? `Author: ${note.nickname}` : ''}
      </p>
    </div>
  </div>
);

NoteView.propTypes = {
  note: PropTypes.shape({}).isRequired,
  toggle: PropTypes.func.isRequired
};

export default NoteView;
