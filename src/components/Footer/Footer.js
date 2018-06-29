import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Footer.scss';

const Link = ({ children, href, target, className, onClick }) => (<li>
    <a href={ href } target={ target } className={ className } onClick={ onClick }>
        { children }
    </a>
</li>);

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.array
    ]),
    href: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

Link.defaultProps = {
    children: null,
    href: '#',
    target: null,
    className: null,
    onClick: null
};

class Footer extends Component {
    renderCopyright() {
        const { copyright } = this.props;

        if (!copyright) {
            return null;
        }

        return (<p className="pull-left">
            &copy; { (new Date()).getFullYear() }
            <span className="text-brand">
                textkernel
            </span>
        </p>);
    }

    renderMenu() {
        const { children } = this.props;

        if (!children) {
            return null;
        }

        return (<ul className="nice-footer-menu">
            { children }
        </ul>);
    }

    render() {
        const { className, fluid, style } = this.props;

        return (
            <footer
                className={ classNames('nice-footer', className) }
                style={ style }
            >
                <div className={ classNames({
                    'nice-container': !fluid,
                    'nice-container-fluid': fluid
                }) }>
                    { this.renderCopyright() }
                    { this.renderMenu() }
                </div>
            </footer>
        );
    }
}

Footer.Link = Link;

Footer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.array
    ]),
    className: PropTypes.string,
    copyright: PropTypes.bool,
    fluid: PropTypes.bool,
    style: PropTypes.object
};

Footer.defaultProps = {
    children: null,
    className: '',
    copyright: true,
    fluid: false,
    style: null
};

export default Footer;
