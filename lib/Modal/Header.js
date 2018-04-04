import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalHeader extends Component {
    renderCloseBtn() {
        const { onClose } = this.props;

        if (!onClose) {
            return null;
        }
        return (
            <a href="#" className="nice-modal-close" onClick={ e => {
                e.preventDefault();
                onClose();
            }}>
                <i className="icon fa-times" />
            </a>
        );
    }

    render() {
        const { children } = this.props;

        if (!children) {
            return null;
        }

        return (
            <div className="nice-modal-header">
                { this.renderCloseBtn() }
                <h4>
                    { children }
                </h4>
            </div>
        );
    }
}

ModalHeader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onClose: PropTypes.func
};

ModalHeader.defaultProps = {
    children: null,
    onClose: null
};

export default ModalHeader;
