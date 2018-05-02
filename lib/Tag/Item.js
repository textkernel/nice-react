import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Label from './Label';
import Badge from './Badge';
import Button from './Button';

const Item = ({ children, className, context, onClick, ...rest }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <div 
            className={classnames('nice-tag', context, className)}
            onClick={handleClick}
            role="button"
            tabIndex="-1"
            { ...rest }
        >
            {children}
        </div>
    );
};


Item.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.instanceOf(Label),
        PropTypes.instanceOf(Badge),
        PropTypes.instanceOf(Button),
    ]).isRequired,
    className: PropTypes.string,
    context: PropTypes.string,
    onClick: PropTypes.func,
};


Item.defaultProps = {
    className: '',
    context: '',
    onClick: null,
};


export default Item;