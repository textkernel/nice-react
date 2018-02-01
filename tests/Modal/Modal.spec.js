import React from 'react';
import Modal from '../../lib/Modal';

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

    it('should render a viewport centered Modal', () => {
        const mockCallback = jest.fn();
        const wrapper = shallow(<Modal context="info" viewportCenter tall wide>
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
