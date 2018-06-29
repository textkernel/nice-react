import React from 'react';
import { Modal } from '../../dist';

describe('<Modal />', () => {
    it('should render a simple Modal', () => {
        const wrapper = shallow(<Modal context="info">
            <Modal.Header>
                Modal header
            </Modal.Header>
            <Modal.Sub>
                Modal sub header
            </Modal.Sub>
            <Modal.Content>
                Modal content
            </Modal.Content>
            <Modal.Footer>
                Modal footer
            </Modal.Footer>
        </Modal>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a Modal with custom classNames/styles', () => {
        const props = { 
            className: 'my-custom-classname',
            style: { top: 0 }
        };

        const wrapper = render(
            <Modal context="info" {...props}>
                <Modal.Header {...props}>
                    Modal header
                </Modal.Header>
                <Modal.Sub {...props}>
                    Modal sub header
                </Modal.Sub>
                <Modal.Content {...props}>
                    Modal content
                </Modal.Content>
                <Modal.Footer {...props}>
                    Modal footer
                </Modal.Footer>
            </Modal>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a hidden, viewport centered Modal with overlay', () => {
        const mockCallback = jest.fn();
        const wrapper = shallow(<Modal context="info" viewportCenter overlay tall wide hidden>
            <Modal.Header onClose={ mockCallback }>
                Modal header
            </Modal.Header>
            <Modal.Sub>
                Modal sub header
            </Modal.Sub>
            <Modal.Content>
                Modal content
            </Modal.Content>
            <Modal.Footer>
                Modal footer
            </Modal.Footer>
        </Modal>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a styled Modal', () => {
        const mockCallback = jest.fn();
        const wrapper = shallow(<Modal context="info" style={{ width: '600px', height: '600px' }}>
            <Modal.Header onClose={ mockCallback }>
                Modal header
            </Modal.Header>
            <Modal.Sub>
                Modal sub header
            </Modal.Sub>
            <Modal.Content>
                Modal content
            </Modal.Content>
            <Modal.Footer>
                Modal footer
            </Modal.Footer>
        </Modal>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Modal.Header', () => {
        const mockCallback = jest.fn();
        const wrapper = shallow(<Modal.Header onClose={ mockCallback }>
            Modal header
        </Modal.Header>);
        expect(wrapper).toMatchSnapshot();

        wrapper.find('a.nice-modal-close').simulate('click', { preventDefault() {} });
        expect(mockCallback).toHaveBeenCalled();
    });

    it('should render Modal.Content', () => {
        const wrapper = shallow(<Modal.Content>
            Modal content
        </Modal.Content>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Modal.Footer', () => {
        const wrapper = shallow(<Modal.Footer>
            Modal footer
        </Modal.Footer>);
        expect(wrapper).toMatchSnapshot();
    });
});
