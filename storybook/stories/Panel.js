import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Panel } from 'nice-react';

storiesOf('Panel', module)
  .add('empty', () => (
    <Panel> This is a panel without heading </Panel>
  ))
  .add('with title', () => (
    <Panel title={'My Panel'}> This panel has a heading </Panel>
  ))
  .add('with brand color', () => (
    <Panel title={'Very well'} color={'good'}> This is a good panel </Panel>
  ))
  .add('with inverse heading', () => (
    <Panel title={'Opss..'} color={'bad'} inverseHeading> This is a bad panel </Panel>
  ));;