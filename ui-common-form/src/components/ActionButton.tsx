import * as React from "react";

type ActionButtonProps = {
  type: "empty" | "create" | "save" | "delete" | "search" | "cancel" | "print";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactChildren;
};

function ActionButton(props: ActionButtonProps) {
  return (
    <button className={`actionButton ${props.type}`} onClick={props.onClick}>
      <span className="icon"></span>
      <span>{props.children}</span>
    </button>
  );
}

export default ActionButton;
