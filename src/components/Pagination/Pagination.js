import React from 'react';
import PropTypes from 'prop-types';
import niceProps from '../../props';
import Item from './Item';
import Gap from './Gap';
import './Pagination.scss';

const Pagination = ({ size, bordered, children, className, style }) => {
    let classes = ['nice-pagination'];
    if (size) {
        classes.push(size);
    }
    if (bordered) {
        classes.push('bordered');
    }
    classes = classes.join(' ');

    return (
        <nav className={className} style={style}>
            <ul
                className={ classes }
                role="navigation"
            >
                { children }
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf(niceProps.paginationSizes),
    bordered: PropTypes.bool,
    children: PropTypes.node
};

Pagination.defaultProps = {
    className: null,
    style: {},
    size: null,
    bordered: false,
    children: null
};

Pagination.Item = Item;
Pagination.Gap = Gap;

export default Pagination;
