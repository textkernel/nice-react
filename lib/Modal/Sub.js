import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ModalSub extends Component {
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
            <div className="nice-modal-sub">
                { children }
            </div>
        );
    }
}
