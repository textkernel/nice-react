import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Item = ({ label, value, className, style, name, checked, onSelect, tickLabel }) => {
    const handleSelect = e => onSelect(e, e.currentTarget.value);

    return (
        <li key={value}>
            <label>
                <input 
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={handleSelect}
                />
                <span />
                { 
                    label &&
                        <span 
                            className={classnames(className, { 'nice-scale-label': tickLabel })}
                            style={style}
                        >
                            {label}
                        </span>
                }
            </label>
        </li>
    );
};


Item.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    tickLabel: PropTypes.bool,
    onSelect: PropTypes.func,
    checked: PropTypes.bool
};


Item.defaultProps = {
    label: '',
    className: null,
    style: {},
    name: '',
    tickLabel: true,
    onSelect: () => true,
    checked: false
};


export default Item;