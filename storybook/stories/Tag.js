import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { Tag } from 'nice-react';

const stories = storiesOf('Tag', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));

stories.add('normal tag', () => {
    return (
      <Tag>

        <Tag.Item onClick={() => alert('Clicked on tag')}>
          
          <Tag.Label> Germany </Tag.Label>

          <Tag.Badge label='16'>

            <Tag.Badge.Dropdown>
                <ul>
                    <li> <a href="#"> Item 1 </a> </li>
                    <li> <a href="#"> Item 2 </a> </li>
                    <li> <a href="#"> Item 3 </a> </li>
                    <li> <a href="#"> Item 4 </a> </li>
                    <li> <a href="#"> Item 5 </a> </li>
                    <li> <a href="#"> Item 6 </a> </li>
                    <li> <a href="#"> Item 7 </a> </li>
                    <li> <a href="#"> Item 8 </a> </li>
                    <li> <a href="#"> Item 9 </a> </li>
                    <li> <a href="#"> Item 10 </a> </li>
                    <li> <a href="#"> Item 11 </a> </li>
                </ul>
            </Tag.Badge.Dropdown>

          </Tag.Badge>

          <Tag.Button onClick={() => alert('Clicked on button')} icon='fa-trash-o' />

        </Tag.Item>
        
      </Tag>
    );
});