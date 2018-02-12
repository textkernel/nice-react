import React, { Component } from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';

export default class Button extends Component {
    static propTypes = {
        context: PropTypes.oneOf(niceProps.buttonContexts),
        size: PropTypes.oneOf(niceProps.buttonSizes),
        children: PropTypes.node,
        href: PropTypes.string,
        onClick: PropTypes.func,
        icon: PropTypes.string,
        alternative: PropTypes.bool
    }

    static defaultProps = {
        context: 'default',
        size: 'medium',
        children: null,
        href: null,
        onClick: null,
        icon: null,
        alternative: false
    }

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
        const { children, icon, alternative, href } = this.props;
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

        const elementProperties = {
            onClick: (e) => this.handleClick(e),
            className: classes.join(' ')
        };

        if (NodeTag === 'a') {
            elementProperties.href = href;
        }

        return (
          <NodeTag { ...elementProperties }>
            { children }
          </NodeTag>
        );
    }
}