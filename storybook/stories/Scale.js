import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { ScaleGroup, ScaleItem } from 'nice-react';

const stories = storiesOf('Scale', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));

stories.add('with all labels', () => {
    return (
      <ScaleGroup name='projectid-radios' onChange={ action('radio-click') }> 
        <ScaleItem label='Nice to have' value={1} />
        <ScaleItem label='Good to have' value={5} />
        <ScaleItem label='Must have' value={10} />
      </ScaleGroup>
    );
});

stories.add('without one label', () => {
    return (
      <ScaleGroup name='projectid-radios' onChange={ action('radio-click') }> 
        <ScaleItem label='Nice to have' value={1} />
        <ScaleItem value={5} />
        <ScaleItem label='Must have' value={10} />
      </ScaleGroup>
    );
});

stories.add('without tick labels', () => {
    return (
      <ScaleGroup name='projectid-radios' tickLabels={false} onChange={ action('radio-click') }> 
        <ScaleItem label='Nice to have' value={1} />
        <ScaleItem value={5} />
        <ScaleItem label='Must have' value={10} />
      </ScaleGroup>
    );
});
  

stories.add('with custom classes over items', () => {
    const items = [
        { label: 'Nice to have', value: 1, className: 'text-bold' },
        { label: 'Good to have', value: 5, className: 'text-bold text-italic' },
        { label: 'Must have', value: 10, className: 'text-uppercase text-brand' }
    ];
    
    return (
      <ScaleGroup name='projectid-radios' tickLabels={false} onChange={ action('radio-click') }> 
        <ScaleItem label='Nice to have' value={1} className='text-bold'/>
        <ScaleItem value={5} className='text-bold text-italic' />
        <ScaleItem label='Must have' value={10} className='text-uppercase text-brand' />
      </ScaleGroup>
    );
});

stories.add('with custom classes over outermost element', () => {
    const items = [
        { label: 'Nice to have', value: 1 },
        { label: 'Good to have', value: 5 },
        { label: 'Must have', value: 10 }
    ];
    
    return (
      <ScaleGroup name='projectid-radios' className='nice-bg-info' onChange={ action('radio-click') }> 
        <ScaleItem label='Nice to have' value={1} />
        <ScaleItem value={5} />
        <ScaleItem label='Must have' value={10} />
      </ScaleGroup>
    );
});