import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    children: PropTypes.node.isRequired,
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