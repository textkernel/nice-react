import React from 'react';
import Scale from '../../lib/Scale';

describe('<Scale /> <Scale.Item />', () => {
    it('should render with all labels', () => {
        const wrapper = mount(
            <Scale name="my-radio-name"> 
                <Scale.Item label="Nice to have" value={1} />
                <Scale.Item label="Good to have" value={5} />
                <Scale.Item label="Must have" value={10} />
            </Scale>
        );
        
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with custom className/style', () => {
        const wrapper = mount(
            <Scale name="my-radio-name" className="my-custom-class" style={{ top: 0 }}> 
                <Scale.Item value="1" className="my-custom-class" style={{ top: 0 }} />
            </Scale>
        );
        
        expect(wrapper).toMatchSnapshot();
    });

    it('should render without one label', () => {
        const wrapper = mount(
            <Scale name="my-radio-name"> 
                <Scale.Item label="Nice to have" value={1} />
                <Scale.Item value={5} />
                <Scale.Item label="Must have" value={10} />
            </Scale>
        );
    
        expect(wrapper).toMatchSnapshot();
    });

    it('should render as controlled component', () => {
        const wrapper = mount(
            <Scale name="my-radio-name" value={10}> 
                <Scale.Item label="Nice to have" value={1} />
                <Scale.Item value={5} />
                <Scale.Item label="Must have" value={10} />
            </Scale>
        );
    
        expect(wrapper).toMatchSnapshot();
    });

    it('should render without tick labels', () => {
        const wrapper = mount(
            <Scale tickLabels={false} name="my-radio-name"> 
                <Scale.Item label="Nice to have" value={1} />
                <Scale.Item value={5} />
                <Scale.Item label="Must have" value={10} />
            </Scale>
        );
        
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with custom classes over items', () => {
        const wrapper = mount(
            <Scale name="projectid-radios">
                <Scale.Item label="Nice to have" value={1} className="text-bold" />
                <Scale.Item value={5} className="text-bold text-italic" />
                <Scale.Item label="Must have" value={10} className="text-uppercase text-brand" />
            </Scale>
        );
        
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with custom classes over outermost element', () => {
        const wrapper = mount(
            <Scale name="projectid-radios" className="nice-bg-info">
                <Scale.Item label="Nice to have" value={1} />
                <Scale.Item value={5} />
                <Scale.Item label="Must have" value={10} />
            </Scale>
        );
        
        expect(wrapper).toMatchSnapshot();
    });

    it('should handle the onChange event', () => {
        const onChangeHandler = jest.fn();

        const wrapper = mount(
            <Scale name="projectid-radios" onChange={onChangeHandler}>
                <Scale.Item label="Nice to have" value={1} />
                <Scale.Item value={5} />
                <Scale.Item label="Must have" value={10} />
            </Scale>
        );
        
        wrapper.find('input').at(0).simulate('change');
        expect(onChangeHandler.mock.calls[0][1]).toBe('1');

        wrapper.find('input').at(1).simulate('change');
        expect(onChangeHandler.mock.calls[1][1]).toBe('5');

        wrapper.find('input').at(2).simulate('change');
        expect(onChangeHandler.mock.calls[2][1]).toBe('10');
    });
});