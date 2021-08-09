import * as React from "react";

function ActionBarGroup(props: React.PropsWithChildren<any>) {
  return <div className="group">{props.children}</div>;
}

export default ActionBarGroup;
