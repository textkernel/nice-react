import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { BreadcrumbGroup, BreadcrumbItem } from 'nice-react';

const stories = storiesOf('Breadcrumbs', module);
stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('with items', () => (
  <BreadcrumbGroup>
    <BreadcrumbItem text='Level 1' />
    <BreadcrumbItem text='Level 2' />
    <BreadcrumbItem text='Level 3' />
  </BreadcrumbGroup>
));

stories.add('with icons', () => (
  <BreadcrumbGroup>
    <BreadcrumbItem icon='fa-home'  text='Level 1' />
    <BreadcrumbItem icon='fa-star'  text='Level 2' />
    <BreadcrumbItem icon='fa-truck' text='Level 3' />
  </BreadcrumbGroup>
));

stories.add('with one item selected as current', () => (
  <BreadcrumbGroup>
    <BreadcrumbItem icon='fa-home'  text='Level 1' />
    <BreadcrumbItem text='Level 2' />
    <BreadcrumbItem text='Level 3' current />
  </BreadcrumbGroup>
));

stories.add('with child nodes', () => (
  <BreadcrumbGroup>
    <BreadcrumbItem icon='fa-home'  text='Level 1' />
    <BreadcrumbItem text='Level 2'>
      <BreadcrumbItem text='Some child node 1' />
      <BreadcrumbItem text='Some child node 2' />
    </BreadcrumbItem>
    <BreadcrumbItem text='Level 3' />
  </BreadcrumbGroup>
));

stories.add('with onClick', () => (
  <BreadcrumbGroup>
    <BreadcrumbItem text='Level 1' value='level-1' onClick={value => alert(value)} />
    <BreadcrumbItem text='Level 2' value='level-2' onClick={value => alert(value)} />
    <BreadcrumbItem text='Level 3' value='level-3' onClick={value => alert(value)} />
  </BreadcrumbGroup>
));
