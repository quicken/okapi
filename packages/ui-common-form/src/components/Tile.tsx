import * as React from "react";

type TileProps = {
  id?: string;
  type: "edit" | "delete";
};

function Tile(props: React.PropsWithChildren<TileProps>) {
  if (props.id) {
    return (
      <button
        id={props.id}
        className={`tile ${props.type}`}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
      />
    );
  }

  return (
    <button
      className={`tile ${props.type}`}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
    />
  );
}

export default Tile;
