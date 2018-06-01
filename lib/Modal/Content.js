import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Content = ({ children, padding, className, style }) => {
    const sty = {
        padding: padding !== null ? `${ padding }px` : null,
        ...style
    };

    return (
        <div 
            className={classnames('nice-modal-body', className)} 
            style={sty}
        >
            { children }
        </div>
    );
};


Content.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    padding: PropTypes.number,
    style: PropTypes.object,
};

Content.defaultProps = {
    className: null,
    children: null,
    padding: null,
    style: {}
};

export default Content;
