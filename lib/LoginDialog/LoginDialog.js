import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import niceProps from '../props';
import ProductIcon from '../ProductIcon';

export default class LoginDialog extends Component {
    static propTypes = {
        brand: PropTypes.string.isRequired,
        children: PropTypes.node,
        product: PropTypes.oneOf(niceProps.products),
        intro: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.string
        ]),
        loading: PropTypes.bool,
        version: PropTypes.string,
        noAttribution: PropTypes.bool
    }

    static defaultProps = {
        brand: niceProps.products[0],
        children: null,
        product: niceProps.products[0],
        intro: null,
        loading: false,
        version: null,
        noAttribution: false
    }

    renderProductLogo() {
        const { product } = this.props;

        if (!product) {
            return null;
        }
        return (<div
            className="nice-login-intro-logo"
        >
            <ProductIcon
                product={ product }
            />
        </div>);
    }

    renderIntro() {
        const { intro, loading } = this.props;

        if (!intro) {
            return null;
        }

        return (
            <div className="nice-login-intro">
                {
                    this.renderProductLogo()
                }
                <div className="nice-login-intro-content">
                    { intro }
                </div>
                <div className={ classNames('nice-login-loading', {
                    shown: loading
                }) } />
            </div>
        );
    }

    renderAttribution() {
        const { noAttribution } = this.props;

        if (noAttribution) {
            return null;
        }
        return (<span
            className="text-brand pull-right"
        >
            by textkernel
        </span>);
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
                    this.renderAttribution()
                }
            </div>
        );
    }

    render() {
        const { children, brand } = this.props;

        return (
            <div className="nice-login">
                <div className="nice-login-brand">
                    <span className="text-brand">
                        { brand }
                    </span>
                </div>
                { this.renderIntro() }
                { children }
                { this.renderVersion() }
            </div>
        );
    }
}
