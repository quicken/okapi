import React from "react";

type ActionBarProps = {};

export function ActionBar(props: React.PropsWithChildren<ActionBarProps>) {
  return <div className="action_bar">{this.props.children}</div>;
}
