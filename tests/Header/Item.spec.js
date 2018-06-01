import React from 'react';
import HeaderMenuItem from '../../lib/Header/Item';

describe('<Header.Menu.Item />', () => {
    it('should render default header menu Item', () => {
        const wrapper = shallow(<HeaderMenuItem
            label="Menu 1"
            context="primary"
            width="125"
            href="http://textkernel.com"
            onClick={ e => {} }
        >
                <HeaderMenuItem label="Item 1" />
                <HeaderMenuItem label="Item 2" />
                <HeaderMenuItem label="Item 3" />
        </HeaderMenuItem>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Header Menu Item with default className/style', () => {
        const wrapper = shallow(
            <HeaderMenuItem className="my-custom-class" style={{ top: 0 }} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
