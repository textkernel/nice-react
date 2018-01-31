import React, { Component } from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';

export default class Alert extends Component {
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
        buttonLabel: '',
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
        const { buttonLabel = '', onClick } = this.props;
        if (!onClick) {
            return null;
        }
        console.log (buttonLabel);
        if (!buttonLabel.length) {
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
        const { buttonLabel, children, context, onClick } = this.props;
        const classes = ['nice-alert', context].join(' ');

        if (onClick && buttonLabel) {
            return (
                <div className={ classes }>
                    <div className="nice-alert-wrapper">
                        <div className="nice-alert-content">
                            { children }
                        </div>
                        { this.renderButton() }
                    </div>
                </div>
            );
        }

        return (
            <div className={ classes }>
                { this.renderHeading() }
                { children }
                { this.renderButton() }
            </div>
        );
    }
}
