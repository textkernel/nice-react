import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import niceProps from '../props';

const Toggle = ({
    children, className, context, disabled, offMuted, on, onChange, small
}) => (<span>
        <input
            type="checkbox"
            className={ classNames('nice-toggle', {
                [context]: context
            }) }
            disabled={ disabled }
            checked={ on }
            onChange={ (e) => {
                if (!onChange) {
                    return false;
                }
                return onChange(e.target.checked);
            }}
        />
        <label
            className={ classNames('nice-toggle-btn', {
                small,
                'off-muted': offMuted
            }, className) }
        >
            { children }
        </label>
    </span>
);

Toggle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.node
    ]),
    className: PropTypes.string,
    context: PropTypes.oneOf(niceProps.toggleContexts),
    disabled: PropTypes.bool,
    offMuted: PropTypes.bool,
    on: PropTypes.bool,
    onChange: PropTypes.func,
    small: PropTypes.bool
};

Toggle.defaultProps = {
    children: null,
    className: null,
    context: false,
    disabled: false,
    offMuted: false,
    on: false,
    onChange: null,
    small: false
};

export default Toggle;
