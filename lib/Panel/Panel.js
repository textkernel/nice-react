import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children, theme }) => (
  <div className={`nice-panel ${theme}`}>
    {
      title &&
        <div className='nice-panel-heading'> {title} </div>
    }

    <div className='nice-panel-content'> 
      {children}
    </div>
    
  </div>
);

Panel.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.node
};

Panel.defaultProps = {
  title: null,
  theme: '',
  children: null
};  


export default Panel;