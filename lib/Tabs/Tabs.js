// https://medium.com/trisfera/a-simple-react-tabs-component-47cac2cfbb5
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Tabs extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            activeTabIndex: this.props.defaultActiveTabIndex
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tabIndex) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
        });
        if (this.props.onChangeTab !== undefined && typeof this.props.onChangeTab === 'function') {
            this.props.onChangeTab(tabIndex);
        }
    }

    // Encapsulate <Tabs/> component API as props for <Tab/> children
    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick: this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            });
        });
    }

    // Render current active tab content
    renderActiveTabContent() {
        const { children } = this.props;
        const { activeTabIndex } = this.state;
        if (children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }

    render() {
        const { wrapped, small } = this.props;
        return (
            <div className={classNames({ 'nice-tabs-wrapper': wrapped })}>
                <ul className={classNames('nice-tabs', { small }, 'bold')}>
                    {this.renderChildrenWithTabsApiAsProps()}
                </ul>
                <ul className="nice-tab-content">
                    {this.renderActiveTabContent()}
                </ul>
            </div>
        );
    }
}

Tabs.propTypes = {
    defaultActiveTabIndex: PropTypes.number,
    small: PropTypes.bool,
    wrapped: PropTypes.bool,
    onChangeTab: PropTypes.func
};

Tabs.defaultProps = {
    defaultActiveTabIndex: 0,
    onChangeTab: null,
    wrapped: false,
    small: false
};