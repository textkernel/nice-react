import React from 'react';
import { ScaleGroup, ScaleItem } from '../../lib/Scale';

describe('<ScaleGroup /> <ScaleItem />', () => {
    it('should render with all labels', () => {
        const wrapper = mount(
          <ScaleGroup name='my-radio-name'> 
            <ScaleItem label='Nice to have' value={1} />
            <ScaleItem label='Good to have' value={5} />
            <ScaleItem label='Must have' value={10} />
          </ScaleGroup>
      );
        
        expect(wrapper).toMatchSnapshot();
    });
});

describe('<ScaleGroup /> <ScaleItem />', () => {
    it('should render without one label', () => {
        const wrapper = mount(
          <ScaleGroup name='my-radio-name'> 
            <ScaleItem label='Nice to have' value={1} />
            <ScaleItem value={5} />
            <ScaleItem label='Must have' value={10} />
          </ScaleGroup>
        );
    
        expect(wrapper).toMatchSnapshot();
    });
});

describe('<ScaleGroup /> <ScaleItem />', () => {
    it('should render as controlled component', () => {
        const wrapper = mount(
          <ScaleGroup name='my-radio-name' value={10}> 
            <ScaleItem label='Nice to have' value={1} />
            <ScaleItem value={5} />
            <ScaleItem label='Must have' value={10} />
          </ScaleGroup>
        );
    
        expect(wrapper).toMatchSnapshot();
    });
});

describe('<ScaleGroup /> <ScaleItem />', () => {
    it('should render without tick labels', () => {
        const wrapper = mount(
          <ScaleGroup tickLabels={false} name='my-radio-name'> 
            <ScaleItem label='Nice to have' value={1} />
            <ScaleItem value={5} />
            <ScaleItem label='Must have' value={10} />
          </ScaleGroup>
        );
        
        expect(wrapper).toMatchSnapshot();
    });
});

describe('<ScaleGroup /> <ScaleItem />', () => {
    it('should render with custom classes over items', () => {
        const wrapper = mount(
          <ScaleGroup name='projectid-radios'>
            <ScaleItem label='Nice to have' value={1} className='text-bold' />
            <ScaleItem value={5} className='text-bold text-italic' />
            <ScaleItem label='Must have' value={10} className='text-uppercase text-brand' />
          </ScaleGroup>
        );
        
        expect(wrapper).toMatchSnapshot();
    });
});

describe('<ScaleGroup /> <ScaleItem />', () => {
    it('should render with custom classes over outermost element', () => {
        const wrapper = mount(
          <ScaleGroup name='projectid-radios' className='nice-bg-info'>
            <ScaleItem label='Nice to have' value={1} />
            <ScaleItem value={5} />
            <ScaleItem label='Must have' value={10} />
          </ScaleGroup>
        );
        
        expect(wrapper).toMatchSnapshot();
    });
});

describe('<ScaleGroup /> <ScaleItem />', () => {
    it('should handle the onChange event', () => {
        const onChangeHandler = jest.fn();

        const wrapper = mount(
          <ScaleGroup name='projectid-radios' onChange={onChangeHandler}>
            <ScaleItem label='Nice to have' value={1} />
            <ScaleItem value={5} />
            <ScaleItem label='Must have' value={10} />
          </ScaleGroup>
        );
        
        wrapper.find('input').at(0).simulate('change');
        expect(onChangeHandler.mock.calls[0][1]).toBe('1');

        wrapper.find('input').at(1).simulate('change');
        expect(onChangeHandler.mock.calls[1][1]).toBe('5');

        wrapper.find('input').at(2).simulate('change');
        expect(onChangeHandler.mock.calls[2][1]).toBe('10');
    });
});