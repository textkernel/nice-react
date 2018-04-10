import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Tabs, Tab } from 'nice-react';

const stories = storiesOf('Tabs', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));

stories.add('Simple tabs', () => {
    return (
        <Tabs onChangeTab={(tabIndex) => alert(`Tab ${tabIndex} selected!`)}>
            <Tab headerText="First" badge="56" icon="fa-home">
                <p>Tab number zero</p>
            </Tab>
            <Tab headerText="Second Tab" icon="fa-angle-down">
                <p>Tab number two</p>
            </Tab>
            <Tab headerText="Third Tab" badge="4">
                <p>Tab number three</p>
            </Tab>
            <Tab headerText="Fourth Tab">
                <p>Tab number four</p>
            </Tab>
        </Tabs>
    );
});