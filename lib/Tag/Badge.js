import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Dropdown from './Dropdown';


const Badge = ({ children, label, className, onClick, ...rest }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <div 
            className={classnames('nice-tag-badge', className)} 
            onClick={handleClick}
            role="button"
            tabIndex="-1"
            { ...rest }
        >
            { label }
            {children}
        </div>
    );
};


Badge.Dropdown = Dropdown;


Badge.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};


Badge.defaultProps = {
    className: '',
    onClick: null,
    children: null
};


export default Badge;