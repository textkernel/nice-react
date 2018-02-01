import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sub from './Sub';
import Footer from './Footer';

export default class Modal extends Component {
    static propTypes = {
        context: PropTypes.string,
        children: PropTypes.node,
        className: PropTypes.string,
        viewportCenter: PropTypes.bool,
        tall: PropTypes.bool,
        wide: PropTypes.bool
    }

    static defaultProps = {
        context: null,
        children: null,
        className: null,
        viewportCenter: false,
        tall: false,
        wide: false
    }

    render() {
        const { context, children, className, viewportCenter, tall, wide } = this.props;
        const classes = ['nice-modal'].concat([context, className].filter(x => x !== null));

        if (viewportCenter) {
            classes.push('viewport-center');
        }
        if (tall) {
            classes.push('tall');
        }
        if (wide) {
            classes.push('wide');
        }

        return (
            <div className={ classes.join(' ') }>
                <div className="nice-modal-content">
                    { children }
                </div>
            </div>
        );
    }
}

Modal.Content = ({ children }) => (
    <div className="nice-modal-body">
        { children }
    </div>
);
Modal.Content.propTypes = {
    children: PropTypes.node
};
Modal.Content.defaultProps = {
    children: null
};

Modal.Header = Header;
Modal.Sub = Sub;
Modal.Footer = Footer;
