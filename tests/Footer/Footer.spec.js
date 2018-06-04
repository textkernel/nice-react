import React from 'react';
import Footer from '../../lib/Footer';

describe('<Footer />', () => {
    it('should render a default Footer', () => {
        const wrapper = shallow(<Footer copyright>
            <Footer.Link className="icon fa-balance-scale" href="https://github.com/textkernel/nice/blob/master/LICENSE" target="_blank">
                Project License
            </Footer.Link>
            <Footer.Link className="icon fa-github" href="https://github.com/textkernel/nice/" target="_blank">
                Source
            </Footer.Link>
            <Footer.Link className="additional-icon fw frontify" href="https://app.frontify.com/d/apB5ernOJZzj/textkernel-branding-guideline" target="_blank">
                Brand Guidelines
            </Footer.Link>
            <Footer.Link className="product-icon textkernel" href="http://textkernel.com" target="_blank">
                Textkernel
            </Footer.Link>
        </Footer>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a fluid Footer without copyright', () => {
        const wrapper = shallow(<Footer fluid>
            <Footer.Link>
                Test
            </Footer.Link>
        </Footer>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a Footer with custom classes / styles', () => {
        const wrapper = shallow(<Footer className="test" style={{ display: 'none' }}>
            <Footer.Link>
                Test
            </Footer.Link>
        </Footer>);
        expect(wrapper).toMatchSnapshot();
    });
});
