import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default class Input extends Component {


    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
    }

    
    static defaultProps = {
        className: '',
        style: {},
        placeholder: '',
        value: '',
        onChange: null
    }


    state = { value: '' };


    componentWillMount() {
        const { value } = this.props;
        this.setState({ value });
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({ value: nextProps.value });
        }
    }


    handleChange = (event) => {
        const { onChange } = this.props;

        if (onChange) {
            onChange(event.target.value);            
        } else {
            this.setState({ value: event.target.value });
        }
    }


    render() {
        const { className, style, placeholder, value } = this.props;

        const inputValue = value || this.state.value;

        return (
            <input 
                className={classnames('nice-tag-input', className)}
                style={style}
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={this.handleChange}
            />
        );
    }

}