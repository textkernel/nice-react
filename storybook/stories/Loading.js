import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../src/props';

import { Loading } from 'nice-react';

const stories = storiesOf('Loading', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('with default loader', () => (
    <Loading />
));

stories.add('with big size', () => (
    <Loading size="large" />
));

stories.add('with medium size and context "good"', () => (
    <Loading size="medium" context="good" />
));

stories.add('with dynamic properties', () => {
    const context = select('Context', props.contexts, props.contexts[0]);
    const size = select('Size', props.sizes, props.sizes[0]);
    const hidden = boolean('Hidden', false);

    return (<Loading
        size={ size }
        context={ context }
        hidden={ hidden }
    />);
});