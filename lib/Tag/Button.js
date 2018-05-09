import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Button = ({ icon, className, style, onClick, ...rest }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        onClick(event);
    };

    return (
        <button
            className={classnames('nice-tag-btn', className)}
            style={style}
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
    style: PropTypes.object,
    onClick: PropTypes.func,
};


Button.defaultProps = {
    className: '',
    style: {},
    onClick() {},
};


export default Button;