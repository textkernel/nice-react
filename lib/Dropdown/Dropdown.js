import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import niceProps from '../props';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
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

  renderItem(item, i) {
    const { disabled, separator, heading, description, label, context, onClick } = item;
    if (heading || description) {
      return (<li className={ classNames({
        heading,
        description,
        disabled,
        [context]: context
      }) }>
        <span>{ label }</span>
      </li>);
    }
    if (separator) {
      return <li className="separator" />;
    }
    return (<li key={ i } className={ classNames({ disabled, [context]: context }) }>
      <a href="#" onClick={ e => {
        e.preventDefault();
        if (!onClick || disabled) {
          return false;
        }
        return onClick();
      }}
      >
        { label }
      </a>
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
  label: PropTypes.string,
  context: PropTypes.oneOf(niceProps.buttonContexts),
  size: PropTypes.oneOf(niceProps.buttonSizes),
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    context: PropTypes.oneOf(niceProps.buttonContexts),
    separator: PropTypes.bool,
    disabled: PropTypes.bool,
    heading: PropTypes.bool,
    description: PropTypes.bool
  })),
  dropUp: PropTypes.bool,
  alignLeft: PropTypes.bool
};

Dropdown.defaultProps = {
  label: '',
  context: 'primary',
  size: 'medium',
  items: [],
  onClick: null,
  dropUp: false,
  alignLeft: false
};

export default Dropdown;
