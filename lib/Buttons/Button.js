import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, ncStyle, ncSize }) => {
    const classes = ['nice-btn', ncStyle, ncSize].filter(c => c && c.length > 0);

    return (
        <a href="#" className={classes.join(' ')}>
            {children} 
        </a>
  );
};

Button.propTypes = {
    ncStyle: PropTypes.string,
    ncSize: PropTypes.string,
    children: PropTypes.node
};

Button.defaultProps = {
    ncStyle: '',
    ncSize: '',
    children: null
};


export default Button;