import React, { Component } from 'react';
import PropTypes from 'prop-types';
import niceProps from '../props';

export default class Gap extends Component {
    render() {
        return (
            <li className="disabled">
                <span>&hellip;</span>
            </li>
        );
    }
}
