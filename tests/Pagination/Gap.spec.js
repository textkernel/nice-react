import React from 'react';
import Pagination from '../../lib/Pagination';

describe('<Pagination.Gap />', () => {
    it('should render pagination Gap', () => {
        const wrapper = shallow(<Pagination.Gap />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render pagination Gap with custom className/style', () => {
        const wrapper = shallow(
            <Pagination.Gap className="my-custom-class" style={{ top: 0 }} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
