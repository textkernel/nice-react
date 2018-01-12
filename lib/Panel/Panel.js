import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children, context, inverseHeading }) => {
  const headerDiv = title ? <div className="nice-panel-heading">{title}</div> : '';

  return (
    <div className={`nice-panel ${context}`}>
      {
        inverseHeading === false &&
          headerDiv
      }

      <div className="nice-panel-content">
        {children}
      </div>

      {
        inverseHeading &&
          headerDiv
      }
      
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string,
  context: PropTypes.string,
  inverseHeading: PropTypes.bool,
  children: PropTypes.node
};

Panel.defaultProps = {
  title: null,
  context: '',
  inverseHeading: false,
  children: null
};  


export default Panel;