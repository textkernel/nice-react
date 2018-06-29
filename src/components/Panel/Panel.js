import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Panel.scss';

const Panel = ({ children, className, context, inverseHeading, style, title }) => {
    const headerDiv = title ? <div className="nice-panel-heading">{ title }</div> : '';

    return (
        <div
            className={ classNames('nice-panel', className, context) }
            style={ style }
        >
            {
                inverseHeading === false &&
                headerDiv
            }

            <div className="nice-panel-content">
                { children }
            </div>

            {
                inverseHeading &&
                headerDiv
            }
            
        </div>
    );
};

Panel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    context: PropTypes.string,
    inverseHeading: PropTypes.bool,
    style: PropTypes.object,
    title: PropTypes.string
};

Panel.defaultProps = {
    children: null,
    className: '',
    context: '',
    inverseHeading: false,
    style: null,
    title: null
};

export default Panel;
