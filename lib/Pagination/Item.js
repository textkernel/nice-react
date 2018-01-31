import React, { Component } from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';

export default class Item extends Component {
    static propTypes = {
        active: PropTypes.bool,
        onClick: PropTypes.func,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        active: false,
        onClick: null,
        disabled: false
    }

    handleClick(e) {
        e.preventDefault();
        onClick();
    },

    render() {

        const { size, bordered, onClick, children } = this.props;

        let classes = [];
        if (active) {
            classes.push('active');
        }
        if (disabled) {
            classes.push('disabled');
        }

        let NodeType = disabled ? 'span' : 'a';

        return (
            <li className={ classes }>
                <NodeType onClick={ !disabled ? e => { this.handleClick(e); } : null } href={ !disabled ? '#' : '' }>
                    { children }
                </NodeType>
            </li>
        );
    }
}
