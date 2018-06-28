import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import niceProps from '../props';
import './Alert.scss';

class Alert extends Component {
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
        const { buttonLabel, children, context, className, onClick, position, style } = this.props;
        let classes = ['nice-alert', context];
        const alertPositions = new Set(niceProps.alertPositions);

        if (position) {
            const intersection = position.split(' ').filter(p => alertPositions.has(p)) || [];

            if (intersection.length) {
                classes.push('position-fixed');
                classes = classes.concat(intersection);
            }
        }

        if (onClick && buttonLabel) {
            return (
                <div
                    className={ classNames(classes, className) }
                    style={ style }
                >
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
            <div
                className={ classNames(classes, className) }
                style={ style }
            >
                { this.renderHeading() }
                { children }
                { this.renderButton() }
            </div>
        );
    }
}

Alert.propTypes = {
    context: PropTypes.oneOf(niceProps.alertContexts),
    className: PropTypes.string,
    heading: PropTypes.string,
    children: PropTypes.node,
    buttonLabel: PropTypes.string,
    onClick: PropTypes.func,
    position: PropTypes.string,
    style: PropTypes.object
};

Alert.defaultProps = {
    context: 'info',
    className: '',
    heading: null,
    children: null,
    buttonLabel: '',
    onClick: null,
    position: null,
    style: null
};

export default Alert;
