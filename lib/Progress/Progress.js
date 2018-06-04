import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import niceProps from '../props';

const Progress = ({ percentage, message, context, className, style }) => {
    const label = message !== '' ? message : `${percentage}%`;

    return (
        <div className={classnames('nice-progress', context, className)} style={style}>
            <div className="nice-progress-fill" style={{ width: `${percentage}%` }} >
                {label}
            </div>
        </div>
    );
};

Progress.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    percentage: PropTypes.number.isRequired,
    message: PropTypes.string,
    context: PropTypes.oneOf(niceProps.contexts)
};

Progress.defaultProps = {
    className: null,
    style: {},
    message: '',
    context: 'primary'
};

export default Progress;
