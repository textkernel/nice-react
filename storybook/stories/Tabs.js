import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Tabs, Tab } from 'nice-react';

const stories = storiesOf('Tabs', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));

stories.add('Simple tabs', () => {
    return (
        <Tabs>
            <Tab badge="56" icon="fa-home" headerText="First">
                <p>Tab number zero</p>
            </Tab>
            <Tab headerText="Second Tab">
                <p>Tab number two</p>
            </Tab>
            <Tab headerText="Third Tab">
                <p>Tab number three</p>
            </Tab>
        </Tabs>
    );
});