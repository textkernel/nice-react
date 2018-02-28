import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';
import classNames from 'classnames';

class Header extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.array
        ]),
        logo: PropTypes.shape({
            img: PropTypes.string,
            svg: PropTypes.string,
            href: PropTypes.string,
            title: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number
        }),
        fixed: PropTypes.bool,
        fluid: PropTypes.bool,
        form: PropTypes.shape({
            placeholder: PropTypes.string,
            onSubmit: PropTypes.func
        }),
        product: PropTypes.string,
        responsive: PropTypes.bool
    }

    static defaultProps = {
        children: null,
        logo: null,
        fixed: false,
        fluid: false,
        form: null,
        product: null,
        responsive: true
    }

    renderBrand() {
        if (!this.props.logo) {
            return null;
        }

        const { img, svg, width = 170, height = 30, href, title } = this.props.logo || {};

        return (<h1 className="nice-header-brand">
            <a href={ href } title={ title }>
                {
                    svg
                    ? <svg width={ width } height={ height }>
                        <image
                            xlinkHref={ svg }
                            src={ img }
                            width={ width }
                            height={ height } />
                    </svg>
                    : <img
                        src={ img }
                        width={ width }
                        height={ height } />
                }
            </a>
        </h1>);
    }

    renderForm() {
        const { form } = this.props;

        if (!form) {
            return null;
        }

        return (<form className="nice-header-form" onSubmit={ e => {
                    e.preventDefault();
                    if (!form.onSubmit) {
                        return false;
                    }
                    const value = e.target.getElementsByTagName('input')[0].value || null;
                    if (!value) {
                        return false;
                    }
                    form.onSubmit(value);
                }}
            >
            <div className="nice-header-input-wrapper">
                <input type="text" placeholder={ form.placeholder || null } className="nice-form-control" />
                <button type="submit">
                    <i className="fa fa-search" />
                </button>
            </div>
        </form>);
    }

    renderProduct() {
        const { product } = this.props;

        if (!product) {
            return null;
        }

        return (<span className="nice-header-product">
            { product }
        </span>);
    }

    renderMenuToggle() {
        const { responsive, collapsed } = this.props;

        if (!responsive) {
            return null;
        }

        return (<button type="button" className={ classNames('nice-header-toggle', {
            collapsed
        }) }>
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
        </button>);
    }

    render() {
        const { children, fixed, fluid } = this.props;

        return (
            <header className={ classNames('nice-header', {
                fixed
            }) }>
                <div className={ classNames('nice-header-container', {
                    fluid
                }) }>
                    { this.renderBrand() }
                    <div className="nice-header-collapse">
                        { this.renderProduct() }
                        { this.renderForm() }
                        { children }
                    </div>
                    { this.renderMenuToggle() }
                </div>
            </header>
        );
    }
}

Header.Menu = Menu;

export default Header;
