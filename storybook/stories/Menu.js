import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions, withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Menu } from 'nice-react';

const stories = storiesOf('Menu', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

const onClick = e => {
    e.preventDefault();
};

stories.add('Default (horizontal)', () => (
    <Menu>
        <Menu.Item className="icon fa-home" label="Home" onClick={ onClick } current />
        <Menu.Item className="icon fa-map-pin" label="Cities" onClick={ onClick } />
        <Menu.Item label="Regions" onClick={ onClick } />
        <Menu.Item className="icon fa-globe" label="Countries" onClick={ onClick } disabled />
    </Menu>
));

stories.add('Stacked & Narrow', () => (
    <Menu stacked narrow icons>
        <Menu.Item className="icon fa-home" label="Home" onClick={ onClick } current />
        <Menu.Item className="icon fa-map-pin" onClick={ onClick } label="Cities">
            <Menu.Item label="Amsterdam" onClick={ onClick } />
            <Menu.Item label="Paris" onClick={ onClick } />
            <Menu.Item label="Berlin" onClick={ onClick } disabled />
            <Menu.Item label="Rome" onClick={ onClick } />
            <Menu.Item label="Madrid" onClick={ onClick } />
        </Menu.Item>
        <Menu.Item label="Regions" onClick={ onClick } />
        <Menu.Item className="icon fa-globe" label="Countries" disabled onClick={ onClick } />
    </Menu>
));

stories.add('Custom properties', () => {
    const stacked = boolean('Stacked', false);
    const narrow = boolean('Narrow', false);
    const icons = stacked && boolean('Has icons (only if stacked)', true);
    const items = number('Number of items', 5);
    const currentItem = number('Current item', 1);

    return (<Menu stacked={ stacked } narrow={ narrow } icons={ icons }>
        {
            Array(items).fill(0).map((v, k) => (
                <Menu.Item current={ currentItem && k + 1 === currentItem } onClick={ onClick } label={ `Menu item ${ k + 1 }` } />
            ))
        }
    </Menu>);
});
