import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Scale } from 'nice-react';

const stories = storiesOf('Scale', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));

stories.add('with all labels', () => {
    return (
      <Scale name='projectid-radios' onChange={ action('radio-click') }> 
        <Scale.Item label='Nice to have' value={1} />
        <Scale.Item label='Good to have' value={5} />
        <Scale.Item label='Must have' value={10} />
      </Scale>
    );
});

stories.add('without one label', () => {
    return (
      <Scale name='projectid-radios' onChange={ action('radio-click') }> 
        <Scale.Item label='Nice to have' value={1} />
        <Scale.Item value={5} />
        <Scale.Item label='Must have' value={10} />
      </Scale>
    );
});

stories.add('as controlled component', () => {
  return (
    <Scale name='projectid-radios' value={5} onChange={ action('radio-click') }> 
      <Scale.Item label='Nice to have' value={1} />
      <Scale.Item label='Good to have' value={5} />
      <Scale.Item label='Must have' value={10} />
    </Scale>
  );
});

stories.add('without tick labels', () => {
    return (
      <Scale name='projectid-radios' tickLabels={false} onChange={ action('radio-click') }> 
        <Scale.Item label='Nice to have' value={1} />
        <Scale.Item value={5} />
        <Scale.Item label='Must have' value={10} />
      </Scale>
    );
});
  

stories.add('with custom classes over items', () => {
    const items = [
        { label: 'Nice to have', value: 1, className: 'text-bold' },
        { label: 'Good to have', value: 5, className: 'text-bold text-italic' },
        { label: 'Must have', value: 10, className: 'text-uppercase text-brand' }
    ];
    
    return (
      <Scale name='projectid-radios' tickLabels={false} onChange={ action('radio-click') }> 
        <Scale.Item label='Nice to have' value={1} className='text-bold'/>
        <Scale.Item value={5} className='text-bold text-italic' />
        <Scale.Item label='Must have' value={10} className='text-uppercase text-brand' />
      </Scale>
    );
});

stories.add('with custom classes over outermost element', () => {
    const items = [
        { label: 'Nice to have', value: 1 },
        { label: 'Good to have', value: 5 },
        { label: 'Must have', value: 10 }
    ];
    
    return (
      <Scale name='projectid-radios' className='text-uppercase' onChange={ action('radio-click') }> 
        <Scale.Item label='Nice to have' value={1} />
        <Scale.Item value={5} />
        <Scale.Item label='Must have' value={10} />
      </Scale>
    );
});