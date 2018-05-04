import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Tags } from 'nice-react';

const stories = storiesOf('Tag', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));

stories.add('normal tag', () => {
    return (
        <Tags>

            <Tags.Tag onClick={() => alert('Clicked on tag')}>

                <Tags.Tag.Label label='Germany' />

                <Tags.Tag.Badge label='16'>
                    <Tags.Tag.Badge.Item> Item </Tags.Tag.Badge.Item>
                </Tags.Tag.Badge>

                <Tags.Tag.Button onClick={() => alert('Clicked on button')} icon='fa-trash-o' />

            </Tags.Tag>

            <Tags.Input placeholder='Add new tag...'/>

        </Tags>
    );
});