import React from 'react';
import LoginDialog from '../../lib/LoginDialog';
import { Button } from '../../lib/Button';

describe('<LoginDialog />', () => {
    it('should render a default LoginDialog', () => {
        const wrapper = shallow(<LoginDialog
            brand="textkernel"
            product="textkernel"
            intro="Welcome to Textkernel. Please log in using your credentials to access your account."
            version="Nice v1.2.3"
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
                    <Button context="primary" submit className="pull-right">
                        Login
                    </Button>
                </div>
            </form>
        </LoginDialog>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render a loading LoginDialog without attribution / version', () => {
        const wrapper = shallow(<LoginDialog
            brand="textkernel"
            product="textkernel"
            intro="Welcome to Textkernel. Please log in using your credentials to access your account."
            version="Nice v1.2.3"
            noAttribution
            loading
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
                    <Button context="primary" submit className="pull-right">
                        Login
                    </Button>
                </div>
            </form>
        </LoginDialog>);

        expect(wrapper).toMatchSnapshot();
    });
});
