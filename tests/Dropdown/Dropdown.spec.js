import React from 'react';
import { Dropdown } from '../../dist';

describe('<Dropdown />', () => {
    it('should render a simple Dropdown', () => {
        const wrapper = shallow(<Dropdown label={ 'Nice dropdown' } items={ [{
            label: 'This is a dropdown heading',
            heading: true
        }, {
            label: 'This is a short description for this dropdown',
            description: true
        }, {
            label: 'First',
            value: 'first',
            icon: 'fa-download'
        }, {
            label: 'Second',
            context: 'bad',
            icon: 'fa-share'
        }, {
            separator: true
        }, {
            label: 'Third',
            disabled: true,
            icon: 'fa-bookmark'
        }] }
    />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Dropdown with different context and alignment', () => {
        const wrapper = shallow(<Dropdown label={ 'Primary' } items={ [{
            label: 'First'
        }, {
            label: 'Second'
        }, {
            label: 'Third'
        }] } context="primary" dropUp alignLeft
    />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with multiple selection', () => {
        const wrapper = shallow(<Dropdown label={ 'Multiselect' } items={ [{
            label: 'First',
            value: 'first'
        }, {
            label: 'Second',
            value: 'second'
        }, {
            label: 'Third',
            value: 'third'
        }] } multiple />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with radios', () => {
        const wrapper = shallow(<Dropdown label={ 'Multiselect' } items={ [{
            label: 'First',
            value: 'first'
        }, {
            label: 'Second',
            value: 'second'
        }, {
            label: 'Third',
            value: 'third'
        }] } radios />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Dropdown with custom classname/style', () => {
        const wrapper = shallow(
            <Dropdown 
                className="my-custom-classname"
                style={{ right: 0 }}
                label={ 'Primary' } 
                items={ [{ label: 'First' }, { label: 'Second' }, { label: 'Third' }] }
                context="primary"
                dropUp
                alignLeft 
            />
        );

        expect(wrapper).toMatchSnapshot();
    });
});
