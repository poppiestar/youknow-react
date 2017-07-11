
import React from 'react';

class ErrorMessage extends React.Component {
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

