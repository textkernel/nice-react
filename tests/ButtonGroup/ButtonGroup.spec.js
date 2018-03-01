import React from 'react';
import { Button, ButtonGroup } from '../../lib/Button';

describe('<ButtonGroup />', () => {
    it('should render the Buttons inside ButtonGroup', () => {
        const wrapper = shallow(<ButtonGroup>
                <Button>
                        Button 1
                </Button>
                <Button>
                        Button 2
                </Button>
        </ButtonGroup>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a justified ButtonGroup', () => {
        const wrapper = shallow(<ButtonGroup justified>
                <Button href="#">Some</Button>
                <Button href="#">Justified</Button>
                <Button href="#">Buttons</Button>
        </ButtonGroup>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a stacked ButtonGroup', () => {
        const wrapper = shallow(<ButtonGroup stacked>
                <Button>Some</Button>
                <Button>Stacked</Button>
                <Button>Buttons</Button>
        </ButtonGroup>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a small ButtonGroup', () => {
        const wrapper = shallow(<ButtonGroup small>
                <Button>Some</Button>
                <Button>Stacked</Button>
                <Button>Buttons</Button>
        </ButtonGroup>);
        expect(wrapper).toMatchSnapshot();
    });
});
