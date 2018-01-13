import React from 'react';
import PropTypes from 'prop-types';
import { confirmable } from 'react-confirm';
import { Modal } from 'react-bootstrap';

const ConfirmationDialog = ({ show, proceed, cancel, confirmation }) => (
  <div className='static-modal'>
    {show &&
        <Modal.Dialog>
          <Modal.Body>{confirmation}</Modal.Body>
          <Modal.Footer>
            <button className='btn btn-note' onClick={() => proceed('proceed')}>Yes</button>
            <button className='btn btn-note' onClick={() => cancel('cancel')}>No</button>
          </Modal.Footer>
        </Modal.Dialog>
    }
  </div>
);

ConfirmationDialog.propTypes = {
  show: PropTypes.bool.isRequired,            // from confirmable. indicates if the dialog is shown or not.
  proceed: PropTypes.func.isRequired,         // from confirmable. call to close the dialog with promise resolved.
  cancel: PropTypes.func.isRequired,          // from confirmable. call to close the dialog with promise rejected.
  confirmation: PropTypes.string.isRequired,  // arguments of your confirm function
};

export default confirmable(ConfirmationDialog);
