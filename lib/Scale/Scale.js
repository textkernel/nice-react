import React from 'react';
import PropTypes from 'prop-types';

class Scale extends React.Component {

  onSelect = e => this.props.onChange(e, e.currentTarget.value)

  renderRadios = () => (
    this.props.items.map(item => (
      <li key={item.value}>
        <label>
          <input 
            type='radio'
            name={this.props.radioGroupName}
            value={item.value}
            onChange={this.onSelect}
          />
          <span />
          { 
            !item.omitLabel &&
              <span className='nice-scale-label'>{item.label}</span>
          }
        </label>
      </li>
    ))
  )

  render = () => (
    <div className='nice-scale'>
      <ol className='nice-scale-selection'>
        { this.renderRadios() }
      </ol>
    </div>
  );

}

Scale.propTypes = {
  radioGroupName: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    omitLabel: PropTypes.bool
  })).isRequired,
  onChange: PropTypes.func
};

Scale.defaultProps = {
  onChange: () => true
};

export default Scale;