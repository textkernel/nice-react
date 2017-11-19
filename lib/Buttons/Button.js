import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    handleClick(e) {
        e.preventDefault();
        this.props.onClick();
    }

    render() {
        const { children, context, size } = this.props;
        const classes = ['nice-btn', context, size].filter(c => c && c.length > 0);

        return (
            <a href="#" onClick={this.handleClick.bind(this)} className={classes.join(' ')}>
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