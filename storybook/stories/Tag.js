import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions, withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../lib/props';

import { Tags, Tag } from 'nice-react';


const stories = storiesOf('Tag', module);


stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);


stories.add('Default', () => {
    return (
        <Tags>
            <Tag>
                <Tag.Label label='Netherlands' />
            </Tag>
        </Tags>
    );
});


stories.add('with input', () => {
    return (
        <Tags>
            <Tag>
                <Tag.Label label='Netherlands' />
            </Tag>
            <Tags.Input placeholder='Add new tag...' />
        </Tags>
    );
});


stories.add('with button', () => {
    return (
        <Tags>
            <Tag>
                <Tag.Label label='Netherlands' />
                <Tag.Button icon='fa-trash-o' />
            </Tag>
        </Tags>
    );
});


stories.add('with badge', () => {
    return (
        <Tags>
            <Tag>
                <Tag.Label label='Netherlands' />
                <Tag.Badge label='8' />
            </Tag>
        </Tags>
    );
});


stories.add('with badge and sub-items', () => {
    return (
        <Tags>
            <Tag>
                <Tag.Label label='Netherlands' />
                <Tag.Badge label='8'>
                    <Tag.Badge.Item>Item 1</Tag.Badge.Item>
                    <Tag.Badge.Item>Item 2</Tag.Badge.Item>
                </Tag.Badge>
            </Tag>
        </Tags>
    );
});


stories.add('with badge/sub-items and button', () => {
    return (
        <Tags>
            <Tag>
                <Tag.Label label='Netherlands' />
                <Tag.Badge label='8'>
                    <Tag.Badge.Item>Item 1</Tag.Badge.Item>
                    <Tag.Badge.Item>Item 2</Tag.Badge.Item>
                </Tag.Badge>
                <Tag.Button icon='fa-trash-o' />
            </Tag>
        </Tags>
    );
});


stories.add('with dynamic properties', () => {
    const contextOptions = props.tagContexts;
    const label = text('Tag Label', 'Netherlands');
    const badgeLabel = text('Badge Label', '10');
    const context = select('Context', contextOptions, contextOptions[0]);
    const showButton = boolean('Show Button', true);
    const showBadge = boolean('Show Badge', true);


    return (
        <Tags>
            <Tag context={context}>
                <Tag.Label label={label} />
                { showBadge && 
                    <Tag.Badge label={badgeLabel}>
                        <Tag.Badge.Item>Item 1</Tag.Badge.Item>
                        <Tag.Badge.Item>Item 2</Tag.Badge.Item>
                    </Tag.Badge>
                }
                { showButton && <Tag.Button icon='fa-trash-o' /> }
            </Tag>
        </Tags>
    );
});