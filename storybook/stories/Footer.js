import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions, withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Footer } from 'nice-react';

const stories = storiesOf('Footer', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Default', () => {
    const fluid = boolean('Fluid layout', false);
    const copyright = boolean('Include copyright', true);

    return (<Footer copyright={ copyright } fluid={ fluid }>
        <Footer.Link className="icon fa-balance-scale" href="https://github.com/textkernel/nice/blob/master/LICENSE" target="_blank">
            Project License
        </Footer.Link>
        <Footer.Link className="icon fa-github" href="https://github.com/textkernel/nice/" target="_blank">
            Source
        </Footer.Link>
        <Footer.Link className="additional-icon fw frontify" href="https://app.frontify.com/d/apB5ernOJZzj/textkernel-branding-guideline" target="_blank">
            Brand Guidelines
        </Footer.Link>
        <Footer.Link className="product-icon textkernel" href="http://textkernel.com" target="_blank">
            Textkernel
        </Footer.Link>
    </Footer>)
});
