import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../../lib/Button';
import niceProps from '../props';

let timer = null;

class Dropdown extends Component {
    constructor(props) {
        super(props);

        const { multiple, radios, items } = props;
        let selection = this.props.defaultSelection.slice(0);

        if (!multiple) {
            if (radios && !selection.length) {
                const item = items.filter(i => (
                    !i.heading && !i.description && !i.separator && !i.disabled
                ))[0];
                selection = [item.value || item.label];
            } else if (selection.length > 1) {
                selection = selection.slice(0, 1);
            }
        }

        this.state = {
            expanded: false,
            selection
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
        const { onCollapse } = this.props;
        if (onCollapse) {
            const { selection } = this.state;
            onCollapse(selection);
        }
        this.setState({
            expanded: false
        });
        return true;
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
        const { expanded } = this.state;
        if (!expanded) {
            return false;
        }
        this.collapse();
        return true;
    }

    handleMouseOver() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    handleMouseOut() {
        const { autoHide } = this.props;

        if (autoHide) {
            timer = setTimeout(
                this.collapse.bind(this),
                Number.isInteger(autoHide) ? autoHide : 1500
            );
        }
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

        if (!multiple) {
            this.collapse();
        }

        return true;
    }

    renderItem(item, i) {
        const { multiple, radios } = this.props;
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

        let node;
        if (multiple) {
            node = <label>
                <input type="checkbox" onChange={ () => this.handleItemSelect(item) } disabled={ disabled } checked={ selection.indexOf(val) > -1 } />
                { label }
            </label>;
        } else {
            const { icon } = item;
            node = radios ?
            <label>
                <input type="radio" onChange={ () => this.handleItemSelect(item) } disabled={ disabled } checked={ selection.indexOf(val) > -1 } />
                { label }
            </label> : <a href="#" onClick={ e => {
                e.preventDefault();
                this.handleItemSelect(item);
            }}
            >
                { icon ? <i className={ classNames(['icon', icon]) } /> : null }
                { label }
            </a>;
        }

        return (<li key={ i } className={ classNames({ disabled, [context]: context }) }>
            { node }
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
            <div className={ classes.join(' ') } ref={ dd => { this.dropdown = dd; }} onMouseOver={ e => this.handleMouseOver(e) } onMouseOut={ e => this.handleMouseOut(e) }>
                <Button
                    context={ context }
                    size={ size }
                    onClick={ () => {
                        this.toggle();
                    }}
                >
                    { label }&nbsp;
                    <i className="icon fa-angle-down" />
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
    radios: PropTypes.bool,
    autoHide: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    defaultSelection: PropTypes.array,
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        context: PropTypes.oneOf(niceProps.dropdownItemContexts),
        separator: PropTypes.bool,
        disabled: PropTypes.bool,
        heading: PropTypes.bool,
        description: PropTypes.bool
    })).isRequired,
    onSelect: PropTypes.func,
    onCollapse: PropTypes.func,
    dropUp: PropTypes.bool,
    alignLeft: PropTypes.bool
};

Dropdown.defaultProps = {
    label: '',
    context: 'primary',
    size: 'medium',
    multiple: false,
    radios: false,
    autoHide: true,
    defaultSelection: [],
    items: [],
    onSelect: null,
    onCollapse: null,
    dropUp: false,
    alignLeft: false
};

export default Dropdown;
