import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions, withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../src/props';

import { Pagination } from 'nice-react';

const stories = storiesOf('Pagination', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Default', () => (
    <Pagination>
        <Pagination.Item disabled>&laquo; Previous</Pagination.Item>
        <Pagination.Item current onClick={ () => { window.alert(1); }}>1</Pagination.Item>
        <Pagination.Item onClick={ () => { window.alert(2); }}>2</Pagination.Item>
        <Pagination.Item onClick={ () => { window.alert(3); }}>3</Pagination.Item>
        <Pagination.Item onClick={ () => { window.alert(4); }}>4</Pagination.Item>
        <Pagination.Item onClick={ () => { window.alert(5); }}>5</Pagination.Item>
        <Pagination.Item>Next &raquo;</Pagination.Item>
    </Pagination>
));

stories.add('Bordered', () => (
    <Pagination bordered>
        <Pagination.Item disabled>&laquo; Previous</Pagination.Item>
        <Pagination.Item current>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>5</Pagination.Item>
        <Pagination.Item>Next &raquo;</Pagination.Item>
    </Pagination>
));

stories.add('With gap', () => (
    <Pagination bordered>
        <Pagination.Item disabled>&laquo; Previous</Pagination.Item>
        <Pagination.Item current>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Gap />
        <Pagination.Item>9</Pagination.Item>
        <Pagination.Item>10</Pagination.Item>
        <Pagination.Item>Next &raquo;</Pagination.Item>
    </Pagination>
));

stories.add('Small', () => (
    <Pagination size="small">
        <Pagination.Item disabled>&laquo; Previous</Pagination.Item>
        <Pagination.Item current>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>5</Pagination.Item>
        <Pagination.Item>Next &raquo;</Pagination.Item>
    </Pagination>
));

stories.add('Large', () => (
    <Pagination size="large">
        <Pagination.Item disabled>&laquo; Previous</Pagination.Item>
        <Pagination.Item current>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Item>4</Pagination.Item>
        <Pagination.Item>5</Pagination.Item>
        <Pagination.Item>Next &raquo;</Pagination.Item>
    </Pagination>
));

stories.add('Custom properties', () => {
    const sizes = select('Size', props.paginationSizes);
    const bordered = boolean('Bordered', false);
    const prevDisabled = !boolean('Previous enabled', false);
    const nextDisabled = !boolean('Next enabled', true);
    const pages = number('Number of pages', 5);
    const currentPage = number('Current page', 1);

    return <Pagination size={ sizes } bordered={ bordered }>
        <Pagination.Item disabled={ prevDisabled }>&laquo; Previous</Pagination.Item>
        {
            Array(pages).fill(0).map((v, k) => (
                <Pagination.Item current={ currentPage && k + 1 === currentPage }>
                    { k + 1 }
                </Pagination.Item>
            ))
        }
        <Pagination.Item disabled={ nextDisabled }>Next &raquo;</Pagination.Item>
    </Pagination>;
});
