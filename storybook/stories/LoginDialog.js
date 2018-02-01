import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import props from '../../lib/props';

import { Button, LoginDialog } from 'nice-react';

const stories = storiesOf('Login Dialog', module);

stories.addDecorator((story, context) => withInfo('')(story)(context));
stories.addDecorator(withKnobs);

stories.add('Default', () => (
    <LoginDialog
        product="jobfeed"
        intro="Welcome to Textkernel. Please log in using your credentials to access your account."
        version="Nice! React v1.2.3"
        onSubmit={ e => {
            console.log (e);
        }}
    >
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
        <LoginDialog.Footer>
            <Button context="primary" submit>
                Login
            </Button>
        </LoginDialog.Footer>
    </LoginDialog>
));
