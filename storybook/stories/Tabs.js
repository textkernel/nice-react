import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { withKnobsOptions, withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';

import { Tabs, Tab } from 'nice-react';
import niceProps from '../../lib/props';

const stories = storiesOf('Tabs', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Default', () => {
    const contextOptions = niceProps.contexts;

    const knobs = {
        small: boolean('Small', false),
        wrapped: boolean('Wrapped', false)
    }

    const tabItemKnobs = {
        context: select('Tab Context', contextOptions, niceProps.contexts[0]),
    }

    return (
        <Tabs {...knobs} onChangeTab={(tabIndex) => alert(`Tab ${tabIndex} selected!`)}>
            <Tab headerText="First" badge="56" icon="fa-home" {...tabItemKnobs}>
                <p>Tab number one</p>
            </Tab>
            <Tab headerText="Second Tab" icon="fa-angle-down" {...tabItemKnobs}>
                <p>Tab number two</p>
            </Tab>
            <Tab headerText="Third Tab" badge="4" {...tabItemKnobs}>
                <p>Tab number three</p>
            </Tab>
            <Tab headerText="Fourth Tab" {...tabItemKnobs}>
                <p>Tab number four</p>
            </Tab>
        </Tabs>
    );
});