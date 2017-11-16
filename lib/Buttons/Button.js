import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, context, size }) => {
    const classes = ['nice-btn', context, size].filter(c => c && c.length > 0);

    return (
        <a href="#" className={classes.join(' ')}>
            {children} 
        </a>
  );
};

Button.propTypes = {
    context: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node
};

Button.defaultProps = {
    context: '',
    size: '',
    children: null
};


export default Button;
