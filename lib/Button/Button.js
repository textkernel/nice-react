import React, { Component } from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';

export default class Button extends Component {
  handleClick(e) {
    e.preventDefault();
    const { onClick } = this.props;
    if (!onClick) {
      return false;
    }
    onClick();
    return true;
  }

  render() {
    const { children, context, size } = this.props;
    const classes = ['nice-btn', context, size].filter(c => c && c.length > 0);

    return (
      <button type="button" onClick={ e => this.handleClick(e) } className={classes.join(' ')}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  context: PropTypes.oneOf(niceProps.buttonContexts),
  size: PropTypes.oneOf(niceProps.buttonSizes),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  context: 'primary',
  size: 'medium',
  children: null,
  onClick: null
};
