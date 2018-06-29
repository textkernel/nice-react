import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobsOptions, withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../src/props';

import { Button, LoginDialog } from 'nice-react';

const stories = storiesOf('Login Dialog', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Default', () => {
    const brand = text('Brand', 'textkernel');
    const product = select('Product', props.products);
    const intro = text('Intro text', 'Welcome to Textkernel. Please log in using your credentials to access your account.')
    const version = text('Version', 'Nice! React v1.2.3');
    const loading = boolean('Loading', false);
    const attribution = boolean('Show attribution', true);

    return (<LoginDialog
        brand={ brand }
        product={ product }
        intro={ intro }
        version={ version }
        loading={ loading }
        noAttribution={ !attribution }
    >
        <form onSubmit={ e => {
            e.preventDefault();
        }}>
            <div className="nice-form-group">
                <label htmlFor="nice-login-username">Username</label>
                <input type="email" placeholder="Username..." className="nice-form-control" id="nice-login-username" />
            </div>
            <div className="nice-form-group">
                <label htmlFor="nice-login-account">Account</label>
                <input type="text" placeholder="Account name..." className="nice-form-control" id="nice-login-account" />
            </div>
            <div className="nice-form-group">
                <label htmlFor="nice-login-password">Password</label>
                <input type="password" placeholder="Password..." className="nice-form-control" id="nice-login-password" />
            </div>
            <div className="nice-form-group">
                <input type="checkbox" className="nice-toggle" id="login-remember" />
                <label className="nice-toggle-btn off-muted" htmlFor="login-remember">
                    Remember me on this device
                </label>
            </div>
            <div className="nice-form-group">
                <Button context="link" submit style={{
                    paddingLeft: 0,
                    paddingRight: 0
                }}>
                    <i className="icon fa-question" /> Lost your credentials?
                </Button>
                <Button context="primary" submit pullRight>
                    Login
                </Button>
            </div>
        </form>
    </LoginDialog>);
});
