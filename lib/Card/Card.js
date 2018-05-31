import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import props from '../props';

const Sub = ({ children, className, style }) => (
    <div className={classnames('nice-card-sub', className)} style={style}>
        { children }
    </div>
);

Sub.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

Sub.defaultProps = {
    className: null,
    style: {},
};


const Content = ({ children, className, style }) => (
    <div className={classnames('nice-card-content', className)} style={style}>
        { children }
    </div>
);

Content.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

Content.defaultProps = {
    className: null,
    style: {},
};


class Card extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.array
        ]),
        className: PropTypes.string,
        context: PropTypes.oneOf(props.cardContexts),
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
                ]).isRequired,
            })
        ),
        image: PropTypes.string,
        style: PropTypes.object,
        title: PropTypes.string,
    }

    static defaultProps = {
        children: null,
        className: null,
        context: null,
        controls: [],
        image: null,
        style: null,
        title: null,
    }

    renderTitle() {
        const { title } = this.props;

        if (!title) {
            return null;
        }

        return (
            <div className="nice-card-title">
                <h3>{ title }</h3>
            </div>
        );
    }

    renderImage() {
        const { image } = this.props;

        if (!image) {
            return null;
        }

        return (
            <img alt="" className="nice-card-image" src={ image } />
        );
    }

    renderControls() {
        const { controls } = this.props;

        if (!controls || !Array.isArray(controls) || !controls.length) {
            return null;
        }

        return (<div className="nice-card-controls">
            { controls.map((control, i) => {
                const { className, disabled, href = '#', label, target, onClick, style } = control;

                return (<a
                    key={ i }
                    href={ href }
                    target={ target }
                    onClick={ onClick }
                    className={ classnames('nice-card-control', {
                        disabled
                    }, className) }
                    style={style}
                >
                    { label }
                </a>);
            }) }
        </div>);
    }

    render() {
        const { children, className, context, controls, style } = this.props;

        return (
            <div 
                className={classnames('nice-card', className, {
                    [context]: context,
                    'has-controls': Array.isArray(controls) && controls.length
                })} 
                style={ style }
            >
                { this.renderTitle() }
                { this.renderImage() }
                { children }
                { this.renderControls() }
            </div>
        );
    }
}

Card.Content = Content;
Card.Sub = Sub;

export default Card;
