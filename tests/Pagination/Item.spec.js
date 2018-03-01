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
});
