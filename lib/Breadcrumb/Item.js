import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {

    handleClick = (e) => {
        e.preventDefault();
        
        const { onClick, value } = this.props;
        onClick(value);
    }

    render() {
        const { children, text, icon, current, className, style } = this.props;

        const classes = [className];
        if (icon) classes.push(`icon ${icon}`);
        if (current) classes.push('current');

        return (
          <li>
            <a 
              href="#"
              className={ classes.join(' ') }
              onClick={ this.handleClick }
              style={style}
            >
              {text}
            </a>

            {
              children &&
                <ul> {children} </ul>
            } 
          </li>
        );
    }
}

Item.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    current: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
    value: PropTypes.string,
};

Item.defaultProps = {
    className: '',
    children: null,
    current: false,
    icon: null,
    onClick: () => true,
    style: {},
    value: null,
};

export default Item;
