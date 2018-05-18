import React from 'react';
import Progress from '../../lib/Progress';

describe('<Progress />', () => {
  it('should render the Progress', () => {
    const wrapper = shallow(<Progress percentage={50} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Progress with context', () => {
    const wrapper = shallow(<Progress percentage={50} context='good' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Progress with custom message', () => {
    const wrapper = shallow(<Progress percentage={50} message='Loading...' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Progress with custom message and context', () => {
    const wrapper = shallow(<Progress percentage={50} message='Loading...' context='bad' />);
    expect(wrapper).toMatchSnapshot();
  });
});