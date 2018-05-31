import React from 'react';
import Loading from '../../lib/Loading';

describe('<Loading />', () => {
  it('should render the Loading', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Loading with custom classes / styles', () => {
    const wrapper = shallow(<Loading className="test" style={{ display: 'none' }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Loading with context', () => {
    const wrapper = shallow(<Loading context='good' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Loading with different size', () => {
    const wrapper = shallow(<Loading size='large' />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Loading with size and context properties', () => {
    const wrapper = shallow(<Loading size='medium' context='bad' />);
    expect(wrapper).toMatchSnapshot();
  });
});
