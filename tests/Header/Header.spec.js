import React from 'react';
import Header from '../../lib/Header';

const product = 'Nice! React Components';
const svg = '//nice.textkernel.nl/assets/textkernel.svg';
const img = '//nice.textkernel.nl/assets/textkernel@2x.png';
const width = 170;
const height = 30;
const title = 'Nice! React Components';
const href = '/';
const fixed = true;
const fluid = true;
const placeholder = 'Search...';
const responsive = true;
const collapsed = true;

describe('<Header />', () => {
    it('should render default Header', () => {
        const wrapper = shallow(<Header logo={{
            svg,
            img,
            href,
            width,
            height,
            title
        }}
        form={{
            placeholder,
            onSubmit: value => {
                window.alert(value);
                return false;
            }
        }}
        collapsed={ collapsed }
        responsive={ responsive }
        fixed={ fixed }
        fluid={ fluid }
        product={ product }
    >
        <Header.Menu>
            <Header.Menu.Item label="Menu 1" context="primary" width="125">
                <Header.Menu.Item label="Item 1" />
                <Header.Menu.Item label="Item 2" />
                <Header.Menu.Item label="Item 3">
                    <Header.Menu.Item label="Item 3.1" />
                    <Header.Menu.Item label="Item 3.2" />
                    <Header.Menu.Item label="Item 3.3" />
                    <Header.Menu.Item label="Item 3.4" />
                </Header.Menu.Item>
                <Header.Menu.Item label="Item 4" />
            </Header.Menu.Item>
            <Header.Menu.Item label="Menu 2" context="good" width="125">
                <Header.Menu.Item label="Item 1" />
                <Header.Menu.Item label="Item 2" />
                <Header.Menu.Item label="Item 3">
                    <Header.Menu.Item label="Item 3.1" />
                    <Header.Menu.Item label="Item 3.2" />
                    <Header.Menu.Item label="Item 3.3" />
                    <Header.Menu.Item label="Item 3.4" />
                </Header.Menu.Item>
                <Header.Menu.Item label="Item 4" />
            </Header.Menu.Item>
            <Header.Menu.Item label="Textkernel" href="https://textkernel.com" target="_blank" context="brand" width="125" className="product-icon textkernel" />
        </Header.Menu>
        <Header.Menu alternate>
            <Header.Menu.Item label="Alternate 1">
                <Header.Menu.Item label="Item 1" />
                <Header.Menu.Item label="Item 2" />
            </Header.Menu.Item>
            <Header.Menu.Item label="Alternate 2">
                <Header.Menu.Item label="Item 1" />
                <Header.Menu.Item label="Item 2" />
            </Header.Menu.Item>
        </Header.Menu>
    </Header>);
        expect(wrapper).toMatchSnapshot();
    });
});
