import React from 'react';
import { Button } from '../../lib/Buttons';

describe('<Button />', () => {
  it('should render the Button', () => {
    const wrapper = shallow(<Button>Default</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});