import React from 'react';
import { Toggle } from '../../dist';

describe('<Toggle />', () => {
    it('should render a simple Toggle', () => {
        const wrapper = shallow(<Toggle id="myToggle">Label</Toggle>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a disabled Toggle', () => {
        const wrapper = shallow(<Toggle id="myToggle" disabled>Disabled toggle</Toggle>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a small primary Toggle that is on by default', () => {
        const wrapper = shallow(<Toggle id="myToggle" context="primary" small defaultOn>Label</Toggle>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a controlled Toggle that is off by state', () => {
        const wrapper = shallow(<Toggle id="myToggle" context="primary" small on={ false }>Label</Toggle>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a toggle with custom class / style + muted label when switched off', () => {
        const wrapper = shallow(<Toggle id="myToggle" className="custom-class" style={{ visibility: 'hidden' }} offMuted>Muted label</Toggle>);
        expect(wrapper).toMatchSnapshot();
  });
});
