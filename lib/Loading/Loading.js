import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import props from '../props';

const Loading = ({ className, context, hidden, size, style }) => (
    <div
        className={ classNames('nice-loading', size, context, className, {
            hidden
        }) }
        style={ style }
    />
);

Loading.propTypes = {
    className: PropTypes.string,
    context: PropTypes.oneOf(props.contexts),
    hidden: PropTypes.bool,
    size: PropTypes.oneOf(props.sizes),
    style: PropTypes.object
};

Loading.defaultProps = {
    className: '',
    context: 'brand',
    hidden: false,
    size: 'small',
    style: null
};

export default Loading;
