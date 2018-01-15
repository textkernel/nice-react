import React, { Component } from 'react';
import PropTypes from 'prop-types';
import props from '../props';

export default class Button extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const { children, context, size } = this.props;
    const classes = ['nice-btn', context, size].filter(c => c && c.length > 0);

    return (
      <a href='#' onClick={e => this.handleClick(e)} className={classes.join(' ')}>
        {children}
      </a>
    );
  }
}

Button.propTypes = {
  context: PropTypes.oneOf(props.buttonContexts),
  size: PropTypes.oneOf(props.buttonSizes),
  children: PropTypes.node,
  onClick: PropTypes.func
};

Button.defaultProps = {
  context: 'default',
  size: 'medium',
  children: null,
  onClick: null
};