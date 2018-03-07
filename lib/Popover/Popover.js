import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import niceProps from '../props';

export default class Popover extends Component {
    static propTypes = {
        className: PropTypes.string,
        context: PropTypes.oneOf(niceProps.popoverContexts),
        controls: PropTypes.arrayOf(
            PropTypes.shape({
                className: PropTypes.string,
                disabled: PropTypes.bool,
                href: PropTypes.string,
                target: PropTypes.string,
                onClick: PropTypes.func,
                label: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.node
                ]).isRequired
            })
        ),
        image: PropTypes.string,
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
        style: PropTypes.object
    }

    static defaultProps = {
        children: null,
        className: null,
        context: null,
        controls: [],
        image: null,
        title: null,
        style: null
    }

    renderTitle() {
        const { title } = this.props;

        if (!title) {
            return null;
        }

        return (<div className="nice-popover-title">
            { title }
        </div>);
    }

    renderImage() {
        const { image } = this.props;

        if (!image) {
            return null;
        }

        return (<img
            className="nice-popover-image"
            src={ image }
        />);
    }

    renderControls() {
        const { controls } = this.props;

        if (!controls || !Array.isArray(controls) || !controls.length) {
            return null;
        }

        return (<div className="nice-popover-controls">
            { controls.map((control, i) => {
                const { className, disabled, href = '#', label, target, onClick } = control;

                return (<a
                    key={ i }
                    href={ href }
                    target={ target }
                    onClick={ onClick }
                    className={ classNames('nice-popover-control', {
                        disabled
                    }, className) }
                >
                    { label }
                </a>);
            }) }
        </div>);
    }

    render() {
        const { children, className, context, noArrow, position = '', style } = this.props;
        const popoverPositions = new Set(niceProps.popoverPositions);
        const positions = position.split(' ').filter(p => popoverPositions.has(p)) || [];

        return (<div className={ classNames('nice-popover', {
            [context]: context,
            'no-arrow': noArrow
        }, className, positions) } style={ style }>
            { this.renderTitle() }
            <div className="nice-popover-body">
                { this.renderImage() }
                { children }
            </div>
            { this.renderControls() }
        </div>);
    }
};
