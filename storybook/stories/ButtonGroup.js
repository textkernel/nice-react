import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Button, ButtonGroup } from 'nice-react';

const stories = storiesOf('ButtonGroup', module);
stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

const onClick = e => {
    alert('Click');
};

stories.add('Default', () => (
    <ButtonGroup>
        <Button onClick={ onClick }>
            Button 1
        </Button>
        <Button onClick={ onClick }>
            Button 2
        </Button>
    </ButtonGroup>
));

stories.add('Justified', () => (
    <ButtonGroup justified>
        <Button href="#">Some</Button>
        <Button href="#">Justified</Button>
        <Button href="#">Buttons</Button>
    </ButtonGroup>
));

stories.add('Stacked', () => (
    <ButtonGroup stacked>
        <Button>Some</Button>
        <Button>Stacked</Button>
        <Button>Buttons</Button>
    </ButtonGroup>
));

stories.add('Small', () => (
    <ButtonGroup size="small">
        <Button>Small</Button>
        <Button>Buttons</Button>
    </ButtonGroup>
));
