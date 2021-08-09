import * as React from "react";

interface CheckboxProps {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange?: (name: string, checked: boolean, value: string) => void;
}

function Checkbox(props: CheckboxProps) {
  let clickHandler = (e: any) => {
    if (props.onChange) {
      props.onChange(props.name, props.checked, props.value);
    }
  };

  return (
    <div className="checkbox">
      <div
        className={`${props.checked ? "box on" : "box"}`}
        onClick={clickHandler}
      ></div>
      <label onClick={clickHandler}>{props.label}</label>
      <input
        type="checkbox"
        name={props.name}
        defaultChecked={props.checked}
        value={props.value}
      />
    </div>
  );
}

export default Checkbox;
