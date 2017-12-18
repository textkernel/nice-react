import React from 'react';
import Scale from '../../lib/Scale';

describe('<Scale />', () => {
  it('should render with all labels', () => {
    const items = [
      { label: 'Nice to have', value: 1 },
      { label: 'Good to have', value: 5 },
      { label: 'Must have', value: 10 }
    ];
    
    const wrapper = shallow(<Scale items={items} radioGroupName='projectid-radios' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render omitting a label', () => {
    const items = [
      { label: 'Nice to have', value: 1 },
      { label: 'Good to have', omitLabel: true, value: 5 },
      { label: 'Must have', value: 10 }
    ];
    
    const wrapper = shallow(<Scale items={items} radioGroupName='projectid-radios' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the onChange event', () => {
    const onChangeHandler = jest.fn();
    const items = [
      { label: 'Nice to have', value: 1 },
      { label: 'Good to have', omitLabel: true, value: 5 },
      { label: 'Must have', value: 10 }
    ];
    
    const wrapper = shallow(<Scale items={items} onChange={onChangeHandler} radioGroupName='projectid-radios' />);

    wrapper.find('input').first().simulate('change', { currentTarget: { value: 1 } });
    expect(onChangeHandler).toHaveBeenCalled();
  });
});