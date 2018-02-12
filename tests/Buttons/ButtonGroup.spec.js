import React from 'react';
import { Button, ButtonGroup } from '../../lib/Button';

describe('<ButtonGroup />', () => {
  it('should render the Buttons inside ButtonGroup', () => {
    const wrapper = shallow(<ButtonGroup><Button>Default</Button></ButtonGroup>);
    expect(wrapper).toMatchSnapshot();
  });
});
