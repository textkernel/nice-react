import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Item from './Item';

const Menu = ({ children, alternate, level }) => (
    <ul className={ classNames('nice-header-menu', {
        'menu-alt': alternate
    }) }>
        { React.Children.map(children, child => (
            React.cloneElement(child, { level })
        )) }
    </ul>
);

Menu.propTypes = {
    children: PropTypes.node,
    alternate: PropTypes.bool,
    level: PropTypes.number
};

Menu.defaultProps = {
    children: null,
    alternate: false,
    level: 0
};

Menu.Item = Item;

export default Menu;
