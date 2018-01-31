import React, { Component } from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';

export default class Alert extends Component {
    static propTypes = {
        size: PropTypes.oneOf(niceProps.paginationSizes),
        bordered: PropTypes.bool,
        children: PropTypes.node
    }

    static defaultProps = {
        size: null,
        bordered: false,
        children: null
    }

    render() {

        const { size, bordered, children } = this.props;

        let classes = ['nice-pagination'];
        if (size) {
            classes.push(size);
        }
        if (bordered) {
            classes.push('bordered');
        }

        return (
            <nav>
                <ul className={ classes } role="navigation">
                    { children }
                </ul>
            </nav>
        );
    }
}
