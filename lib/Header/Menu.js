import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import classNames from 'classnames';

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
    alternate: PropTypes.bool,
    level: PropTypes.number
};

Menu.defaultProps = {
    alternate: false,
    level: 0
};

Menu.Item = Item;

export default Menu;
