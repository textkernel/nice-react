import React, { Component } from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';

class Button extends Component {
    handleClick(e) {
        const { onClick } = this.props;
        if (!onClick) {
            return false;
        }
        onClick(e);
        return true;
    }

    render() {
        const {
            children, className, disabled, icon, alternative, href, pullRight, style, submit
        } = this.props;

        const iconClass = icon ? `icon ${ icon }` : null;

        const NodeTag = href ? 'a' : 'button';

        const regularButton = () => {
            const { context, size } = this.props;
            return ['nice-btn', context, size, iconClass];
        };

        const alternativeButton = () => (
            ['nice-btn-alt', iconClass]
        );

        const buttonClasses = alternative ? alternativeButton : regularButton;
        const classes = buttonClasses().filter(c => c && c.length > 0);

        if (pullRight) {
            classes.push('pull-right');
        }

        if (disabled) {
            classes.push('disabled');
        }

        const elementProperties = {
            onClick: (e) => this.handleClick(e),
            className: classes.concat(className.split(' ')).join(' '),
            href,
            disabled,
            style
        };

        if (NodeTag === 'button') {
            elementProperties.type = submit ? 'submit' : 'button';

            if ('href' in elementProperties) {
                delete elementProperties.href;
            }
        }

        return (
            <NodeTag { ...elementProperties }>
                { children }
            </NodeTag>
        );
    }
}

Button.propTypes = {
    context: PropTypes.oneOf(niceProps.buttonContexts),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(niceProps.buttonSizes),
    children: PropTypes.node,
    href: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    alternative: PropTypes.bool,
    pullRight: PropTypes.bool,
    style: PropTypes.object,
    submit: PropTypes.bool
};

Button.defaultProps = {
    context: 'default',
    className: '',
    disabled: false,
    size: 'medium',
    children: null,
    href: null,
    onClick: null,
    icon: null,
    alternative: false,
    pullRight: false,
    style: null,
    submit: false
};

export default Button;
