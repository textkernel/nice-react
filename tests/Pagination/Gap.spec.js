import React from 'react';
import Pagination from '../../lib/Pagination';

describe('<Pagination.Gap />', () => {
    it('should render pagination Gap', () => {
        const wrapper = shallow(<Pagination.Gap />);
        expect(wrapper).toMatchSnapshot();
    });
});
