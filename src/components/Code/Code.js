import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import niceProps from '../../props';
import './Code.scss';

class Code extends Component {
    renderCodeHeading() {
        const { context, heading, icon, syntax } = this.props;

        if (!heading && !syntax) {
            return null;
        }

        const classes = ['nice-code-heading'];

        if (context && niceProps.codeContexts.indexOf(context) > -1) {
            classes.push(context);
        }
        if (icon) {
            classes.push(icon);
        }

        return (<div className={ classes.filter(c => !!c).join(' ') }>
            { heading }
            { 
                syntax 
                ? <div className="nice-code-syntax">
                    { syntax }
                </div>
                : null
            }
        </div>);
    }

    render() {
        const { children, size, className, style } = this.props;

        const classes = [];
        if (size) {
            classes.push(size);
        }

        return (
            <div className={classnames('nice-code-container', className)} style={style} >
                { this.renderCodeHeading() }
                <code className={ classes.join(' ') }>
                    { children }
                </code>
            </div>
        );
    }
}

Code.propTypes = {
    className: PropTypes.string,
    context: PropTypes.oneOf(niceProps.codeContexts),
    size: PropTypes.oneOf(niceProps.codeSizes),
    heading: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]),
    icon: PropTypes.string,
    syntax: PropTypes.string,
    style: PropTypes.object,
};

Code.defaultProps = {
    className: null,
    context: null,
    size: niceProps.codeSizes[0],
    heading: null,
    children: null,
    icon: null,
    syntax: null,
    style: {},
};

export default Code;
