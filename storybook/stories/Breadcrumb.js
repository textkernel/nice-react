import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Breadcrumb } from 'nice-react';

const stories = storiesOf('Breadcrumb', module);
stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('with items', () => (
    <Breadcrumb>
        <Breadcrumb.Item text='Level 1' />
        <Breadcrumb.Item text='Level 2' />
        <Breadcrumb.Item text='Level 3' />
    </Breadcrumb>
));

stories.add('with icons', () => (
    <Breadcrumb>
        <Breadcrumb.Item icon='fa-home'  text='Level 1' />
        <Breadcrumb.Item icon='fa-star'  text='Level 2' />
        <Breadcrumb.Item icon='fa-truck' text='Level 3' />
    </Breadcrumb>
));

stories.add('with one item selected as current', () => (
    <Breadcrumb>
        <Breadcrumb.Item icon='fa-home'  text='Level 1' />
        <Breadcrumb.Item text='Level 2' />
        <Breadcrumb.Item text='Level 3' current />
    </Breadcrumb>
));

stories.add('with child nodes', () => (
    <Breadcrumb>
        <Breadcrumb.Item icon='fa-home'  text='Level 1' />
        <Breadcrumb.Item text='Level 2'>
            <Breadcrumb.Item text='Some child node 1' />
            <Breadcrumb.Item text='Some child node 2' />
        </Breadcrumb.Item>
        <Breadcrumb.Item text='Level 3' />
    </Breadcrumb>
));

stories.add('with onClick', () => (
    <Breadcrumb>
        <Breadcrumb.Item text='Level 1' value='level-1' onClick={value => alert(value)} />
        <Breadcrumb.Item text='Level 2' value='level-2' onClick={value => alert(value)} />
        <Breadcrumb.Item text='Level 3' value='level-3' onClick={value => alert(value)} />
    </Breadcrumb>
));
