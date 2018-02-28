import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Header } from 'nice-react';

const stories = storiesOf('Header', module);
stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Custom properties', () => {
    const product = text('Product', 'Nice! React Components');
    const svg = text('SVG logo (logo.svg)', '//nice.textkernel.nl/assets/textkernel.svg');
    const img = text('Logo (logo.img)', '//nice.textkernel.nl/assets/textkernel@2x.png');
    const width = number('Logo width (logo.width)', 172);
    const height = number('Logo height (logo.height)', 30);
    const title = text('Logo title (logo.title)', '');
    const href = text('Logo URL (logo.href)', '/');
    const fixed = boolean('Fixed header', false);
    const fluid = boolean('Fluid container layout', false);
    const placeholder = text('Input placeholder (form.placeholder)', 'Search...');
    const responsive = boolean('Responsive menu', true);
    const collapsed = !boolean('Menu is expanded', false);

    return (<Header logo={{
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
            <Header.Menu.Item label="Menu 1" context="primary" width="100">
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
            <Header.Menu.Item label="Menu 2" context="good" width="100">
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
});
