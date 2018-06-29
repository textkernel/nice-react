import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Item from './Item';

const Badge = ({ children, label, className, style, onClick, ...rest }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        onClick(event);
    };

    return (
        <div 
            className={classnames('nice-tag-badge', className)}
            style={style}
            onClick={handleClick}
            role="button"
            tabIndex="-1"
            { ...rest }
        >
            
            { label }

            {
                children &&
                    <div className="nice-tag-dropdown hover">
                        <ul>
                            {children}
                        </ul>
                    </div>
            }

        </div>
    );
};

Badge.Item = Item;


Badge.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};


Badge.defaultProps = {
    className: '',
    style: {},
    onClick() {},
    children: null
};


export default Badge;