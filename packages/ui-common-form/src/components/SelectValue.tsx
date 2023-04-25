import * as React from "react";
import Select from "react-select";

interface InputSelectProps {
  name: string;
  value: string;
  options: any;
  onChange(name: string, value: string, data: any): void;
  inline: boolean;
  defaultEdit?: boolean;
  className?: string;
  placeholder?: string;
}

interface InputSelectState {
  /** Determines if input fields or text values are shown. Only applies when inline mode is enabled. */
  edit: boolean;

  /** Stores the value that is returned if the users cancels input. */
  old_value: string;
}

export class InputSelect extends React.Component<
  InputSelectProps,
  InputSelectState
> {
  static defaultProps = {
    placeholder: "Select Option",
    defaultEdit: false,
    inline: false,
  };

  constructor(props: any) {
    super(props);

    this.state = {
      edit: this.props.defaultEdit || true,
      old_value: this.props.value,
    };
  }

  /* ####################################################*/
  /* Event Handling  */

  /** Allow the user to click on widget to enter edit mode. */
  private handleClickWidget = (e: React.MouseEvent) => {
    this.setState({ ...this.state, edit: true });
  };

  /*
    NOTE: The react onFocus and onBlur events behave differently to the same named events in standard javascript. In react these events
    behave more like onFocusIn and onFocusOut. In react onFocus and onBlur bubble up while in the W3C spec they do not. There is
    a discussion to implement onFocusIn and onFocusOut in react if this ever happens this component should be changed to use
    onFocusIn and onFocusOut.
    */
  private onFocusWidget = (e: React.FocusEvent) => {
    this.setState({ ...this.state, edit: true });
  };

  /*
    NOTE: The onBlur event does not contain any information related to the element which is next to receive focus. As a work around
    we fire an event as the element looses focus with a callback which contains the element that focus was shifted too. This technique
    provided the abilitiy to determine if our entire widget has lost focus.
    */
  private onBlurWidget = (e: React.FocusEvent) => {
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
      ({ value }: any) => value === this.props.value
    );

    if (this.state.edit || !this.props.inline) {
      return (
        <Select
          value={selected}
          blurInputOnSelect={true}
          options={this.props.options}
          onFocus={this.onFocusWidget}
          onBlur={this.onBlurWidget}
          onChange={this.handleSelectChanged}
          classNamePrefix="cfkit"
        />
      );
    } else {
      let className = "";
      let value = selected[0].label;
      if (!value || value === "") {
        className = "placeholder";
        value = this.props.placeholder!;
      }

      return (
        <div className="field">
          <span
            className={`value ${className}`}
            tabIndex={0}
            onClick={this.handleClickWidget}
          >
            {value}
          </span>
        </div>
      );
    }
  };

  render() {
    return <>{this.renderValue()}</>;
  }
}

export default InputSelect;
