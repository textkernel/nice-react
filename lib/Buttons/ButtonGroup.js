import React from 'react';
import PropTypes from 'prop-types';
import props from '../props';

const ButtonGroup = ({ children, position, size }) => {
  const classes = ['nice-btn-group', position, size].filter(c => c && c.length > 0);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(props.buttonGroupSizes),
  position: PropTypes.string,
};

ButtonGroup.defaultProps = {
  size: 'small',
  children: null,
  position: 'justified' 
};

export default ButtonGroup;