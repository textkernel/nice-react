import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Sub = ({ children, className, style }) => {
    if (!children) {
        return null;
    }

    return (
        <div className={classnames('nice-modal-sub', className)} style={style}>
            { children }
        </div>
    );
};

Sub.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
        PropTypes.number
    ]),
    style: PropTypes.object,
};

Sub.defaultProps = {
    className: null,
    children: null,
    style: {}
};

export default Sub;
