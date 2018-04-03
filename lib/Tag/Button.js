import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({ icon, className, onClick, ...rest }) => {
    const handleClick = (event) => {
        event.stopPropagation();

        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button
            className={classnames('nice-tag-btn', className)}
            onClick={handleClick}
            {...rest}
        >
            <i className={`icon ${icon}`} />
        </button>
    );
};


Button.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};


Button.defaultProps = {
    className: '',
    onClick: null,
};


export default Button;