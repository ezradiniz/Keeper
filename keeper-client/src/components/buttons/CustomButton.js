import React from 'react';
import PropTypes from 'prop-types';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { Button } from 'react-bootstrap';

bootstrapUtils.addStyle(Button, 'note');

const CustomButton = ({ text, onClick, ...rest }) => (
  <Button
    {...rest}
    onClick={onClick}
    bsStyle='note'
    bsSize='large'
  >
    {text}
  </Button>
);

CustomButton.propTypes = {
  text : PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default CustomButton;
