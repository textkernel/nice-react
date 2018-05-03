import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import niceProps from '../props';

const Tab = (props) => {
    const { headerText, isActive, onClick, tabIndex, icon, context } = props;
    const hasIcon = icon !== undefined;

    const onClickHandler = (event) => {
        event.preventDefault();
        onClick(tabIndex);
    };

    const tabIndexClass = `tab-link-class-${tabIndex}`;

    return (
        <li className={classNames({ current: isActive }, context)}>
            <a href="#" onClick={onClickHandler} className={classNames(tabIndexClass, { [`icon ${icon}`]: hasIcon })}>
                {headerText}
                {renderBadge(props)}
            </a>
        </li>
    );
};

function renderBadge(props) {
    if (!props.badge) {
        return;
    }

    return (
        <span className="nice-badge">
            {props.badge}
        </span>
    );
}

Tab.propTypes = {
    context: PropTypes.oneOf(niceProps.contexts),
    onClick: PropTypes.func,
    tabIndex: PropTypes.number,
    isActive: PropTypes.bool,
    icon: PropTypes.string,
    badge: PropTypes.string,
    headerText: PropTypes.string.isRequired
};

Tab.defaultProps = {
    context: 'default',
    onClick: null,
    tabIndex: 0,
    isActive: false,
    icon: null,
    badge: null,
    headerText: null,
};

export default Tab;