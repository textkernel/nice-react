import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Label from './Label';
import Badge from './Badge';
import Button from './Button';
import './Tags.scss';

export default class Tag extends Component {


    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.array,
            PropTypes.instanceOf(Label),
            PropTypes.instanceOf(Badge),
            PropTypes.instanceOf(Button),
        ]).isRequired,
        className: PropTypes.string,
        style: PropTypes.object,
        context: PropTypes.string,
        onClick: PropTypes.func,
    }


    static defaultProps = {
        className: '',
        style: {},
        context: '',
        onClick() {}
    };

    
    static Button = Button;
    static Badge = Badge;
    static Label = Label;
    

    handleClick = (event) => {
        const { onClick } = this.props;
        event.stopPropagation();

        onClick(event);
    }


    render() {
        const { children, style, className, context, onClick, ...rest } = this.props;

        return (
            <div 
                className={classnames('nice-tag', context, className)}
                style={style}
                onClick={this.handleClick}
                role="button"
                tabIndex="-1"
                { ...rest }
            >
                {children}
            </div>
        );
    }
}