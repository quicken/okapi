import * as React from "react";

type Fieldtype =
  | "string"
  | "money"
  | "percent"
  | "int"
  | "decimal"
  | "password"
  | "money3";

interface FieldInputProps {
  name: string;
  type: Fieldtype;
  value: string;
  onChange: (name: string, value: any, data?: any) => void;
  onBlur?: (name: string, value: any, data?: any) => void;
  onFocus?: (name: string) => void;
  inline: boolean;
  defaultEdit: boolean;
  className?: string;
  placeholder?: string;
  id?: string;
  /** The text label that is to be shown for the field. An empty or undefined label prevents the lablel HTML from being rendered. */
  label?: string;
  /** If set adds a badge container containing the specified string. The container has a classname='badge' a badge is intended to be at the start of the form field. e.g. arrow on a width input. */
  badge?: string;
  /** If set adds an extra element containing the symbol inside of the form field. The symbols is also added as a suffix when displaying the field value. Use for example to display a non standard unit. ie. degrees. */
  symbol?: string;
  /** Experimental: Renders the element without wrapping the input value inside of a standard div. */
  container?: boolean;
  /** Render the component as read-only. In inline mode click to show field input is disabled. In non-inline mode the input field is set to read only. */
  readOnly?: boolean;
  mask?: boolean;
  /** This should be set to the true for fields that should not set form to dirty - logins etc. */
  preventDirty?: boolean;
  children?: React.ReactNode | string;
}

interface FieldInputState {
  edit: boolean;
  undo: string;
  value: string;
}

class InputValue extends React.Component<FieldInputProps, FieldInputState> {
  static defaultProps = {
    placeholder: "",
    defaultEdit: false,
    inline: false,
    type: "string",
    container: true,
    readOnly: false,
    mask: false,
    tooltipType: "expand",
    showToolTip: false,
    preventDirty: false,
  };

  static getDerivedStateFromProps(
    nextProps: FieldInputProps,
    prevState: FieldInputState
  ): any {
    if (nextProps.value != prevState.undo) {
      return { undo: nextProps.value, value: nextProps.value };
    }

    return null;
  }

  private _input: HTMLInputElement | null;

  constructor(props: FieldInputProps) {
    super(props);

    this._input = null;

    this.state = {
      edit: this.props.defaultEdit,
      undo: this.props.value,
      value: this.props.value,
    };
  }

  public componentDidMount() {
    if (this.props.defaultEdit) {
      this._input!.focus();
      this._input!.select();
    }
  }

  public componentDidUpdate(
    prevProps: FieldInputProps,
    prevState: FieldInputState
  ) {
    if (this.props.readOnly) return;

    if (!prevState.edit && this.state.edit) {
      this._input!.focus();
      this._input!.select();
    }
  }

  private onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (this.props.readOnly) return;

