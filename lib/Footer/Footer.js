import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.array
        ]),
        copyright: PropTypes.bool,
        fluid: PropTypes.bool
    }

    static defaultProps = {
        children: null,
        copyright: true,
        fluid: false
    }

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
        const { copyright, fluid } = this.props;

        return (
            <footer className="nice-footer">
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

export default Footer;
