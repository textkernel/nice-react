import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const Gap = ({ className, style }) => (
    <li className={classnames('disabled', className)} style={style}>
        <span>&hellip;</span>
    </li>
);

Gap.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Gap.defaultProps = {
    className: null,
    style: {}
};

export default Gap;
