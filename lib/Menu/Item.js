import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Item = ({ children, className, style, current, onClick, label, href, target, disabled }) => (
    <li
        className={ classNames({
            disabled,
            current
        }) }
    >
        <a 
            href={ href }
            onClick={ onClick }
            target={ target }
            className={ className }
            style={ style }
        >
            { label }
        </a>
        {
            children ?
            <ul>
                { children }
            </ul> : null
        }
    </li>
);

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
    className: PropTypes.string,
    style: PropTypes.object,
};

Item.defaultProps = {
    children: null,
    current: false,
    onClick: null,
    label: '',
    href: '#',
    target: null,
    disabled: false,
    className: null,
    style: {}
};

export default Item;
