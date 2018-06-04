import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sub from './Sub';
import Footer from './Footer';
import Content from './Content';

export default class Modal extends Component {
    
    render() {
        const {
            context, children, className, hidden, overlay, viewportCenter, style, tall, wide
        } = this.props;
        const classes = ['nice-modal'].concat([context, className].filter(x => x !== null));
        const newStyle = Object.assign({}, style || {});

        if (viewportCenter && style) {
            const width = String(style.width).replace(/[^0-9]/g, '');
            const height = String(style.height).replace(/[^0-9]/g, '');

            if (Number(width)) {
                newStyle.marginLeft = `-${ width / 2 }px`;
            }
            if (Number(height)) {
                newStyle.marginTop = `-${ height / 2 }px`;
            }
        }

        if (viewportCenter) {
            classes.push('viewport-center');
        }
        if (hidden) {
            classes.push('hidden');
        }
        if (tall) {
            classes.push('tall');
        }
        if (wide) {
            classes.push('wide');
        }

        let modal = (
            <div className={ classes.join(' ') } style={ newStyle }>
                <div className="nice-modal-content">
                    { children }
                </div>
            </div>
        );
        if (overlay && !hidden) {
            modal = (
                <div className="nice-modal-overlay">
                    { modal }
                </div>
            );
        }

        return modal;
    }
}

Modal.propTypes = {
    context: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    hidden: PropTypes.bool,
    overlay: PropTypes.bool,
    viewportCenter: PropTypes.bool,
    style: PropTypes.object,
    tall: PropTypes.bool,
    wide: PropTypes.bool
};

Modal.defaultProps = {
    context: null,
    children: null,
    className: null,
    hidden: false,
    overlay: true,
    viewportCenter: false,
    style: null,
    tall: false,
    wide: false
};

Modal.Content = Content;
Modal.Header = Header;
Modal.Sub = Sub;
Modal.Footer = Footer;
