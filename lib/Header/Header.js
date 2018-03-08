import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Menu from './Menu';

class Header extends Component {
    renderImage() {
        const { svg, img, width = 170, height = 30, title } = this.props.logo || {};

        if (svg) {
            return (<svg width={ width } height={ height }>
                <image
                    xlinkHref={ svg }
                    src={ img }
                    width={ width }
                    height={ height } />
            </svg>);
        }
        return (<img
            src={ img }
            width={ width }
            height={ height }
            alt={ title }
        />);
    }

    renderBrand() {
        if (!this.props.logo) {
            return null;
        }

        const { href, title } = this.props.logo;

        return (<h1 className="nice-header-brand">
            <a href={ href } title={ title }>
                {
                    this.renderImage()
                }
            </a>
        </h1>);
    }

    renderForm() {
        const { form } = this.props;

        if (!form) {
            return null;
        }

        return (<form
            className="nice-header-form"
            onSubmit={ (e) => {
                e.preventDefault();

                if (!form.onSubmit) {
                    return false;
                }

                const value = e.target.getElementsByTagName('input')[0].value || null;

                if (!value) {
                    return false;
                }
                return form.onSubmit(value);
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
            <span className="icon-bar top-bar" />
            <span className="icon-bar middle-bar" />
            <span className="icon-bar bottom-bar" />
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

Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.array
    ]),
    collapsed: PropTypes.bool,
    logo: PropTypes.shape({
        img: PropTypes.string.isRequired,
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
};

Header.defaultProps = {
    children: null,
    collapsed: false,
    logo: null,
    fixed: false,
    fluid: false,
    form: null,
    product: null,
    responsive: true
};

export default Header;
