import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../src/props';

import { Card } from 'nice-react';

const stories = storiesOf('Cards', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

const onClick = e => {
    e.preventDefault();
};

stories.add('Default', () => {
    const title = text('Title', 'This is a card');
    const content = text('Content', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper nulla ac quam hendrerit pharetra.');
    const context = select('Context', props.cardContexts);
    const subs = number('Sub items', 2);
    const controls = boolean('Has controls', true);
    const image = boolean('Image', true) ? '//placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97150&w=300&h=150' : null;

    return (<Card
        title={ title }
        context={ context }
        controls={ controls ? [{
            label: 'OK',
            className: 'icon fa-check',
            onClick
        }, {
            label: 'Dismiss',
            disabled: true,
            onClick
        }] : null }
        image={ image }
        style={{
            float: 'none',
            width: '300px'
        }}
    >
        <Card.Content>
            { content }
        </Card.Content>
        {
            Array(subs).fill(0).map((v, k) => (
                <Card.Sub className="icon fa-reply" key={ k }>
                    In semper vel lectus sed finibus. Donec in erat risus. Aenean in lectus massa. Phasellus id malesuada arcu, vel ultricies enim.
                </Card.Sub>
            ))
        }
    </Card>);
});
