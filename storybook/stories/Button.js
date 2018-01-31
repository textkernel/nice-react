import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Button } from 'nice-react';

const stories = storiesOf('Button', module);
stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Default', () => (
    <Button onClick={() => alert('Default')}>Default</Button>
));

stories.add('Primary', () => (
    <Button context="primary">Primary</Button>
));

stories.add('Warning', () => (
    <Button context="warning">Warning</Button>
));

stories.add('Good', () => (
    <Button context="good">Good</Button>
));

stories.add('Bad', () => (
    <Button context="bad">Bad</Button>
));

stories.add('Large', () => (
    <Button size="large">Large</Button>
));

stories.add('Medium', () => (
    <Button size="medium">Medium</Button>
));

stories.add('Small', () => (
    <Button size="small">Small</Button>
));

stories.add('Link', () => (
    <Button size="link">Link</Button>
));

stories.add('Good with icon', () => (
    <Button context="good" icon="fa-check">Good with icon</Button>
));

stories.add('Alternative', () => (
    <Button alternative icon="fa-question">Alternative button</Button>
));
