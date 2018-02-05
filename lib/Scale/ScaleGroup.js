import React from 'react';
import PropTypes from 'prop-types';

const ScaleGroup = ({ name, tickLabels, onChange, className, children, value }) => {
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { 
          name,
          checked: child.props.value === value,
          onSelect: onChange,
          tickLabel: tickLabels 
      })
    );

    return (
      <div className={`nice-scale ${className}`}>
        <ol className='nice-scale-selection'>
          {childrenWithProps}
        </ol>
      </div>
    );
};

ScaleGroup.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    tickLabels: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.node.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ScaleGroup.defaultProps = {
    className: '',
    tickLabels: true,
    onChange: () => true,
    value: ''
};

export default ScaleGroup;