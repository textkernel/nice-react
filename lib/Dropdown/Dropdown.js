import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import niceProps from '../props';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      selection: props.defaultSelection
    };
  }

  componentDidMount() {
    document.body.addEventListener(
      'click',
      this.bodyClick.bind(this),
      false
    );
  }

  componentWillUnmount() {
    document.body.removeEventListener(
      'click',
      this.bodyClick.bind(this),
      false
    );
  }

  collapse() {
    this.setState({
      expanded: false
    });
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  bodyClick(e) {
    if (!this.dropdown || this.dropdown.contains(e.target)) {
      return false;
    }
    this.collapse();
    return true;
  }

  handleItemSelect(item) {
    const { onClick, label, value, disabled } = item;
    const { onSelect, multiple } = this.props;
    let selection = this.state.selection.slice(0);

    if (disabled) {
      return false;
    }

    if (onClick) {
      onClick();
    }

    const val = value || label;
    if (val) {
      if (multiple) {
        if (selection.includes(val)) {
          selection = selection.filter(v => v !== val);
        } else {
          selection.push(val);
        }
      } else {
        selection = [val];
      }
    }

    if (onSelect) {
      onSelect(selection);
    }

    this.setState({
      selection
    });

    return true;
  }

  renderItem(item, i) {
    const { multiple } = this.props;
    const { selection } = this.state;
    const { disabled, separator, heading, description, value, label, context } = item;

    if (heading || description) {
      return (<li key={ i } className={ classNames({
        heading,
        description,
        disabled,
        [context]: context
      }) }>
        <span>{ label }</span>
      </li>);
    }

    if (separator) {
      return <li key={ i } className="separator" />;
    }

    const val = value || label;

    return (<li key={ i } className={ classNames({ disabled, [context]: context }) }>
      {
        multiple ?
        <label>
          <input type="checkbox" onChange={ () => this.handleItemSelect(item) } disabled={ disabled } checked={ selection.indexOf(val) > -1 } />
          { label }
        </label> : <a href="#" onClick={ e => {
          e.preventDefault();
          this.handleItemSelect(item);
        }}
        >
          { label }
        </a>
      } 
    </li>);
  }

  render() {
    const { label, items, context, size, dropUp, alignLeft } = this.props;
    const classes = ['nice-dropdown', context, size].filter(c => c && c.length > 0);
    if (dropUp) {
      classes.push('drop-up');
    }
    if (alignLeft) {
      classes.push('align-left');
    }
    const menuClass = [
      'dropdown-menu',
      ...(this.state.expanded ? ['shown'] : [])
    ];

    return (
      <div className={ classes.join(' ') } ref={ (dd) => { this.dropdown = dd; }}>
        <Button
          context={ context }
          size={ size }
          onClick={ () => {
            this.toggle();
          }}
        >
          { label }
        </Button>
        <div className={ menuClass.join(' ') }>
          { items.map((item, i) => this.renderItem(item, i)) }
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  context: PropTypes.oneOf(niceProps.buttonContexts),
  size: PropTypes.oneOf(niceProps.buttonSizes),
  multiple: PropTypes.bool,
  defaultSelection: PropTypes.array,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    context: PropTypes.oneOf(niceProps.buttonContexts),
    separator: PropTypes.bool,
    disabled: PropTypes.bool,
    heading: PropTypes.bool,
    description: PropTypes.bool
  })).isRequired,
  onSelect: PropTypes.func,
  dropUp: PropTypes.bool,
  alignLeft: PropTypes.bool
};

Dropdown.defaultProps = {
  label: '',
  context: 'primary',
  size: 'medium',
  multiple: false,
  defaultSelection: [],
  items: [],
  onSelect: null,
  dropUp: false,
  alignLeft: false
};

export default Dropdown;
