import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Label = ({ label, className, style, ...rest }) => (
    <div style={style} className={classnames('nice-tag-label', className)} { ...rest }>
        {label}
    </div>
);


Label.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};


Label.defaultProps = {
    className: '',
    style: {}
};


export default Label;