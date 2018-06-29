import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import props from '../../props';
import Item from './Item';
import './Breadcrumb.scss';

const Breadcrumb = ({ size, children, className, style }) => (
  <ol className={classnames('nice-breadcrumb', size, className)} style={style}>
    {children}
  </ol>
);

Breadcrumb.Item = Item;

Breadcrumb.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(props.breadcrumbsSizes),
    style: PropTypes.object,
};

Breadcrumb.defaultProps = {
    children: null,
    className: '',
    size: null,
    style: {}
};

export default Breadcrumb;