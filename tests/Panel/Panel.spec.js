import React from 'react';
import Panel from '../../lib/Panel';

describe('<Panel />', () => {
  it('should render content  the Panel', () => {
    const wrapper = shallow(<Panel>Hello Jest!</Panel>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Panel with title', () => {
    const wrapper = shallow(<Panel title='My title' />);
    expect(wrapper.find('.nice-panel-heading').text()).toEqual('My title');
  });

  it('should render the Panel header on the bottom', () => {

  });

  it('should render with different color theme', () => {

  });
});