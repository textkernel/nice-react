import React from 'react';
import Breadcrumb from '../../lib/Breadcrumb';

describe('<Breadcrumb.Item />', () => {
    it('should render clickable Item', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Breadcrumb.Item text="Level 1" value="level-1" onClick={onClickHandler} />);
        expect(wrapper).toMatchSnapshot();

        wrapper.find('a').simulate('click', { preventDefault() {} });
        expect(onClickHandler).toHaveBeenCalled();
        expect(onClickHandler.mock.calls[0][0]).toBe('level-1');
    });

    it('should render Item with icon', () => {
        const wrapper = shallow(<Breadcrumb.Item text="Level 1" icon="fa-star" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Item as current Breadcrumb', () => {
        const wrapper = shallow(<Breadcrumb.Item text="Level 1" current />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Item with children', () => {
        const wrapper = shallow(
          <Breadcrumb.Item text="Level 2">
            <Breadcrumb.Item text="Some child node 1" />
            <Breadcrumb.Item text="Some child node 2" />
          </Breadcrumb.Item>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
