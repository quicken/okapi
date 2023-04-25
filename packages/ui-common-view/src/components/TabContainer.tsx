import * as React from "react";

interface TabContainerProp {
  name: string;
  defaultActiveTab: number;
  onAction?: (name: string, value: any, data: any) => void;
  children?: React.ReactNode;
}

interface TabContainerState {
  activeTab: number;
}

class TabContainer extends React.Component<
  TabContainerProp,
  TabContainerState
> {
  static defaultProps = {
    defaultActiveTab: 0,
  };

  constructor(props: TabContainerProp) {
    super(props);

    this.state = {
      activeTab: this.props.defaultActiveTab,
    };
  }

  private handleClickTab(tabIndex: number) {
    this.setState({ ...this.state, activeTab: tabIndex });
    if (this.props.onAction) {
      this.props.onAction(this.props.name, "click_tab", tabIndex);
    }
  }

  private renderTabs() {
    const tabs = React.Children.toArray(this.props.children);
    const elements: any[] = [];
    tabs.forEach((child, index) => {
      if (React.isValidElement(child)) {
        const { label, disabled } = child.props;
        const className = index === this.state.activeTab ? "active" : undefined;
        if (disabled) {
          elements.push(
            <li key={`${this.props.name}_tab_${index}`} className="disabled">
              {label}
            </li>
          );
        } else {
          elements.push(
            <li
              key={`${this.props.name}_tab_${index}`}
              className={className}
              onClick={() => {
                this.handleClickTab(index);
              }}
            >
              {label}
            </li>
          );
        }
      }
    });

    return elements;
  }

  public renderTabContent() {
    const children = React.Children.toArray(this.props.children);
    if (this.state.activeTab !== -1 && this.state.activeTab < children.length) {
      return children[this.state.activeTab];
    }
  }

  public render() {
    return (
      <div className="tab_controller">
        <ul className="tab_menu">{this.renderTabs()}</ul>
        <div className="tab_container">{this.renderTabContent()}</div>
      </div>
    );
  }
}

export default TabContainer;
