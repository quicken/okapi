import * as React from "react";
import Select from "react-select";

interface ChoosenProps {
  name: string;
  value: string;
  options: any;
  onChange(name: string, value: string, data: any): void;
  inline: boolean;
  defaultEdit?: boolean;
  className?: string;
  placeholder?: string;
  id?: string;
  label?: string;
  readOnly: boolean;
  tooltip?: string;
  tooltipType?: string;
  showToolTip?: boolean;
}

interface ChoosenState {
  /** Determines if input fields or text values are shown. Only applies when inline mode is enabled. */
  edit: boolean;

  /** Stores the value that is returned if the users cancels input. */
  old_value: string;

  /** Stores the current search string typed into the choosen. */
  inputValue: string;
}

export class Choosen extends React.Component<ChoosenProps, ChoosenState> {
  choosenRef: any;

  static defaultProps = {
    placeholder: "Select Option",
    defaultEdit: false,
    inline: false,
    readOnly: false,
    showToolTip: false,
  };

  constructor(props: any) {
    super(props);

    this.state = {
      edit: this.props.defaultEdit,
      old_value: this.props.value,
      inputValue: "",
    };
  }

  /* ####################################################*/
  /* Event Handling  */
  public componentDidMount() {
    if (this.state.edit) {
      this.choosenRef.focus();
    }
  }

  public componentDidUpdate(prevProps: ChoosenProps, prevState: ChoosenState) {
    if (!prevState.edit && this.state.edit) {
      this.choosenRef.focus();
    }
  }

  /* Called as the user types filter conditions into the select. */
  private handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/[^a-zA-Z0-9\s]/g, "");
    this.setState({ inputValue });
    return inputValue;
  };

  /** Allow the user to click on widget to enter edit mode. */
  private handleClickWidget = (e: React.MouseEvent) => {
    if (this.props.readOnly) {
      e.preventDefault();
      return;
    }
    this.setState({ ...this.state, edit: true });
  };

  /*
    NOTE: The react onFocus and onBlur events behave differently to the same named events in standard javascript. In react these events
    behave more like onFocusIn and onFocusOut. In react onFocus and onBlur bubble up while in the W3C spec they do not. There is
    a discussion to implement onFocusIn and onFocusOut in react if this ever happens this component should be changed to use
    onFocusIn and onFocusOut.
    */
  private onFocusWidget = (e: React.FocusEvent) => {
    if (this.props.readOnly) {
      e.preventDefault();
      return;
    }
    this.setState({ ...this.state, edit: true });
  };

  /*
    NOTE: The onBlur event does not contain any information related to the element which is next to receive focus. As a work around
    we fire an event as the element looses focus with a callback which contains the element that focus was shifted too. This technique
    provided the abilitiy to determine if our entire widget has lost focus.
    */
  private onBlurWidget = (e: React.FocusEvent) => {
    if (this.props.readOnly) {
      e.preventDefault();
      return;
    }
    this.setState({ ...this.state, edit: false });
  };

  private handleSelectChanged = (newValue: any, actionMeta: any) => {
    if (actionMeta.action === "select-option") {
      this.props.onChange(this.props.name, newValue.value, newValue);
    }
  };

  /** Render when component is in inline mode and edit mode is false */
  private renderValue = () => {
    const selected = this.props.options.filter(
      ({ value }) => value === this.props.value
    );

    if ((this.state.edit && !this.props.readOnly) || !this.props.inline) {
      return (
        <Select
          ref={(ref) => {
            this.choosenRef = ref;
          }}
          options={this.props.options}
          value={selected}
          blurInputOnSelect={true}
          onFocus={this.onFocusWidget}
          onBlur={this.onBlurWidget}
          onChange={this.handleSelectChanged}
          onInputChange={this.handleInputChange}
          placeholder={this.props.placeholder}
          readOnly={this.props.readOnly}
          classNamePrefix="cfkit"
        />
      );
    } else {
      let className = "";
      let value = selected[0].label;

      if (!value || value.trim() === "") {
        className = "placeholder";
        value = this.props.placeholder!;
      }
      return (
        <span
          className={`value ${className}`}
          tabIndex={0}
          onClick={this.handleClickWidget}
        >
          {value}
        </span>
      );
    }
  };

  private renderLabel() {
    if (this.props.label !== undefined && this.props.label !== "") {
      return <label htmlFor="">{this.props.label}</label>;
    }
  }

  render() {
    let className = this.props.className
      ? "field choosen" + " " + this.props.className
      : "field choosen";
    className = this.props.readOnly ? className + " readonly" : className;
    className = !this.props.showToolTip
      ? className
      : className + " tooltip " + this.props.tooltipType;

    return (
      <div
        id={this.props.id}
        className={className}
        data-title={this.props.tooltip}
      >
        {this.renderLabel()}
        {this.renderValue()}
      </div>
    );
  }
}

export default Choosen;
