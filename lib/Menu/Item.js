import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Item = ({ children, className, current, onClick, label, href, target, disabled, icon }) => (<li className={ classNames({
    disabled,
    current
}) }>
    <a href={ href } onClick={ onClick } target={ target } className={ className }>
        { label }
    </a>
    {
        children ?
        <ul>
            { children }
        </ul> : null
    }
</li>);

Item.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.array
    ]),
    current: PropTypes.bool,
    onClick: PropTypes.func,
    label: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

Item.defaultProps = {
    children: null,
    current: false,
    onClick: null,
    label: '',
    href: '#',
    target: null,
    disabled: false,
    className: null 
};

export default Item;
