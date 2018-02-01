import React from 'react';
import PropTypes from 'prop-types';

const ScaleItem = ({ label, value, className, name, onSelect, tickLabel }) => {
    const handleSelect = e => onSelect(e, e.currentTarget.value);

    return (
      <li key={value}>
        <label>
          <input 
            type='radio'
            name={name}
            value={value}
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

ScaleItem.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
    tickLabel: PropTypes.bool,
    onSelect: PropTypes.func,
};

ScaleItem.defaultProps = {
    label: '',
    className: '',
    name: '',
    tickLabel: true,
    onSelect: () => true
};

export default ScaleItem;