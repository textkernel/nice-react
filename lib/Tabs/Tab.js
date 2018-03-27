import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = (props) => {

    const { headerText, isActive, onClick, tabIndex, icon } = props;
    const hasIcon = icon !== undefined;

    const onClickHandler = (event) => {
        event.preventDefault();
        onClick(tabIndex);
    }

    return (
        <li className={classNames({ 'current': isActive })}>
            <a href="#" onClick={onClickHandler} className={classNames({ [`icon ${icon}`]: hasIcon })}>
                {headerText}
                {renderBadge(props)}
            </a>
        </li>
    )
}

function renderBadge(props) {
    if (!props.badge) {
        return;
    }

    return (
        <span className="nice-badge">
            {props.badge}
        </span>
    )
}

Tab.propTypes = {
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
    isActive: PropTypes.bool,
    icon: PropTypes.string,
    badge: PropTypes.string,
    icon: PropTypes.string,
    headerText: PropTypes.string.isRequired
};

export default Tab;