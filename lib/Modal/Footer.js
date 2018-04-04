import React from 'react';
import PropTypes from 'prop-types';

const ModalFooter = ({ children }) => {
    if (!children) {
        return null;
    }

    return (
        <div className="nice-modal-footer">
            { children }
        </div>
    );
};

ModalFooter.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
        PropTypes.number
    ])
};

ModalFooter.defaultProps = {
    children: null
};

export default ModalFooter;
