import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions, withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Panel } from 'nice-react';

const stories = storiesOf('Panel', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('with content', () => (
    <Panel> This is a panel without heading </Panel>
));

stories.add('with title', () => (
    <Panel title={'My Panel'}> This panel has a heading </Panel>
));

stories.add('with brand context', () => (
    <Panel title={'Very well'} context={'good'}> This is a good panel </Panel>
));

stories.add('with inverse heading', () => (
    <Panel title={'Opss..'} context={'bad'} inverseHeading> This is a bad panel </Panel>
));

stories.add('with dynamic properties', () => {
    const title = text('Title', 'My beautiful panel');
    const inverseHeading = boolean('Inverse Heading', false);
    
    const contextOptions = {
        brand: 'brand',
        primary: 'primary',
        info: 'info',
        good: 'good',
        warning: 'warning',
        bad: 'bad',
        gray: 'gray'
    };
    const context = select('Context', contextOptions, 'brand');

    return <Panel title={title} context={context} inverseHeading={inverseHeading}> This is a panel without heading </Panel>;
});
