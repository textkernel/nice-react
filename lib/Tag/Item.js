import React from 'react';
import PropTypes from 'prop-types';


const Item = ({ children, href, className, style }) => (
    <li className={className} style={style}>
        <a href={href}>
            {children}
        </a>
    </li>
);


Item.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};


Item.defaultProps = {
    className: '',
    style: {},
    href: '#',
};


export default Item;