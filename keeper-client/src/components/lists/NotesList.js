import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatText } from '../../util/noteText';

const isArchived = note => note.isArchived === true;
const isPrivate = note => note.isPrivate === true;

const renderNotes = (notes, archive, remove) => notes.map((note, index) => (
  <div key={index} className='col-md-5 col-md-3 intro-column note-col'>
    <div className='note-content'>
      <div className='intro-content'>
        <h5>{formatText(note.subject, 20)}</h5>
        <p className='text-left'>{formatText(note.body)}</p>
      </div>
    </div>
    <div className='intro-icon'>
      <span className='glyphicon glyphicon-remove-circle btn icon' onClick={() => remove(note._id)}></span>
      {!isArchived(note) && <span className='glyphicon glyphicon-file btn icon' onClick={() => archive(note._id)}></span>}
      {!isPrivate(note) && <Link to={`/notes/public/${note._id}`} className='glyphicon glyphicon-share btn icon'></Link>}
    </div>
  </div>
));

const NotesList = ({ notes, archive, remove }) => (
  <section className='intro-section-padding'>
    <div className='container text-center'>
      <div className='row'>
        {renderNotes(notes, archive, remove)}
      </div>
    </div>
  </section>
);

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  archive: PropTypes.func
};

export default NotesList;
