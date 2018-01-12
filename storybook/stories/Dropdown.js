import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Dropdown } from 'nice-react';

const stories = storiesOf('Dropdown', module);
stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Dropdown label="Nice dropdown" items={[{
    label: 'This is a dropdown heading',
    heading: true
  }, {
    label: 'This is a short description for this dropdown',
    description: true
  }, {
    label: 'First',
    value: 'first'
  }, {
    label: 'Second',
    context: 'bad'
  }, {
    separator: true
  }, {
    label: 'Third',
    disabled: true
  }]} onSelect={ selection => console.log(selection) } defaultSelection={ ['first'] } multiple>
  </Dropdown>
));

stories.add('Primary', () => (
  <Dropdown context="primary" label="Primary"></Dropdown>
));