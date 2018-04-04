import React from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';
import Item from './Item';
import Gap from './Gap';

const Pagination = ({ size, bordered, children }) => {
    let classes = ['nice-pagination'];
    if (size) {
        classes.push(size);
    }
    if (bordered) {
        classes.push('bordered');
    }
    classes = classes.join(' ');

    return (<nav>
        <ul
            className={ classes }
            role="navigation"
        >
            { children }
        </ul>
    </nav>);
};

Pagination.propTypes = {
    size: PropTypes.oneOf(niceProps.paginationSizes),
    bordered: PropTypes.bool,
    children: PropTypes.node
};

Pagination.defaultProps = {
    size: null,
    bordered: false,
    children: null
};

Pagination.Item = Item;
Pagination.Gap = Gap;

export default Pagination;
