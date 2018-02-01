import React, { Component } from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';
import ProductIcon from '../ProductIcon';

export default class LoginDialog extends Component {
    static propTypes = {
        brand: PropTypes.string,
        children: PropTypes.node,
        product: PropTypes.oneOf(niceProps.products),
        intro: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.string
        ]),
        version: PropTypes.string,
        noAttribution: PropTypes.bool,
        onSubmit: PropTypes.func
    }

    static defaultProps = {
        brand: niceProps.products[0],
        children: null,
        product: niceProps.products[0],
        intro: null,
        version: null,
        noAttribution: false,
        onSubmit: null
    }

    handleSubmit(e) {
        const { onSubmit } = this.props;

        if (!onSubmit) {
            return false;
        }

        return onSubmit(e);
    }

    renderIntro() {
        const { intro, product } = this.props;
        if (!intro) {
            return null;
        }

        return (
            <div className="nice-login-intro">
                {
                    product ?
                    <div className="nice-login-intro-logo">
                        <ProductIcon product={ product } />
                    </div> : null
                }
                <div className="nice-login-intro-content">
                    { intro }
                </div>
                <div className="nice-login-loading shown" />
            </div>
        );
    }

    renderVersion() {
        const { version, noAttribution } = this.props;

        if (!version && noAttribution) {
            return null;
        }

        return (
            <div className="nice-login-version clearfix">
                { version }
                {
                    !noAttribution ?
                    <span className="text-brand pull-right">
                        by textkernel
                    </span> : null
                }
            </div>
        );
    }

    render() {
        const { children, brand } = this.props;

        const childrenWithProps = React.Children.map(children, child => (
            React.cloneElement(child, {
                onChange: e => this.setState({
                    fields: {
                        [e.target.name]: e.target.value
                    }
                })
            })
        ));

        return (
            <div className="nice-login">
                <div className="nice-login-brand">
                    <span className="text-brand">
                        { brand }
                    </span>
                </div>
                { this.renderIntro() }
                <form onSubmit={ e => this.handleSubmit(e) }>
                    { childrenWithProps }
                </form>
                { this.renderVersion() }
            </div>
        );
    }
}

LoginDialog.Footer = ({ children }) => (
    <div className="nice-login-footer">
        { children }
    </div>
);
LoginDialog.Footer.propTypes = {
    children: PropTypes.node
};
LoginDialog.Footer.defaultProps = {
    children: null
};
