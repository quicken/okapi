import * as React from "react";

type TileButtonProps = {
  id?: string;
  type:
    | "grid"
    | "create"
    | "edit"
    | "delete"
    | "clone"
    | "volume"
    | "calculate"; //TODO: Deprecate volume, use calculate instead.
  onClick: (e: React.MouseEvent) => void;
};

function TileButton(props: React.PropsWithChildren<TileButtonProps>) {
  if (props.id) {
    return (
      <button
        id={props.id}
        className={`tileButton ${props.type}`}
        onClick={props.onClick}
      />
    );
  }

  return (
    <button className={`tileButton ${props.type}`} onClick={props.onClick} />
  );
}

export default TileButton;
