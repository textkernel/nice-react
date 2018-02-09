import React from 'react';
import Breadcrumb from '../../lib/Breadcrumb';

describe('<Breadcrumb />', () => {
    it('should render default Breadcrumb', () => {
        const wrapper = shallow(
          <Breadcrumb>
            <Breadcrumb.Item text='Level 1' />
            <Breadcrumb.Item text='Level 2' />
            <Breadcrumb.Item text='Level 3' />
          </Breadcrumb>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render small Breadcrumb', () => {
        const wrapper = shallow(
          <Breadcrumb size='small'>
            <Breadcrumb.Item text='Level 1' />
            <Breadcrumb.Item text='Level 2' />
            <Breadcrumb.Item text='Level 3' />
          </Breadcrumb>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
