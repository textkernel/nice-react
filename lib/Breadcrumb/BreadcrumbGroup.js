import React from 'react';
import PropTypes from 'prop-types';
import props from '../props';

const BreadcrumbGroup = ({ size, children }) => (
  <ol className={`nice-breadcrumb ${size}`}>
    {children}
  </ol>
);

BreadcrumbGroup.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(props.breadcrumbsSizes)
};

BreadcrumbGroup.defaultProps = {
  children: null,
  size: null
};

export default BreadcrumbGroup;