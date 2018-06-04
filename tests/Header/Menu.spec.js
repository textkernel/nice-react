import React from 'react';
import HeaderMenu from '../../lib/Header/Menu';

describe('<Header.Menu />', () => {
    it('should render default header menu group', () => {
        const wrapper = shallow(<HeaderMenu>
                <HeaderMenu.Item label="Item 1" />
                <HeaderMenu.Item label="Item 2" />
        </HeaderMenu>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render alternate header menu group', () => {
        const wrapper = shallow(<HeaderMenu alternate>
                <HeaderMenu.Item label="Item 1" />
                <HeaderMenu.Item label="Item 2" />
        </HeaderMenu>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Header Menu with custom className/style', () => {
        const wrapper = shallow(
            <HeaderMenu className="my-custom-class" style={{ top: 0 }} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
