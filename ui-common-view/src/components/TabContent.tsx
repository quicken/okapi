import * as React from "react";

interface TabContentProp {
  name: string;
  label: string;
  disabled: boolean;
}

class TabContent extends React.Component<TabContentProp> {
  static defaultProps = {
    disabled: false,
  };

  render() {
    return (
      <div className="tab_content">
        <div className={`tab_${this.props.name}`}>{this.props.children}</div>
      </div>
    );
  }
}

export default TabContent;
