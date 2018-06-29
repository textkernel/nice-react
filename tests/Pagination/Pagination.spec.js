import React from 'react';
import { Pagination } from '../../dist';


describe('<Pagination />', () => {
    it('should render default Pagination', () => {
        const wrapper = shallow(<Pagination>
            <Pagination.Item disabled>&laquo; Previous</Pagination.Item>
            <Pagination.Item current>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Gap />
            <Pagination.Item>4</Pagination.Item>
            <Pagination.Item>5</Pagination.Item>
            <Pagination.Item>Next &raquo;</Pagination.Item>
        </Pagination>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render small Pagination', () => {
        const wrapper = shallow(<Pagination size="small">
            <Pagination.Item current>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Gap />
            <Pagination.Item>4</Pagination.Item>
            <Pagination.Item>5</Pagination.Item>
        </Pagination>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render large Pagination', () => {
        const wrapper = shallow(<Pagination size="large">
            <Pagination.Item current>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Gap />
            <Pagination.Item>4</Pagination.Item>
            <Pagination.Item>5</Pagination.Item>
        </Pagination>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render bordered Pagination', () => {
        const wrapper = shallow(<Pagination bordered>
            <Pagination.Item current>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Gap />
            <Pagination.Item>4</Pagination.Item>
            <Pagination.Item>5</Pagination.Item>
        </Pagination>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render Pagination with custom className/style', () => {
        const wrapper = shallow(
            <Pagination className="my-custom-class" style={{ top: 0 }}>
                <Pagination.Item current>1</Pagination.Item>
            </Pagination>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
