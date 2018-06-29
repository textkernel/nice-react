import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Item from './Item';


const Menu = ({ className, style, children, alternate, level }) => (
    <ul 
        style={style}
        className={ classnames('nice-header-menu', className, {
            'menu-alt': alternate
        })}
    >
        { React.Children.map(children, child => (
            React.cloneElement(child, { level })
        )) }
    </ul>
);


Menu.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    alternate: PropTypes.bool,
    level: PropTypes.number
};


Menu.defaultProps = {
    className: null,
    style: {},
    children: null,
    alternate: false,
    level: 0
};


Menu.Item = Item;


export default Menu;
