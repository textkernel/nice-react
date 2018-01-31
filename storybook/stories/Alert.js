import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions, withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../lib/props';

import { Alert } from 'nice-react';

const stories = storiesOf('Alert', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Default', () => (
    <Alert>
    	<strong>Hey you!</strong> Here is some information
    </Alert>
));

stories.add('With heading', () => (
    <Alert heading="Warning" context="warning">
    	<strong>Heads up</strong> This is a warning
    </Alert>
));

stories.add('Dismissable', () => (
    <Alert onClick={ () => { alert('dismiss'); }} context="bad">
    	<strong>Uh oh...</strong> Something is wrong
    </Alert>
));

stories.add('With button', () => (
    <Alert onClick={ () => { alert('dismiss'); }} context="good" buttonLabel="Dismiss">
    	<strong>Great success</strong> All good!
    </Alert>
));

stories.add('Custom properties', () => {
    const contextOptions = props.alertContexts;
    const context = select('Context', contextOptions, props.alertContexts[0]);
    const message = text('Message', 'Change me');
    const heading = text('Heading', '');
    const buttonLabel = text('Button label', '');

    return <Alert context={ context } heading={ heading } buttonLabel={ buttonLabel } onClick={ () => {} }>
    	{ message }
    </Alert>
});
