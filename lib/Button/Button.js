import React, { Component } from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';

class Button extends Component {
    handleClick(e) {
        if (e && 'preventDefault' in e) {
            e.preventDefault();
        }
        const { onClick } = this.props;
        if (!onClick) {
            return false;
        }
        onClick();
        return true;
    }

    render() {
        const { children, icon, alternative, href, pullRight, submit } = this.props;
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

        const elementProperties = {
            onClick: (e) => this.handleClick(e),
            className: classes.join(' '),
            href
        };
        if (NodeTag === 'button' && submit) {
            elementProperties.type = 'submit';
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
    size: PropTypes.oneOf(niceProps.buttonSizes),
    children: PropTypes.node,
    href: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    alternative: PropTypes.bool,
    pullRight: PropTypes.bool,
    submit: PropTypes.bool
};

Button.defaultProps = {
    context: 'default',
    size: 'medium',
    children: null,
    href: null,
    onClick: null,
    icon: null,
    alternative: false,
    pullRight: false,
    submit: false
};

export default Button;
