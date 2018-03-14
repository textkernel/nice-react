import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class Scale extends Component {


    static propTypes = {
        name: PropTypes.string.isRequired,
        className: PropTypes.string,
        tickLabels: PropTypes.bool,
        onChange: PropTypes.func,
        children: PropTypes.node.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };


    static defaultProps = {
        className: '',
        tickLabels: true,
        onChange: () => true,
        value: ''
    };


    state = {
        value: this.props.value || React.Children.toArray(this.props.children)[0].value
    }


    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({ value: nextProps.value });
        }
    }


    onItemClick = (event, value) => {
        this.setState({ value });
        this.props.onChange(event, value);
    }


    render() {
        const {
            name,
            tickLabels,
            className,
            children,
        } = this.props;

        const { value } = this.state;

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { 
                name,
                checked: child.props.value == value,
                onSelect: this.onItemClick,
                tickLabel: tickLabels 
            })
        );

        return (
            <div className={`nice-scale ${className}`}>
                <ol className='nice-scale-selection'>
                    {childrenWithProps}
                </ol>
            </div>
        );
    }

};


Scale.Item = Item;


export default Scale;