import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = (props) => {

    const { headerText, isActive } = props;
    return (
        <li className={classNames({ 'current': isActive })}>
            <a href="#" className="icon fa-home">
                {headerText}
                {renderBadge(props)}
            </a>
        </li>
        // <li className="tab"> <a className={`tab-link ${props.linkClassName} ${props.isActive ? 'active' : ''}`}
        //     onClick={(event) => {
        //         event.preventDefault();
        //         props.onClick(props.tabIndex);
        //     }}>
        //     <i className={`tab-icon ${props.iconClassName}`} />
        // </a>
        // </li>
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
    iconClassName: PropTypes.string.isRequired,
    linkClassName: PropTypes.string.isRequired,
    badge: PropTypes.string,
    icon: PropTypes.string,
    headerText: PropTypes.string.isRequired
};

export default Tab;