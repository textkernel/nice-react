import React from 'react';
import { Button } from '../../lib/Buttons';

describe('<Button />', () => {
  it('should render the Button', () => {
    const wrapper = shallow(<Button>Default</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render style Button', () => {
    const wrapper = shallow(<Button ncStyle="primary">Primary</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render size Button', () => {
    const wrapper = shallow(<Button ncSize="large">Large</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render style and size Button', () => {
    const wrapper = shallow(<Button ncStyle="primary" ncSize="large">Primary large</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});