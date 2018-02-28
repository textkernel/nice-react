import React from 'react';
import PropTypes from 'prop-types';
import props from '../props';

const Item = ({ children, className, context, label, level, href, target, width }) => {
    const classes = [];

    if (children && level) {
        classes.push('has-children');
    }
    if (context) {
        classes.push('highlight', context);
    }
    if (width) {
        classes.push('fixed-width', `w${ width }`);
    }

    return (<li className={ classes.join(' ') || null }>
        <a href={ href } target={ target } className={ className }>
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
    href: '#',
    target: null,
    width: null
};

export default Item;
