import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ModalFooter extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.string,
            PropTypes.number
        ])
    }

    static defaultProps = {
        children: null
    }

    render() {
        const { children } = this.props;

        if (!children) {
            return null;
        }

        return (
            <div className="nice-modal-footer">
                { children }
            </div>
        );
    }
}
