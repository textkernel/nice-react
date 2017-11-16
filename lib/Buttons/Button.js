import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    handleClick() {
        this.props.onClick();
        return false;
    }

    render() {
        const { children, context, size } = this.props;
        const classes = ['nice-btn', context, size].filter(c => c && c.length > 0);

        return (
            <a href="#" onClick={(e) => { this.handleClick.apply(this, e)}} className={classes.join(' ')}>
                {children}
            </a>
        );
    }
}

Button.propTypes = {
    context: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    context: '',
    size: '',
    children: null
};