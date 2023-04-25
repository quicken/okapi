import * as React from "react";

interface TextAreaValueProps {
  name: string;
  defaultEdit: boolean;
  value?: string;
  onChange?: (name: string, value: string, data: any) => void;
  inline: boolean;
  placeholder?: string;
  label?: string;
  readOnly?: boolean;
}

interface TextAreaValueState {
  edit: boolean;
}

class TextAreaValue extends React.Component<
  TextAreaValueProps,
  TextAreaValueState
> {
  static defaultProps = {
    defaultEdit: false,
    value: "",
    inline: false,
  };

  _input: HTMLTextAreaElement | null;
  _old_value: string;
  _discard: boolean;

  constructor(props: any) {
    super(props);

    this._input = null;
    this._old_value = "";
    this._discard = false;

    this.state = {
      edit: this.props.defaultEdit,
    };
  }

  public componentDidMount() {
    if (this._input) {
      /* Resize textarea to fit content. */
      this._input.style.height = "";
      this._input.style.height = this._input.scrollHeight + 5 + "px";
    }

    if (this.props.readOnly) return;

    if (this.state.edit) {
      if (this._input) {
        this._old_value = this._input.value;

        this._input.focus();

        /* Position cursor at end of content. */
        this._input.setSelectionRange(
          this._input.value.length,
          this._input.value.length
        );
      }

      this._discard = false;
    }
  }

  public componentDidUpdate(
    prevProps: TextAreaValueProps,
    prevState: TextAreaValueState
  ) {
    if (this.props.readOnly) return;

    if (this.state.edit) {
      this._input!.focus();

      /* Resize textarea to fit content. */
      if (this._input) {
        this._input.style.height = "";
        this._input.style.height = this._input.scrollHeight + 5 + "px";

        /* Position cursor at end of content. */
        this._input.setSelectionRange(
          this._input.value.length,
          this._input.value.length
        );

        this._old_value = this._input.value;
      }

      this._discard = false;
    }
  }

  private onKeyUp = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        if (e.shiftKey || e.altKey || e.ctrlKey) return;
        this._input!.blur();
        break;
      case "Escape": {
        this._discard = true;
        this._input!.blur();
        break;
      }
      default:
    }
  };

  private handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    /* Resize text are to suit content. */
    if (this._input) {
      this._input.style.height = "";
      this._input.style.height = this._input.scrollHeight + "px";
    }
  };

  private onClick = (e: React.MouseEvent) => {
    if (this.props.readOnly) return;
    this.setState({ ...this.state, edit: true });
  };

  private onBlur = (e: any) => {
    if (this.props.readOnly) return;
    let value = e.currentTarget.value;
    if (this._discard) {
      value = this._old_value;
    }

    this.setState({ ...this.state, edit: false });
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value, value);
    }
  };

  private onFocus = (e: React.FocusEvent) => {
    if (this.props.readOnly) return;
    this.setState({ ...this.state, edit: true });
  };

  private renderValue = () => {
    let value = this.props.value;
    let className = "value";
    if (
      !this.props.value ||
      (this.props.value === "" && this.props.placeholder)
    ) {
      value = this.props.placeholder!;
      className = "value placeholder";
    }

    return (
      <span
        className={className}
        tabIndex={0}
        onClick={this.onClick}
        onFocus={this.onFocus}
      >
        {value}
      </span>
    );
  };

  private renderField = () => {
    return (
      <textarea
        ref={(c) => (this._input = c)}
        onInput={this.handleInput}
        onBlur={this.onBlur}
        onKeyUp={this.onKeyUp}
        defaultValue={this.props.value}
        readOnly={this.props.readOnly}
      />
    );
  };

  private renderLabel() {
    if (this.props.label !== undefined && this.props.label !== "") {
      return <label htmlFor="">{this.props.label}</label>;
    }
  }

  render() {
    let className = this.props.readOnly
      ? "field textarea readonly"
      : "field textarea";
    const content =
      (this.state.edit && !this.props.readOnly) || !this.props.inline
        ? this.renderField()
        : this.renderValue();
    return (
      <div className={className}>
        {this.renderLabel()}
        {content}
      </div>
    );
  }
}

export default TextAreaValue;
