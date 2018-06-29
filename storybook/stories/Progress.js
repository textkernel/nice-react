import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions, withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../src/props';

import { Progress } from 'nice-react';

const stories = storiesOf('Progress', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('with zero percent', () => (
    <Progress percentage={0} />
));

stories.add('with context', () => (
    <Progress percentage={80} context="accent" />
));

stories.add('with custom message', () => (
    <Progress percentage={80} context="good" message="Loading..." />
));

stories.add('with dynamic properties', () => {
    const contextOptions = props.contexts;
    const context = select('Context', contextOptions, props.contexts[0]);
    const message = text('Message', '');
    const percentage = number('Percentage', 50);

    return <Progress percentage={percentage} context={context} message={message} />
});