    this.setState({ ...this.state, edit: true });
  };

  private onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (this.props.readOnly) return;

    if (this.props.onFocus) {
      this.props.onFocus(this.props.name);
    } else {
      this.setState({ ...this.state, edit: true });
    }
  };

  private onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (this.props.inline)
      this.props.onChange(
        this.props.name,
        this.state.value,
        this.stringToValue(this.state.value, this.props.type)
      );
    if (this.props.onBlur)
      this.props.onBlur(
        this.props.name,
        this.state.value,
        this.stringToValue(this.state.value, this.props.type)
      );
    this.setState({
      ...this.state,
      edit: false,
      value: this.valueToString(this.state.value, this.props.type),
    });
  };

  private onKeyDown = (e: React.KeyboardEvent) => {
    if (this.props.type === "string") return;

    if (
      e.key === "Enter" ||
      e.key === "Escape" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "Delete" ||
      e.key === "Backspace" ||
      e.key === "Tab"
    )
      return;

    /* Allow numbers from keyboard and numpad. */
    if (!isNaN(parseInt(e.key))) return;

    /* Allow decimal marker for non int fields. */
    if (this.props.type !== "int" && (e.key === "." || e.key === ",")) return;

    /* Deny all other keys. */
    e.preventDefault();
    return false;
  };

  private onKeyUp = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        this._input!.blur();
        break;
      case "Escape": {
        this.props.onChange(
          this.props.name,
          String(this.state.undo),
          this.state.undo
        );
        break;
      }
      default: {
        if (!this.props.inline && this.state.value.length > 1) {
          this.props.onChange(
            this.props.name,
            this.state.value,
            this.stringToValue(this.state.value, this.props.type)
          );
        }
      }
    }
  };

  private fieldChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
    if (!this.props.inline)
      this.props.onChange(
        this.props.name,
        String(e.currentTarget.value),
        e.currentTarget.value
      );
  };

  private stringToValue(stringValue: string, type: Fieldtype): any {
    let num_string =
      stringValue.slice(-1) === "." ? stringValue + "0" : stringValue;

    switch (type) {
      case "int": {
        return parseInt(num_string, 10);
      }

      case "decimal": {
        return parseFloat(num_string);
      }

      case "percent": {
        return parseFloat(num_string);
      }

      case "money": {
        return parseFloat(num_string).toFixed(2);
      }

      case "money3": {
        return parseFloat(num_string).toFixed(3);
      }
      default:
    }
    return stringValue;
  }

  private valueToString(value: any, type: Fieldtype): string {
    switch (type) {
      case "int": {
        const num_value = parseInt(value, 10);
        const stringValue = isNaN(num_value) ? "0" : String(num_value);
        return stringValue;
      }
      case "percent": {
        const num_value = parseFloat(value);
        const stringValue = isNaN(num_value) ? "0" : num_value.toFixed(2);
        return stringValue;
      }
      case "money": {
        const num_value = parseFloat(value);
        const stringValue = isNaN(num_value) ? "0.00" : num_value.toFixed(2);
        return stringValue;
      }
      case "money3": {
        const num_value = parseFloat(value);
        const stringValue = isNaN(num_value) ? "0.000" : num_value.toFixed(3);
        return stringValue;
      }
      default:
        return String(value);
    }
  }

  private getSymbol(type: Fieldtype) {
    switch (type) {
      case "money":
        return "$";
      case "money3":
        return "$";
      case "percent":
        return "%";
    }

    return this.props.symbol ? this.props.symbol : "";
  }

  private renderLabel() {
    if (this.props.label && this.props.label !== "") {
      return <label htmlFor="">{this.props.label}</label>;
    }

    return;
  }

  private renderBadge() {
    if (this.props.badge && this.props.badge !== "") {
      return <div className="badge">{this.props.badge}</div>;
    }

    return;
  }

  private renderValue = () => {
    let stringValue = this.valueToString(this.props.value, this.props.type);
    let className = "value";

    switch (this.props.type) {
      case "percent":
        stringValue = `${stringValue} %`;
        break;
      case "money":
        stringValue = `$ ${stringValue}`;
        break;
      case "money3":
        stringValue = `$ ${stringValue}`;
        break;
      default:
    }

    if (
      !this.props.value ||
      (this.props.value === "" && this.props.placeholder)
    ) {
      stringValue = this.props.placeholder!;
      className = "value placeholder";
    }

    return (
      <span
        className={className}
        tabIndex={0}
        onFocus={this.onFocus}
        onClick={this.onClick}
      >
        {stringValue}
      </span>
    );
  };

  private renderField() {
    let stringValue = this.state.value;
    let _fieldType: string = "";
    if (this.props.mask) {
      _fieldType = "password";
    } else {
      _fieldType = "text";
    }

    return (
      <>
        {this.renderBadge()}
        <input
          type={_fieldType}
          placeholder={this.props.placeholder}
          ref={(c) => (this._input = c)}
          onChange={this.fieldChanged}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
          id={this.props.id}
          value={stringValue}
          readOnly={this.props.readOnly}
        />
        <span className="symbol">{this.getSymbol(this.props.type)}</span>
      </>
    );
  }

  public render() {
    let className = this.props.className
      ? "field " + this.props.type + " " + this.props.className
      : "field " + this.props.type;
    className = this.props.readOnly ? className + " readonly" : className;
    const content =
      (this.state.edit && !this.props.readOnly) || !this.props.inline
        ? this.renderField()
        : this.renderValue();

    if (!["percent", "money", "money3"].includes(this.props.type)) {
      let symbol = this.getSymbol(this.props.type);
      if (symbol.length === 3) {
        className = className + " three";
      } else if (symbol.length == 2) {
        className = className + " two";
      } else if (symbol.length == 1) {
        className = className + " one";
      }
    }

    if (this.props.container) {
      return (
        <div className={className}>
          {this.renderLabel()}
          {this.props.children}
          <div className="wrap">{content}</div>
        </div>
      );
    }

    return <div className={`wrap ${className}`}>{content}</div>;
  }
}

export default InputValue;
