import React from 'react';
import PropTypes from 'prop-types';


const Item = ({ children, href, className, style, onClick, ...rest }) => {
    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        onClick(event);
    }; 

    return (
        <li className={className} style={style} {...rest}>
            <a onClick={handleClick} href={href}>
                {children}
            </a>
        </li>
    );
};


Item.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};


Item.defaultProps = {
    className: '',
    style: {},
    onClick() {},
    href: '#',
};


export default Item;