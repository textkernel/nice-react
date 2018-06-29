import React from 'react';
import { Button } from '../../../../../nice-react/src/components/Button';

describe('<Button />', () => {
    it('should render the Button', () => {
        const wrapper = shallow(<Button>Default</Button>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render style Button', () => {
        const wrapper = shallow(<Button context="primary">Primary</Button>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render size Button', () => {
        const wrapper = shallow(<Button size="large">Large</Button>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render style and size Button', () => {
        const wrapper = shallow(<Button context="primary" size="large">Primary large</Button>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should handle the onClick event', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Button onClick={onClickHandler} context="primary" size="large">Primary large</Button>);
        wrapper.find('button').simulate('click', { preventDefault() {} });

        expect(onClickHandler).toHaveBeenCalled();
    });
});
