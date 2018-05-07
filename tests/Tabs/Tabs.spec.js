import React from 'react';
import { Tabs, Tab } from '../../lib/Tabs';

describe('<Tabs/>', () => {

    it('should render', () => {
        const Component = render(
            <Tabs>
                <Tab headerText="First" badge="56" icon="fa-home">
                    <p>Tab number zero</p>
                </Tab>
                <Tab headerText="Second" icon="fa-angle-down">
                    <p>Tab number one</p>
                </Tab>
            </Tabs>
        );
        expect(Component).toMatchSnapshot();
    });

    it('should render tab 0 content by default', () => {
        const Component = shallow(
            <Tabs>
                <Tab headerText="First" badge="56" icon="fa-home">
                    <p>Tab number zero</p>
                </Tab>
                <Tab headerText="Second" icon="fa-angle-down">
                    <p>Tab number one</p>
                </Tab>
            </Tabs>
        );
        expect(Component.find('.nice-tab-content').text()).toEqual('Tab number zero');
    });

    it("should allow to specify the 'defaultActiveTabIndex'", () => {
        const Component = shallow(
            <Tabs defaultActiveTabIndex={1}>
                <Tab headerText="First" badge="56" icon="fa-home">
                    <p>Tab number zero</p>
                </Tab>
                <Tab headerText="Second" icon="fa-angle-down">
                    <p>Tab number one</p>
                </Tab>
            </Tabs>
        );
        // Active tab content should be 1 instead of 0 now
        expect(Component.find('.nice-tab-content').text()).toEqual('Tab number one');
    });

    it('should change tab content to the selected tab', () => {
        const Component = mount(
            <Tabs defaultActiveTabIndex={0}>
                <Tab headerText="First" badge="56" icon="fa-home">
                    <p>Tab number zero</p>
                </Tab>
                <Tab headerText="Second" icon="fa-angle-down">
                    <p>Tab number one</p>
                </Tab>
            </Tabs>
        );
        expect(Component.find('.nice-tab-content').text()).toEqual('Tab number zero');
        // Select tab at index 1, and expect text to change
        Component.find('.tab-link-class-1').simulate('click', { preventDefault: () => { } });
        expect(Component.find('.nice-tab-content').text()).toEqual('Tab number one');
    });
});