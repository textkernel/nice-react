import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Footer = ({ children, className, style }) => {
    if (!children) {
        return null;
    }

    return (
        <div className={classnames('nice-modal-footer', className)} style={style}>
            { children }
        </div>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
        PropTypes.number
    ]),
    style: PropTypes.object
};

Footer.defaultProps = {
    className: null,
    children: null,
    style: {}
};

export default Footer;
