import * as React from "react";
import DatePicker from "react-datepicker";

/*
Documentation for react-datepicker
https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md

More information on Date Formatting
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
*/

interface DatePickerProps {
  name: string;
  value: Date;
  onChange: (name: string, value: Date, data?: any) => any;
  inline: boolean;
  className?: string;
  placeholder?: string;
  edit: boolean;
  format: string;
  readOnly?: boolean;
  /** The text label that is to be shown for the field. An empty or undefined label prevents the lablel HTML from being rendered. */
  label?: string;
}

interface DatePickerState {
  edit: boolean;
  undo: Date;
  value: Date;
}

class DateField extends React.Component<DatePickerProps, DatePickerState> {
  static defaultProps = {
    name: "",
    className: null,
    placeholder: "",
    edit: false,
    format: "dd/MM/yyyy",
    value: new Date(),
    inline: false,
  };

  static getDerivedStateFromProps(
    nextProps: DatePickerProps,
    prevState: DatePickerState
  ): any {
    if (nextProps.value != prevState.undo) {
      return { undo: nextProps.value, value: nextProps.value };
    }

    return null;
  }

  constructor(props: DatePickerProps) {
    super(props);

    this.state = {
      edit: this.props.edit,
      undo: this.props.value,
      value: this.props.value,
    };
  }

  private onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (this.props.readOnly) return;
    this.setState({ ...this.state, edit: true });
  };

  private onFocus = (e: React.FocusEvent) => {
    if (this.props.readOnly) return;
    this.setState({ ...this.state, edit: true });
  };

  private onBlur = (e: React.FocusEvent) => {
    if (this.props.readOnly) return;
    this.exitField();
  };

  private onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        this.exitField();
        break;
      case "Escape": {
        this.setState({ ...this.state, value: this.state.undo });
        break;
      }
      default:
    }
  };

  private fieldChanged = (value: Date) => {
    const float_utc = new Date();
    float_utc.setUTCFullYear(value.getFullYear());
    float_utc.setUTCMonth(value.getMonth());
    float_utc.setUTCDate(value.getDate());
    float_utc.setUTCHours(value.getHours());
    float_utc.setUTCMinutes(value.getMinutes());
    float_utc.setUTCSeconds(value.getSeconds());
    float_utc.setUTCMilliseconds(0);
    this.setState({ ...this.state, value: float_utc });
    /* NON inline mode call updates as field is changed.*/
    if (!this.props.inline) {
      this.props.onChange(this.props.name, float_utc);
    }
  };

  private exitField() {
    this.setState({ ...this.state, edit: false });
    /* inline mode onlys call changes once the user leaves the field.*/
    if (this.props.inline) {
      this.props.onChange(this.props.name, this.state.value);
    }
  }

  private getLocalDate(): Date {
    let v = this.state.value;
    const locale = new Date();
    locale.setFullYear(v.getUTCFullYear());
    locale.setMonth(v.getUTCMonth());
    locale.setDate(v.getUTCDate());
    locale.setHours(v.getUTCHours());
    locale.setMinutes(v.getUTCMinutes());
    locale.setSeconds(v.getUTCSeconds());
    locale.setMilliseconds(0);
    return locale;
  }

  private renderLabel() {
    if (this.props.label && this.props.label !== "") {
      return <label htmlFor="">{this.props.label}</label>;
    }
  }

  private renderValue = () => {
    let localDate = this.getLocalDate();

    const dateString = new Intl.DateTimeFormat("en-GB").format(localDate);
    return (
      <span
        className="value date"
        tabIndex={0}
        onFocus={this.onFocus}
        onClick={this.onClick}
      >
        {dateString}
      </span>
    );
  };

  private renderField() {
    let autoFocus = this.props.inline;
    let localDate = this.getLocalDate();
    return (
      <>
        {this.renderLabel()}
        {this.props.children}
        <DatePicker
          dateFormat={this.props.format}
          autoFocus={autoFocus}
          onKeyDown={this.onKeyDown}
          selected={localDate}
          onBlur={this.onBlur}
          onChange={this.fieldChanged}
        />
      </>
    );
  }

  public render() {
    let className = this.props.className
      ? "date_picker" + " " + this.props.className
      : "date_picker";
    className = this.props.readOnly ? className + " readonly" : className;
    const content =
      (this.state.edit && !this.props.readOnly) || !this.props.inline
        ? this.renderField()
        : this.renderValue();
    return <div className={`field ${className}`}>{content}</div>;
  }
}

export default DateField;
