import React from 'react';
import Panel from '../../lib/Panel';

describe('<Panel />', () => {
  it('should render content  the Panel', () => {
    const wrapper = shallow(<Panel>Hello Jest!</Panel>);
    expect(wrapper.find('.nice-panel-content').text()).toEqual('Hello Jest!');
  });

  it('should render Panel with title', () => {
    const wrapper = shallow(<Panel title='My title' />);
    expect(wrapper.find('.nice-panel-heading').text()).toEqual('My title');
  });

  it('should render the Panel header on the bottom', () => {
    const wrapper = shallow(<Panel title='My title' inverseHeading />);
    expect(wrapper.find('div').at(2).hasClass('nice-panel-heading')).toBe(true);
  });

  it('should render with different color theme', () => {
    const wrapper = shallow(<Panel context='good' />);
    expect(wrapper.find('.nice-panel').hasClass('good')).toBe(true);
  });
});