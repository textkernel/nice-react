import React, { Component } from 'react';
import PropTypes from 'prop-types';
import props from '../props';

export default class Button extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const { children, icon, alternative } = this.props;
    const iconClass = icon ? `icon ${icon}` : null;

    const regularButton = () => {
      const { context, size } = this.props;
      const baseClass = 'nice-btn';
      return [baseClass, context, size, iconClass];
    };

    const alternativeButton = () => {
      const baseClass = 'nice-btn-alt';
      return [baseClass, iconClass];
    };

    const butonClasses = alternative ? alternativeButton : regularButton;
    const classes = butonClasses().filter(c => c && c.length > 0);

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
  onClick: PropTypes.func,
  icon: PropTypes.string,
  alternative: PropTypes.bool
};

Button.defaultProps = {
  context: 'default',
  size: 'medium',
  children: null,
  onClick: null,
  icon: null,
  alternative: false
};