import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Dropdown = ({ children, className, ...rest }) => (
    <div className={classnames('nice-tag-dropdown hover', className)} {...rest}>
        {children}
    </div>
);


Dropdown.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};


Dropdown.defaultProps = {
    className: '',
};


export default Dropdown;