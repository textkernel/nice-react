import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Menu = ({ children, alternate, level }) => {
    const classes = ['nice-header-menu'];

    if (alternate) {
        classes.push('menu-alt');
    }

    return (<ul className={ classes.join(' ') }>
        { React.Children.map(children, child => (
            React.cloneElement(child, { level })
        )) }
    </ul>);
};

Menu.propTypes = {
    alternate: PropTypes.bool,
    level: PropTypes.number
};

Menu.defaultProps = {
    alternate: false,
    level: 0
};

Menu.Item = Item;

export default Menu;
