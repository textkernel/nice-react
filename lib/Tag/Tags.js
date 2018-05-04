import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Input from './Input';

/**
 * Tags container
 */
export default class Tags extends Component {

    
    static Input = Input;

    
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        style: PropTypes.object,
    }


    static defaultProps = {
        className: '',
        style: {}
    }
    

    render() {
        const { children, className, ...rest } = this.props;

        return (
            <div className={classnames('nice-tags-container', className)} {...rest}>
                { children }
            </div>  
        );
    }

}