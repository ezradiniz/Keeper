import React from 'react';
import PropTypes from 'prop-types';
import { confirmable } from 'react-confirm';
import { Modal } from 'react-bootstrap';

const ConfirmationDialog = ({ show, proceed, dismiss, cancel, confirmation, options }) => (
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
  show: PropTypes.bool,            // from confirmable. indicates if the dialog is shown or not.
  proceed: PropTypes.func,         // from confirmable. call to close the dialog with promise resolved.
  cancel: PropTypes.func,          // from confirmable. call to close the dialog with promise rejected.
  dismiss: PropTypes.func,         // from confirmable. call to only close the dialog.
  confirmation: PropTypes.string,  // arguments of your confirm function
  options: PropTypes.object        // arguments of your confirm function
};

export default confirmable(ConfirmationDialog);
