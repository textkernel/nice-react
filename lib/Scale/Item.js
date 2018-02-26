import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ label, value, className, name, checked, onSelect, tickLabel }) => {
    const handleSelect = e => onSelect(e, e.currentTarget.value);

    return (
      <li key={value}>
        <label>
          <input 
            type='radio'
            name={name}
            value={value}
            checked={checked}
            onChange={handleSelect}
          />
          <span />
          { 
            label &&
              <span className={`${className} ${tickLabel ? 'nice-scale-label' : ''}`}>
                {label}
              </span>
          }
        </label>
      </li>
    );
};

Item.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
    tickLabel: PropTypes.bool,
    onSelect: PropTypes.func,
    checked: PropTypes.bool
};

Item.defaultProps = {
    label: '',
    className: '',
    name: '',
    tickLabel: true,
    onSelect: () => true,
    checked: false
};

export default Item;