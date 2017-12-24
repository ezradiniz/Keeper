import React from 'react';
import PropTypes from 'prop-types';
import NoteModal from '../modals/NoteModal';

const NoteSection = ({ notes, ...rest }) => (
  <section className='row'>
    {notes.map((note, index) =>
      <div className='col-md-5 col-md-3  note-col' key={index}>
        <NoteModal note={note} {...rest} />
      </div>
    )}
  </section>
);

NoteSection.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteSection;
