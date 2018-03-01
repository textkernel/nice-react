import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import props from '../props';

const Sub = ({ children, className }) => (<div className={ classNames('nice-card-sub', className)}>
    { children }
</div>);

class Card extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.array
        ]),
        className: PropTypes.string,
        context: PropTypes.oneOf(props.cardContexts),
        controls: PropTypes.arrayOf(PropTypes.shape({
            disabled: PropTypes.bool,
            href: PropTypes.string,
            target: PropTypes.string,
            onClick: PropTypes.func,
            label: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.node
            ]).isRequired,
            className: PropTypes.string
        })),
        style: PropTypes.object
    }

    static defaultProps = {
        children: null,
        className: null,
        context: null,
        controls: [],
        style: null
    }

    renderTitle() {
        const { title } = this.props;

        if (!title) {
            return null;
        }

        return (<div className="nice-card-title">
            <h3>{ title }</h3>
        </div>);
    }

    renderImage() {
        const { image } = this.props;

        if (!image) {
            return null;
        }

        return (<img
            className="nice-card-image"
            src={ image }
        />);
    }

    renderControls() {
        const { controls } = this.props;

        if (!controls || !Array.isArray(controls) || !controls.length) {
            return null;
        }

        return (<div className="nice-card-controls">
            { controls.map((control, i) => {
                const { disabled, href = '#', label, target, onClick } = control;

                return (<a
                    key={ i }
                    href={ href }
                    target={ target }
                    onClick={ onClick }
                    className={ classNames('nice-card-control', {
                        disabled
                    }) }
                >
                    { label }
                </a>);
            }) }
        </div>);
    }

    render() {
        const { children, className, context, controls, style } = this.props;

        return (
            <div className={ classNames('nice-card', className, {
                [context]: context,
                'has-controls': Array.isArray(controls) && controls.length
            }) } style={ style }>
                { this.renderTitle() }
                { this.renderImage() }
                { React.Children.map(children, (child, i) => {
                    if (!child.type || typeof child.type === 'string') {
                        return (<div className="nice-card-content" key={ i }>
                            { child }
                        </div>);
                    }
                    return child;
                }) }
                { this.renderControls() }
            </div>
        );
    }
}

Card.Sub = Sub;

export default Card;
