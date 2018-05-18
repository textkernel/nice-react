import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import props from '../props';

const ButtonGroup = ({ children, className, justified, stacked, style, size, pullRight }) => (
    <div
        className={ classNames('nice-btn-group', {
            className,
            justified,
            stacked,
            [size]: size,
            'pull-right': pullRight
        }) }
        style={ style }
    >
        { children }
    </div>
);

ButtonGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(props.buttonGroupSizes),
    style: PropTypes.object,
    justified: PropTypes.bool,
    stacked: PropTypes.bool,
    pullRight: PropTypes.bool
};

ButtonGroup.defaultProps = {
    size: null,
    children: null,
    className: '',
    justified: false,
    stacked: false,
    style: null,
    pullRight: false
};

export default ButtonGroup;
