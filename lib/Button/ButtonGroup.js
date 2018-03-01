import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import props from '../props';

const ButtonGroup = ({ children, justified, stacked, size, pullRight }) => (
    <div
        className={ classNames('nice-btn-group', {
            justified,
            stacked,
            [size]: size,
            'pull-right': pullRight
        }) }
    >
        { children }
    </div>
);

ButtonGroup.propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(props.buttonGroupSizes),
    justified: PropTypes.bool,
    stacked: PropTypes.bool,
    pullRight: PropTypes.bool
};

ButtonGroup.defaultProps = {
    size: null,
    children: null,
    justified: false,
    stacked: false,
    pullRight: false
};

export default ButtonGroup;
