import React from 'react';
import Panel from '../../lib/Panel';

describe('<Panel />', () => {
  it('should render content  the Panel', () => {
    const wrapper = shallow(<Panel>Hello Jest!</Panel>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Panel with title', () => {
    const wrapper = shallow(<Panel title='My title' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Panel header on the bottom', () => {
    const wrapper = shallow(<Panel title='My title' inverseHeading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with different color theme', () => {
    const wrapper = shallow(<Panel context='good' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Panel with custom classes / styles', () => {
    const wrapper = shallow(<Panel className="test" style={{ display: 'none' }}>Hello Jest!</Panel>);
    expect(wrapper).toMatchSnapshot();
  });
});