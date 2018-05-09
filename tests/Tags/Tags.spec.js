import React from 'react';
import { Tags, Tag } from '../../lib/Tag';

describe('<Tags /> <Tag />', () => {
    it('should render simple tag', () => {
        const wrapper = shallow(
            <Tags>
                <Tag>
                    <Tag.Label label="Germany" />
                </Tag>
            </Tags>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with badge without items', () => {
        const wrapper = shallow(
            <Tags>
                <Tag>
                    <Tag.Label label="Germany" />
                    <Tag.Badge label="16" />
                </Tag>
            </Tags>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with badge with items', () => {
        const wrapper = shallow(
            <Tags>
                <Tag>
                    <Tag.Label label="Germany" />
                    <Tag.Badge label="16">
                        <Tag.Badge.Item>Item 1</Tag.Badge.Item>
                        <Tag.Badge.Item>Item 2</Tag.Badge.Item>
                    </Tag.Badge>
                </Tag>
            </Tags>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with badge and button', () => {
        const wrapper = shallow(
            <Tags>
                <Tag>
                    <Tag.Label label="Germany" />
                    <Tag.Badge label="16">
                        <Tag.Badge.Item>Item 1</Tag.Badge.Item>
                        <Tag.Badge.Item>Item 2</Tag.Badge.Item>
                    </Tag.Badge>

                    <Tag.Button icon="fa-trash-o" />

                </Tag>
            </Tags>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with the input for new tags', () => {
        const wrapper = shallow(
            <Tags>
                <Tag>
                    <Tag.Label label="Germany" />
                </Tag>
                <Tags.Input placeholder="Add new tag..." />
            </Tags>
        );
        expect(wrapper).toMatchSnapshot();
    });

    
    it('should trigger onClick callback of Button', () => {
        const mockCallback = jest.fn();

        const wrapper = mount(
            <Tags>
                <Tag>
                    <Tag.Button onClick={mockCallback} icon="fa-trash-o" />
                </Tag>
            </Tags>
        );
        wrapper.find('button.nice-tag-btn').simulate('click', { preventDefault() {} });
        expect(mockCallback).toHaveBeenCalled();
    });


    it('should trigger onClick callback when clicks on Tag', () => {
        const mockCallback = jest.fn();

        const wrapper = mount(
            <Tags>
                <Tag onClick={mockCallback}>
                    <Tag.Label label="Germany" />
                </Tag>
            </Tags>
        );
        wrapper.find('div.nice-tag').simulate('click', { preventDefault() {} });
        expect(mockCallback).toHaveBeenCalled();
    });

    it('should trigger onClick callback when clicks on Tag Item', () => {
        const mockCallback = jest.fn();

        const wrapper = mount(
            <Tags>
                <Tag onClick={mockCallback}>
                    <Tag.Label label="Germany" />
                    <Tag.Badge label="16">
                        <Tag.Badge.Item onClick={mockCallback}> Item </Tag.Badge.Item>
                    </Tag.Badge>
                </Tag>
            </Tags>
        );
        wrapper.find('li a').simulate('click', { preventDefault() {} });
        expect(mockCallback).toHaveBeenCalled();
    });

    it('should trigger onClick callback when clicks on Tag Badge', () => {
        const mockCallback = jest.fn();

        const wrapper = mount(
            <Tags>
                <Tag onClick={mockCallback}>
                    <Tag.Label label="Germany" />
                    <Tag.Badge label="16" onClick={mockCallback}>
                        <Tag.Badge.Item> Item </Tag.Badge.Item>
                    </Tag.Badge>
                </Tag>
            </Tags>
        );
        wrapper.find('div.nice-tag-badge').simulate('click', { preventDefault() {} });
        expect(mockCallback).toHaveBeenCalled();
    });

});