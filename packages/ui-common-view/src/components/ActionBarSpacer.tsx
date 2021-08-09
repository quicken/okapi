import * as React from "react";

interface ActionBarSpacerProp {
  type: "spacer" | "seperator";
}

function ActionBarSpacer(props: React.PropsWithChildren<ActionBarSpacerProp>) {
  const className = props.type === "seperator" ? "seperator" : "spacer";
  return <div className={className}>{props.children}</div>;
}

export default ActionBarSpacer;
