import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import props from '../props';

const Loading = ({ size, context, hidden }) => (
    <div className={ classNames('nice-loading', size, context, {
        hidden
    }) } />
);

Loading.propTypes = {
    size: PropTypes.oneOf(props.sizes),
    context: PropTypes.oneOf(props.contexts),
    hidden: PropTypes.bool
};

Loading.defaultProps = {
    size: 'small',
    context: 'brand',
    hidden: false
};

export default Loading;
