import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../lib/props';

import { Button, Toggle } from 'nice-react';

const stories = storiesOf('Toggle', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Custom properties', () => {
    const contextOptions = props.toggleContexts;
    const context = select('Context', contextOptions, 'primary');
    const disabled = boolean('Disabled', false);
    const defaultOn = boolean('Initially switched on', false);
    const small = boolean('Small', false);
    const label = text('Label', '');
    const offMuted = boolean('Muted label when switched off', false);

    return <Toggle
        id="myToggle"
        context={ context }
        disabled={ disabled }
        defaultOn={ defaultOn }
        offMuted={ offMuted }
        small={ small }
    >
        { label }
    </Toggle>;
});

stories.add('Controlled component', () => {
    const on = boolean('On', true);

    return <Toggle
        id="myToggleControlled"
        on={ on }
    >
        Manage state externally
    </Toggle>;
});
