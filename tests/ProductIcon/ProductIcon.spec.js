import React from 'react';
import { ProductIcon } from '../../dist';

describe('<ProductIcon />', () => {
    it('should render nothing', () => {
        const wrapper = shallow(<ProductIcon />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render an icon', () => {
        const wrapper = shallow(<ProductIcon product="jobfeed" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with extra classes and styles', () => {
        const wrapper = shallow(<ProductIcon product="jobfeed" className="text-color-brand" style={{ fontSize: '3em' }} />);
        expect(wrapper).toMatchSnapshot();
    });
});
