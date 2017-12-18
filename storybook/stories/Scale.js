import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Scale } from 'nice-react';

const stories = storiesOf('Scale', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));

stories.add('with all labels', () => {
  const items = [
    { label: 'Nice to have', value: 1 },
    { label: 'Good to have', value: 5 },
    { label: 'Must have', value: 10 }
  ];
  
  return <Scale items={items} onChange={ action('radio-click') } radioGroupName='projectid-radios' />
});

stories.add('omitting some labels', () => {
  const items = [
    { label: 'Nice to have', value: 1 },
    { label: 'Good to have', omitLabel: true, value: 5 },
    { label: 'Must have', value: 10 }
  ];
  
  return <Scale items={items} onChange={ action('radio-click') } radioGroupName='projectid-radios' />
});