import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Item extends Component {
    static propTypes = {
        current: PropTypes.bool,
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.string,
            PropTypes.number
        ]),
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        current: false,
        children: '',
        onClick: null,
        disabled: false
    }

    handleClick(e) {
        const { onClick } = this.props;
        e.preventDefault();
        onClick();
    }

    render() {
        const { current, children, disabled } = this.props;

        const classes = [];
        if (current) {
            classes.push('current');
        }
        if (disabled) {
            classes.push('disabled');
        }

        const NodeType = disabled ? 'span' : 'a';

        return (
            <li className={ classes }>
                <NodeType onClick={ !disabled ? e => { this.handleClick(e); } : null } href={ !disabled ? '#' : '' }>
                    { children }
                </NodeType>
            </li>
        );
    }
}
