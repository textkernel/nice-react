import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Tags, Tag } from 'nice-react';

const stories = storiesOf('Tag', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));

stories.add('normal tag', () => {
    return (
        <Tags>

            <Tag onClick={() => alert('Clicked on tag')}>

                <Tag.Label label='Germany' />

                <Tag.Badge label='16'>
                    <Tag.Badge.Item> Item </Tag.Badge.Item>
                </Tag.Badge>

                <Tag.Button onClick={() => alert('Clicked on button')} icon='fa-trash-o' />

            </Tag>

            <Tags.Input placeholder='Add new tag...'/>

        </Tags>
    );
});