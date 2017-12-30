import React from 'react';
import PropTypes from 'prop-types';
import AlertContainer from 'react-alert';

class Alert extends React.Component {

  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  };

  render() {
    return (
      <div>
         <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </div>
    );
  }
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  onAlert: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default Alert;
