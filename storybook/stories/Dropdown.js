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
  <Dropdown label="Regular Dropdown" items={[{
    label: 'This is a dropdown heading',
    heading: true
  }, {
    label: 'This is a short description for this dropdown',
    description: true
  }, {
    label: 'First',
    value: 'first',
    icon: 'fa-download'
  }, {
    label: 'Second',
    context: 'bad',
    icon: 'fa-share'
  }, {
    separator: true
  }, {
    label: 'Third',
    disabled: true,
    icon: 'fa-bookmark'
  }]} onSelect={ selection => console.log(selection) } context="brand" autoHide={ 3000 } />
));

stories.add('Multiple', () => (
  <Dropdown label="Multiselect Checkboxes" items={[{
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
  }]} onSelect={ selection => console.log(selection) } defaultSelection={ ['first'] } autoHide={ false } multiple />
));

stories.add('Radios', () => (
  <Dropdown label="Radio Select" items={[{
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
  }]} onSelect={ selection => console.log(selection) } radios />
));