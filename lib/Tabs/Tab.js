import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import niceProps from '../props';

export default class Tab extends Component {

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        context: PropTypes.oneOf(niceProps.contexts),
        onClick: PropTypes.func,
        tabIndex: PropTypes.number,
        isActive: PropTypes.bool,
        icon: PropTypes.string,
        badge: PropTypes.string,
        headerText: PropTypes.string.isRequired
    };

    static defaultProps = {
        className: null,
        style: {},
        context: 'default',
        onClick: null,
        tabIndex: 0,
        isActive: false,
        icon: null,
        badge: null,
        headerText: null,
    };

    renderBadge() {
        if (!this.props.badge) {
            return null;
        }
        return (
            <span className="nice-badge">
                { this.props.badge }
            </span>
        );
    }


    render() {
        const {
            headerText, isActive, onClick, tabIndex, icon, context, className, style
        } = this.props;
        const hasIcon = icon !== undefined && icon !== null;
        const tabIndexClass = `tab-link-class-${tabIndex}`;
        const onClickHandler = (event) => {
            event.preventDefault();
            onClick(tabIndex);
        };

        return (
            <li className={classNames({ current: isActive }, context, className)} style={style}>
                <a href="#" onClick={onClickHandler} className={classNames(tabIndexClass, { [`icon ${icon}`]: hasIcon })}>
                    {
                        headerText
                    }
                    {
                        this.renderBadge()
                    }
                </a>
            </li>
        );
    }
}
