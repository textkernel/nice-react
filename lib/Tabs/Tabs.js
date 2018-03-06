// https://medium.com/trisfera/a-simple-react-tabs-component-47cac2cfbb5
import React, { Component } from 'react';
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
        return (
            <div className="nice-tabs-wrapper">
                <ul className="nice-tabs small bold">
                    {this.renderChildrenWithTabsApiAsProps()}
                    {/* <li className="current">
                        <a href="#" className="icon fa-home">
                            First
                    <span className="nice-badge">
                                96
                    </span>
                        </a>
                    </li>
                    <li className="brand">
                        <a href="#">Second</a>
                    </li>
                    <li className="accent">
                        <a href="#">Third</a>
                    </li>
                    <li className="primary">
                        <a href="#">Fourth</a>
                    </li>
                    <li>
                        <a href="#">Fifth</a>
                    </li> */}
                </ul>
                <ul className="nice-tab-content">
                    {this.renderActiveTabContent()}
                    {/* <li className="current">
                        This tab is currently active
                    </li>
                    <li>
                        This tab is hidden
                    </li> */}
                </ul>
            </div>
            // <div className="tabs">
            //     <ul className="tabs-nav nav navbar-nav navbar-left">
            //         {this.renderChildrenWithTabsApiAsProps()}
            //     </ul>
            //     <div className="tabs-active-content">
            //         {this.renderActiveTabContent()}
            //     </div>
            // </div>
        );
    }
};

Tabs.propTypes = {
    defaultActiveTabIndex: PropTypes.number
};

Tabs.defaultProps = {
    defaultActiveTabIndex: 0
};