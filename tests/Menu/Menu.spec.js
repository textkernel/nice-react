import React from 'react';
import Menu from '../../lib/Menu';

const onClick = () => {};

describe('<Menu />', () => {
    it('should render default (horizontal) Menu', () => {
        const wrapper = shallow(<Menu>
        <Menu.Item className="icon fa-home" label="Home" onClick={ onClick } current />
        <Menu.Item className="icon fa-map-pin" label="Cities" onClick={ onClick } />
        <Menu.Item label="Regions" onClick={ onClick } />
        <Menu.Item className="icon fa-globe" label="Countries" onClick={ onClick } disabled />
    </Menu>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render stacked / narrow menu', () => {
        const wrapper = shallow(<Menu stacked narrow icons>
        <Menu.Item className="icon fa-home" label="Home" onClick={ onClick } current />
        <Menu.Item className="icon fa-map-pin" onClick={ onClick } label="Cities">
            <Menu.Item label="Amsterdam" onClick={ onClick } />
            <Menu.Item label="Paris" onClick={ onClick } />
            <Menu.Item label="Berlin" onClick={ onClick } disabled />
            <Menu.Item label="Rome" onClick={ onClick } />
            <Menu.Item label="Madrid" onClick={ onClick } />
        </Menu.Item>
        <Menu.Item label="Regions" onClick={ onClick } />
        <Menu.Item className="icon fa-globe" label="Countries" disabled onClick={ onClick } />
    </Menu>);
        expect(wrapper).toMatchSnapshot();
    });
});
