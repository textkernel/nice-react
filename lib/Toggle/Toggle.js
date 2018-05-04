import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import niceProps from '../props';

class Toggle extends Component {
    constructor(props) {
        super(props);

        const { on } = this.props;

        this.state = {
            on
        }
    }

    componentWillReceiveProps(nextProps) {
        const { on } = nextProps;

        if (on === null) {
            return false;
        }

        this.setState({
            on
        });

        return true;
    }

    isControlled() {
        const { on } = this.props;
        return typeof(on) === typeof(true);
    }

    render() {
        const { children, className, context, disabled, id, offMuted, defaultOn, onChange, small, style } = this.props;
        const { on } = this.state;

        return (<span>
            <input
                type="checkbox"
                className={ classNames('nice-toggle', {
                    [context]: context
                }) }
                id={ id }
                disabled={ disabled }
                defaultChecked={ !this.isControlled() ? defaultOn : null }
                checked={ this.isControlled() ? on : null }
                onChange={ (e) => {
                    if (!onChange || disabled) {
                        return false;
                    }

                    const { checked } = e.target;
                    this.setState({
                        on: checked
                    });

                    return onChange(checked);
                }}
            />
            <label
                className={ classNames('nice-toggle-btn', {
                    small,
                    'off-muted': offMuted
                }, className) }
                style={ style }
                htmlFor={ id }
            >
                { children }
            </label>
        </span>);
    }
}

Toggle.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.node
    ]),
    className: PropTypes.string,
    context: PropTypes.oneOf(niceProps.toggleContexts),
    disabled: PropTypes.bool,
    offMuted: PropTypes.bool,
    defaultOn: PropTypes.bool,
    on: PropTypes.bool,
    onChange: PropTypes.func,
    small: PropTypes.bool,
    style: PropTypes.object
};

Toggle.defaultProps = {
    children: null,
    className: null,
    context: null,
    disabled: false,
    offMuted: false,
    defaultOn: false,
    on: null,
    onChange: null,
    small: false,
    style: {}
};

export default Toggle;
