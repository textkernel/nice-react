import React from 'react';
import PropTypes from 'prop-types';
import props from '../props';
import Item from './Item';

const Breadcrumb = ({ size, children }) => (
  <ol className={`nice-breadcrumb ${size}`}>
    {children}
  </ol>
);

Breadcrumb.Item = Item;

Breadcrumb.propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf(props.breadcrumbsSizes)
};

Breadcrumb.defaultProps = {
    children: null,
    size: null
};

export default Breadcrumb;