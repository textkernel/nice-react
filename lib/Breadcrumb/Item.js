import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {

    handleClick(e) {
        e.preventDefault();
        
        const { onClick, value } = this.props;
        onClick(value);
    }

    render() {
        const { children, text, icon, current } = this.props;

        const classes = [];
        if (icon) classes.push(`icon ${icon}`);
        if (current) classes.push('current');

        return (
          <li>
            <a 
              href="#"
              className={ classes.join(' ') }
              onClick={ this.handleClick }
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
    children: PropTypes.node,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    value: PropTypes.string,
    current: PropTypes.bool,
};

Item.defaultProps = {
    children: null,
    onClick: () => true,
    icon: null,
    value: null,
    current: false
};

export default Item;
