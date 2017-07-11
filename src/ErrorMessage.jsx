
import React, { Component } from 'react';

class ErrorMessage extends Component {
    render () {
        if (this.props.message) {
            return (
                <p className="error">{this.props.message}</p>
            );
        } else {
            return null;
        }
    }
}

export default ErrorMessage;
