import React from 'react';
import PropTypes from 'prop-types';
import props from '../props';
import Item from './Item';

const Menu = ({ children, icons, stacked, narrow }) => {
    const classes = ['nice-menu'];
    if (icons) {
        classes.push('has-icons');
    }
    if (stacked) {
        classes.push('stacked');
    }
    if (narrow) {
        classes.push('narrow');
    }

    return (<ul className={ classes.join(' ') }>
        { children }
    </ul>);
};

Menu.Item = Item;

Menu.propTypes = {
    children: PropTypes.node,
    icons: PropTypes.bool,
    stacked: PropTypes.bool,
    narrow: PropTypes.bool
};

Menu.defaultProps = {
    children: null,
    icons: false,
    stacked: false,
    narrow: false
};

export default Menu;