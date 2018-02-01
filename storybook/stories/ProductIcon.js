import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions, withKnobs, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../lib/props';

import { ProductIcon } from 'nice-react';

const stories = storiesOf('Product Icon', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Product icon', () => {
    const product = select('Product', props.products, props.products[0]);
    const color = select('Color', props.textColors, props.textColors[0]);
    return <ProductIcon product={ product } className={ color } style={{ fontSize: '3em' }} />;
});
