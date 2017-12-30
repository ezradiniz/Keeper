import { createConfirmation } from 'react-confirm';
import ConfirmationDialog from './ConfirmationDialog';

const confirm = createConfirmation(ConfirmationDialog);

export default function(confirmation, options = {}) {
  return confirm({ confirmation, options });
}
