import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Item extends Component {
    handleClick(e) {
        const { onClick } = this.props;
        e.preventDefault();
        onClick();
    }

    render() {
        const { current, children, disabled, className, style } = this.props;

        const classes = [];
        if (current) {
            classes.push('current');
        }
        if (disabled) {
            classes.push('disabled');
        }

        const NodeType = disabled ? 'span' : 'a';

        return (
            <li
                className={classnames(classes.join(' '), className)}
                style={style}
            >
                <NodeType
                    onClick={ !disabled ? e => { this.handleClick(e); } : null }
                    href={ !disabled ? '#' : '' }
                >
                    { children }
                </NodeType>
            </li>
        );
    }
}

Item.propTypes = {
    className: PropTypes.string,
    current: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
        PropTypes.number
    ]),
    style: PropTypes.object,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
};

Item.defaultProps = {
    className: null,
    style: {},
    current: false,
    children: '',
    onClick: null,
    disabled: false
};

export default Item;
