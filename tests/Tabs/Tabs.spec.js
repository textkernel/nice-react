import React from 'react';
import { Tabs, Tab } from '../../lib/Tabs';
import { Button, ButtonGroup } from '../../lib/Button';

describe.skip('<Tabs/>', () => {

    let Component = null;

    beforeEach(() => {
        Component = shallow(
            <Tabs>
                <Tab iconClassName={'icon-class-0'}
                    linkClassName={'link-class-0'}>
                    <p>content 0</p>
                </Tab>
                <Tab iconClassName={'icon-class-1'}
                    linkClassName={'link-class-1'}>
                    <p>content 1</p>
                </Tab>
            </Tabs>
        );
    });

    it('should render', () => {
        expect(Component.length).toBeTruthy();
    });

    it('should render tab 0 content by default', () => {
        expect(Component.find('.tabs-active-content').text()).toEqual('content 0');
    });

    it("should allow to specify the 'defaultActiveTabIndex'", () => {
        const Component = shallow(
            <Tabs defaultActiveTabIndex={1}>
                <Tab iconClassName={'icon-class-0'}
                    linkClassName={'link-class-0'}>
                    <p>content 0</p>
                </Tab>
                <Tab iconClassName={'icon-class-1'}
                    linkClassName={'link-class-1'}>
                    <p>content 1</p>
                </Tab>
            </Tabs>
        );
        // Active tab content should be 1 instead of 0 now
        expect(Component.find('.tabs-active-content').text()).toEqual('content 1');
    });

    it('should change tab content to the selected tab', () => {
        expect(Component.find('.tabs-active-content').text()).toEqual('content 0');
        // Select tab at index 1, and expect text to change
        Component.find('.link-class-1').simulate('click', { preventDefault: () => { } });
        expect(Component.find('.tabs-active-content').text()).toEqual('content 1');
    });
});