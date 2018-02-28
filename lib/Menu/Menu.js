import React from 'react';
import PropTypes from 'prop-types';
import props from '../props';
import Item from './Item';
import classNames from 'classnames';

const Menu = ({ children, icons, stacked, narrow }) => (<ul className={ classNames('nice-menu', {
    'has-icons': icons,
    narrow,
    stacked
}) }>
    { children }
</ul>);

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