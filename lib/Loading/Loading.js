import React from 'react';
import PropTypes from 'prop-types';
import props from '../props';

const Loading = ({ size, context }) => (
    <div className={`nice-loading ${size} ${context}`} />
);

Loading.propTypes = {
    size: PropTypes.oneOf(props.sizes),
    context: PropTypes.oneOf(props.contexts)
};

Loading.defaultProps = {
    size: 'small',
    context: 'brand'
};

export default Loading;
