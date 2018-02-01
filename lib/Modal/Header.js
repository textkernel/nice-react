import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ModalHeader extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        onClose: PropTypes.func
    }

    static defaultProps = {
        children: null,
        onClose: null
    }

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
