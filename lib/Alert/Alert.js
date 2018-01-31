import React, { Component } from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';

export default class Button extends Component {
    static propTypes = {
        context: PropTypes.oneOf(niceProps.alertContexts),
        heading: PropTypes.string,
        children: PropTypes.node,
        buttonLabel: PropTypes.string,
        onClick: PropTypes.func
    }

    static defaultProps = {
        context: 'info',
        heading: null,
        children: null,
        buttonLabel: 'Dismiss',
        onClick: null
    }

    renderHeading() {
        const { heading } = this.props;
        if (!heading) {
            return null;
        }
        return (
            <div className="nice-alert-heading">
                { heading }
            </div>
        );
    }

    renderButton() {
        const { buttonLabel, onClick } = this.props;
        if (!onClick) {
            return null;            
        }
        if (!buttonLabel) {
            return (
                <a href="#" className="nice-alert-dismiss" onClick={ e => {
                    e.preventDefault();
                    onClick();
                }}>
                    <i className="icon fa-angle-down" />
                </a>
            );
        }
        return (
            <a href="#" className="nice-alert-button" onClick={ e => {
                e.preventDefault();
                onClick();
            }}>
                { buttonLabel }
            </a>
        );
    }

    render() {
        const { children, context } = this.props;
        const classes = ['nice-btn', context];

        return (
            <div className={ classes.join(' ') }>
                { this.renderHeading() }
                { children }
                { this.renderButton() }
            </div>
        );
    }
}
