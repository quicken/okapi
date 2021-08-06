import * as React from "react";
declare type ActionButtonProps = {
    type: "empty" | "create" | "save" | "delete" | "search" | "cancel" | "print";
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactChildren | string;
};
declare function ActionButton(props: ActionButtonProps): JSX.Element;
export default ActionButton;
