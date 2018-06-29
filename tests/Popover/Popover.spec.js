import React from 'react';
import { Popover } from '../../dist';

const onClick = jest.fn();

describe('<Popover />', () => {
    it('should render a Popover', () => {
        const wrapper = shallow(<Popover
            title="This is a popover"
            controls={ [{
                label: 'OK',
                className: 'text-bold',
                onClick
            }] }
            image="//placeholdit.imgix.net/~text?txtsize=33&txt=Image&w=125&h=100"
            context="info"
            position="bottom right"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat diam eget tortor facilisis, ut iaculis augue feugiat.
        </Popover>);
        expect(wrapper).toMatchSnapshot();
    });
});
