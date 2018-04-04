import React from 'react';
import PropTypes from 'prop-types';

const ModalSub = ({ children }) => {
    if (!children) {
        return null;
    }

    return (
        <div className="nice-modal-sub">
            { children }
        </div>
    );
};

ModalSub.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
        PropTypes.number
    ])
};

ModalSub.defaultProps = {
    children: null
};

export default ModalSub;
