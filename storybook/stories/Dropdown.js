import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions, withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import niceProps from '../../src/props';

import { Dropdown } from 'nice-react';

const stories = storiesOf('Dropdown', module);
stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Default', () => {
    const contextOptions = niceProps.contexts;
    const context = select('Context', contextOptions, niceProps.contexts[0]);
    const radios = boolean('Radios', false);
    const multiple = boolean('Multiselect', false);
    const label = text('Label', 'Regular Dropdown');
    const dropUp = boolean('Drop-up', false);
    const alignLeft = boolean('Align left', false);
    const timeout = number('autoHide', 3000);

    return <Dropdown label={ label } items={[{
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
    }]} onSelect={ selection => window.alert(selection) } context={ context } autoHide={ timeout } radios={ radios } multiple={ multiple } dropUp={ dropUp } alignLeft={ alignLeft } />
});

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
        value: 'second',
        context: 'bad'
    }, {
        separator: true
    }, {
        label: 'Third',
        disabled: true
    }]} onCollapse={ selection => window.alert(selection) } defaultSelection={ ['first'] } autoHide={ false } multiple />
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
        value: 'second',
        context: 'bad'
    }, {
        separator: true
    }, {
        label: 'Third',
        disabled: true
    }]} onSelect={ selection => window.alert(selection) } radios />
));
