import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children, color, inverseHeading }) => {
  const headerDiv = title ? <div className='nice-panel-heading'>{title}</div> : '';

  return (
    <div className={`nice-panel ${color}`}>
      {
        inverseHeading === false &&
          headerDiv
      }

      <div className='nice-panel-content'> 
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
  color: PropTypes.string,
  inverseHeading: PropTypes.bool,
  children: PropTypes.node
};

Panel.defaultProps = {
  title: null,
  color: '',
  inverseHeading: false,
  children: null
};  


export default Panel;