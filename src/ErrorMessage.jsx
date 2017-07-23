
import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) =>
  message && <p className="error">{message}</p>;

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
