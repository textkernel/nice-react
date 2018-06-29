import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Item from './Item';
import './Menu.scss';

const Menu = ({ className, style, children, icons, stacked, narrow }) => (
    <ul
        className={ classnames('nice-menu', className, {
            'has-icons': icons,
            narrow,
            stacked
        }) }
        style={style}
    >
        { children }
    </ul>
);

Menu.Item = Item;

Menu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    icons: PropTypes.bool,
    stacked: PropTypes.bool,
    style: PropTypes.object,
    narrow: PropTypes.bool
};

Menu.defaultProps = {
    className: null,
    children: null,
    icons: false,
    stacked: false,
    style: {},
    narrow: false
};

export default Menu;
