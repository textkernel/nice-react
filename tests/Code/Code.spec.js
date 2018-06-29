import React from 'react';
import { Code } from '../../dist';

describe('<Code />', () => {
    it('should render a Code block without heading', () => {
        const wrapper = shallow(<Code>
            { `{
    "some": "json"
}` }
        </Code>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a Code block with heading but no syntax', () => {
        const wrapper = shallow(<Code heading="Sample code block">
            { `{
    "some": "json"
}` }
        </Code>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a Code block with heading and syntax', () => {
        const wrapper = shallow(<Code heading="Sample code block" syntax="JSON">
            { `{
    "some": "json"
}` }
        </Code>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a Code block with custom context, size and icon', () => {
        const wrapper = shallow(<Code context="good" heading="Custom context" icon="icon fa-code" size="restrain-m">
            { `{
    "some": "json"
}` }
        </Code>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with a Code block with custom className/style', () => {
        const wrapper = shallow(
            <Code
                context="good"
                heading="Hello"
                icon="icon fa-code"
                className="my-custom-classname"
                style={{ left: 50 }}
            >
                { '{ some": "json" }' }
            </Code>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
