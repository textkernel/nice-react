import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Header extends Component {
    renderCloseBtn() {
        const { onClose } = this.props;

        if (!onClose) {
            return null;
        }
        return (
            <a href="#" className="nice-modal-close" onClick={ e => {
                e.preventDefault();
                onClose();
            }}>
                <i className="icon fa-times" />
            </a>
        );
    }

    render() {
        const { children, className, style } = this.props;

        if (!children) {
            return null;
        }

        return (
            <div className={classnames('nice-modal-header', className)} style={style}>
                { this.renderCloseBtn() }
                <h4>
                    { children }
                </h4>
            </div>
        );
    }
}

Header.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    style: PropTypes.object,
    onClose: PropTypes.func
};

Header.defaultProps = {
    className: null,
    children: null,
    style: {},
    onClose: null
};

export default Header;
