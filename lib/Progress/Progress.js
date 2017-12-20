import React from 'react';
import PropTypes from 'prop-types';
import props from '../props';

const Progress = ({ percentage, message, context }) => {
  const label = message !== '' ? message : `${percentage}%`;

  return ( 
    <div className={`nice-progress ${context}`}>
      <div className='nice-progress-fill' style={{ width: `${percentage}%` }} >
        {label}
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
  message: PropTypes.string,
  context: PropTypes.oneOf(props.contexts)
};

Progress.defaultProps = {
  message: '',
  context: 'primary'
};

export default Progress;

