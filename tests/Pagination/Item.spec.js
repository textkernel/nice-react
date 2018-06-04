import React from 'react';
import Pagination from '../../lib/Pagination';

describe('<Pagination.Item />', () => {
    it('should render current Item', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Pagination.Item onClick={ onClickHandler } current />);
        expect(wrapper).toMatchSnapshot();

        wrapper.find('li.current a').simulate('click', { preventDefault() {} });
        expect(onClickHandler).toHaveBeenCalled();
    });

    it('should render disabled Item', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Pagination.Item onClick={ onClickHandler } disabled />);
        expect(wrapper).toMatchSnapshot();

        wrapper.find('li.disabled span').simulate('click', { preventDefault() {} });
        expect(onClickHandler).not.toHaveBeenCalled();
    });

    it('should render Item with custom className/style', () => {
        const wrapper = shallow(
            <Pagination.Item className="my-custom-class" style={{ top: 0 }} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
