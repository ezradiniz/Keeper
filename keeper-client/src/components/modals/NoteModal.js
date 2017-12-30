import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import NoteTool from '../tools/NoteTool';
import NotePreview from '../previews/NotePreview';
import NoteView from './NoteView';

const customStyles = {
  overlay : {
    backgroundColor: 'rgba(0, 0, 0, 0.60)'
  },
  content : {
    top: '35%',
    left: '50%',
    maxWidth: '550px',
    transform: 'translate(-50%, -35%)',
    backgroundColor: '#ffef97'
  }
};

class NoteModal extends React.Component {

  state = {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { note } = this.props;

    return (
      <section>
        <NotePreview note={note} toggle={this.toggle} />
        <NoteTool {...this.props} />
        <Modal
          isOpen={this.state.isOpen}
          style={customStyles}
          contentLabel='Note Modal'
        >
          <NoteView note={note} toggle={this.toggle} />
        </Modal>
      </section>
    );
  }
}

NoteModal.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteModal;
