import React from 'react';
import PropTypes from 'prop-types';
import props from '../props';
import classNames from 'classnames';

const Item = ({ children, className, context, label, level, onClick, href, target, width }) => {
    const classes = [];

    return (<li className={ classNames({
        'has-children': children && level,
        highlight: context,
        [context]: context,
        'fixed-width': width,
        [`w${ width }`]: width
    }) }>
        <a href={ href } target={ target } className={ className } onClick={ e => {
            if (!onClick) {
                return true;
            }
            return onClick(e);
        }}>
            { label }
        </a>
        { 
            children
            ? <ul>
                { React.Children.map(children, child => (
                    React.cloneElement(child, { level: level + 1 })
                )) }
            </ul>
            : null
        }
    </li>);
};

Item.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.array
    ]),
    className: PropTypes.string,
    context: PropTypes.oneOf(props.headerMenuContexts),
    label: PropTypes.string,
    level: PropTypes.number,
    onClick: PropTypes.func,
    href: PropTypes.string,
    target: PropTypes.string,
    width: PropTypes.oneOf(props.headerMenuWidths)
};

Item.defaultProps = {
    children: null,
    className: null,
    context: null,
    label: '',
    level: 0,
    onClick: null,
    href: '#',
    target: null,
    width: null
};

export default Item;