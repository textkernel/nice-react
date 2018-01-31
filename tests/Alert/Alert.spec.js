import React from 'react';
import Alert from '../../lib/Alert';

describe('<Alert />', () => {
    it('should render the default Alert', () => {
        const wrapper = shallow(<Alert>
        <strong>Hey you!</strong> Here is some information
    </Alert>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Alert with heading', () => {
        const wrapper = shallow(<Alert heading="Warning" context="warning">
            <strong>Heads up</strong> This is a warning
        </Alert>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Alert with icon button', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Alert onClick={ onClickHandler } context="bad">
            <strong>Uh oh...</strong> Something is wrong
        </Alert>);
        expect(wrapper).toMatchSnapshot();

        wrapper.find('.nice-alert-dismiss').simulate('click', { preventDefault() {} });
        expect(onClickHandler).toHaveBeenCalled();
    });

    it('should render Alert with large button', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Alert onClick={ onClickHandler } context="good" buttonLabel="Dismiss">
            <strong>Great success</strong> All good!
        </Alert>);
        expect(wrapper).toMatchSnapshot();

        wrapper.find('.nice-alert-button').simulate('click', { preventDefault() {} });
        expect(onClickHandler).toHaveBeenCalled();
    });
});
