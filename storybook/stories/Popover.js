import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions, withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../src/props';

import { Popover } from 'nice-react';

const stories = storiesOf('Popover', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

const onClick = e => {
    e.preventDefault();
};

stories.add('Default popover', () => (
    <Popover
        title="This is a popover"
        controls={ [{
            label: 'OK',
            className: 'text-bold',
            onClick
        }] }
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat diam eget tortor facilisis, ut iaculis augue feugiat.
    </Popover>
));

stories.add('Custom properties', () => {
    const controls = [{
        label: 'Nice!',
        className: 'text-bold',
        onClick
    }, {
        label: 'Dismiss',
        onClick
    }];
    const hasControls = boolean('Controls', true);
    const hasContext = boolean('Use custom context', false);
    const context = hasContext && select('Context', props.popoverContexts);
    const image = text('Image URL', '//placeholdit.imgix.net/~text?txtsize=33&txt=Image&w=125&h=100');
    const title = text('Title', 'This is a popover');
    const content = text('Content', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat diam eget tortor facilisis, ut iaculis augue feugiat.');
    const position = text('Position', 'top left');

    return (<Popover title={ title } context={ context } image={ image } controls={ hasControls ? controls : null } position={ position }>
        { content }
    </Popover>);
});
