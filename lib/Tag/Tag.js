import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Item from './Item';
import Label from './Label';
import Button from './Button';
import Badge from './Badge';


class Tag extends Component {

    
    static Label = Label;
    static Item = Item;
    static Button = Button;
    static Badge = Badge;

    
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string
    }


    static defaultProps = {
        className: ''
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


export default Tag;