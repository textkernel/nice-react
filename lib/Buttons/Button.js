import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, style, size }) => {
    const classes = ['nice-btn'];
    classes.push(...[ size, style ]);

    return (
        <a href="#" className={classes.join(' ').trim()}>
            {children} 
        </a>
  );
};

Button.propTypes = {
    style: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.node
};

Button.defaultProps = {
    style: '',
    size: '',
    children: null
};


export default Button;