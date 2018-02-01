import React from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';

const ProductIcon = ({ product, className, style }) => {
    if (!product) {
        return null;
    }
    const classes = ['product-icon', product].concat([className]).join(' ');
    return (
        <i className={ classes } style={ style } />
    );
};

ProductIcon.propTypes = {
    product: PropTypes.oneOf(niceProps.products),
    className: PropTypes.string,
    style: PropTypes.object
};

ProductIcon.defaultProps = {
    product: null,
    className: '',
    style: null
};

export default ProductIcon;
