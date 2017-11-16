import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from 'nice-react';

storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={() => alert('Default')}>Default</Button>
  ))
  .add('Primary', () => (
    <Button context="primary">Primary</Button>
  ))
  .add('Large', () => (
    <Button size="large">Large</Button>
  ))
  .add('Small', () => (
    <Button size="small">Small</Button>
  ));;