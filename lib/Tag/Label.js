import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Label = ({ children, className, ...rest }) => (
    <div className={classnames('nice-tag-label', className)} { ...rest }>
        {children}
    </div>
);


Label.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    className: PropTypes.string,
};


Label.defaultProps = {
    className: '',
};


export default Label;