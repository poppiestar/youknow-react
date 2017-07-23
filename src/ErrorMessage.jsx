// @flow

import React from 'react';
import type { Element } from 'react';

type ErrorMessagePropTypes = {
  message: string
};

const ErrorMessage = ({ message }: ErrorMessagePropTypes): Element<any> =>
  <p className="error">{message}</p>;

export default ErrorMessage;
