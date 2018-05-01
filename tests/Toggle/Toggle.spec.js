import React from 'react';
import Toggle from '../../lib/Toggle';

describe('<Toggle />', () => {
    it('should render a simple Toggle', () => {
        const wrapper = shallow(<Toggle>Label</Toggle>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a disabled Toggle', () => {
        const wrapper = shallow(<Toggle disabled>Disabled toggle</Toggle>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a small primary Toggle that is on by default', () => {
        const wrapper = shallow(<Toggle context="primary" small on>Label</Toggle>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a toggle with custom class / style + muted label when switched off', () => {
        const wrapper = shallow(<Toggle className="custom-class" style={{ visibility: 'hidden' }} offMuted>Muted label</Toggle>);
        expect(wrapper).toMatchSnapshot();
  });
});
