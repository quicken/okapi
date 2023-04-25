import * as React from "react";

interface LayoutProp {
  children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProp> {
  render() {
    return <div className="cfkit_card_layout">{this.props.children}</div>;
  }
}

export default Layout;
