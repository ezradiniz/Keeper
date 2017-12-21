import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const rotates = [
  'rotate-1',
  'rotate-2'
];

const renderNotes = notes => notes.map((note, key) => (
  <li key={key}>
    <div className={`${rotates[key % rotates.length]} lazur-bg`}>
      <small>{note.updatedAt}</small>
      <h4>{note.subject}</h4>
      <p>{note.body}</p>
      {!note.isPrivate && <Link to={`/notes/public/${note._id}`}>Shared</Link>}
    </div>
  </li>
));

const NotesList = ({ notes }) => (
  <div className='container bootstrap snippet'>
    <div className='row'>
      <ul className='notes'>
        {renderNotes(notes)}
      </ul>
    </div>
  </div>
);

NotesList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default NotesList;
