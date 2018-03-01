import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Button } from 'nice-react';
import props from '../../lib/props';

const stories = storiesOf('Button', module);
stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Default', () => (
    <Button onClick={() => alert('Default')}>Default</Button>
));

stories.add('Render a-tag instead of button', () => (
    <Button onClick={() => alert('Default')} href="http://textkernel.com">
        Default
    </Button>
));

stories.add('Link', () => (
    <Button context="link" href="#">Link</Button>
));

stories.add('Alternative', () => (
    <Button alternative icon="fa-question">Alternative button</Button>
));

stories.add('Custom properties', () => {
    const { buttonContexts: contexts, buttonSizes: sizes } = props;
    const context = select('Context', contexts, contexts[0]);
    const size = select('Size', sizes, sizes[1]);
    const icon = text('Icon', '');
    const href = text('Href (will turn it into an a-tag', '');

    return (<Button context={ context } size={ size } icon={ icon } href={ href }>
        I'm a button
    </Button>);
});
