import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Button, ButtonGroup } from 'nice-react';

const stories = storiesOf('ButtonGroup', module);
stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Single Button', () => (
  <ButtonGroup>
    <Button onClick={() => alert('Single')}>Single</Button>
  </ButtonGroup>
));

stories.add('Justified', () => (
  <ButtonGroup position="justified">
    <Button>Some</Button>
    <Button>Justified</Button>
    <Button>Buttons</Button>
  </ButtonGroup>
));

stories.add('Stacked', () => (
  <ButtonGroup position="stacked">
    <Button>Some</Button>
    <Button>Stacked</Button>
    <Button>Buttons</Button>
  </ButtonGroup>
));