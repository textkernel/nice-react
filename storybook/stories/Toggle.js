import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../lib/props';

import { Toggle } from 'nice-react';

const stories = storiesOf('Toggle', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Custom properties', () => {
    const contextOptions = props.toggleContexts;
    const context = select('Context', contextOptions, null);
    const disabled = boolean('Disabled', false);
    const on = boolean('On', false);
    const small = boolean('Small', false);
    const label = text('Label', '');
    const offMuted = boolean('Muted label when switched off', false);

    return <Toggle context={ context } disabled={ disabled } on={ on } offMuted={ offMuted } small={ small }>
        { label }
    </Toggle>;
});
