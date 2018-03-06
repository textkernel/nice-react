import React from 'react';
import { Tab } from '../../lib/Tabs';

describe('<Tab/>', () => {

    let Component = null;
    let onClickHandler = null;

    beforeEach(() => {
        onClickHandler = jasmine.createSpy('onClickHandler');
        Component = shallow(
            <Tab onClick={onClickHandler}
                tabIndex={2}
                isActive={true}
                iconClassName={'foo'}
                linkClassName={'test'} />
        );
    });

    it('should render', () => {
        expect(Component.length).toBeTruthy();
    });

    it('should call onClick() prop when link is clicked', () => {
        Component.find('.tab-link').simulate('click', { preventDefault: () => { } });
        expect(onClickHandler).toHaveBeenCalledWith(Component.props().tabIndex);
    });

    it("should add '.active' className to component if tab is active", () => {
        const Component = shallow(
            <Tab isActive={true}
                iconClassName={'foo'}
                linkClassName={'test'} />
        );

        expect(Component.find('.tab-link').hasClass('active')).toBeTruthy();
    });

    it("should not add '.active' className to component if tab is inactive", () => {
        const Component = shallow(
            <Tab isActive={false}
                iconClassName={'foo'}
                linkClassName={'test'} />
        );
        expect(Component.find('.tab-link').hasClass('active')).toBeFalsy();
    });

    it('should add correct className to tab link', () => {
        expect(Component.find('.tab-link').hasClass(Component.props().linkClassName)).toBeTruthy();
    });

    it('should add correct className to tab icon', () => {
        expect(Component.find('.tab-icon').hasClass(Component.props().iconClassName)).toBeTruthy();
    });
});