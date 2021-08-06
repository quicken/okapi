import * as React from "react";

interface GridBarProps {
  name: string;
  handleAction: (name: string, action: string, data: any) => void;
  placeholder: string;
  showSearch?: boolean;
  showPageSizer?: boolean;
  showRecordCount?: boolean;
  showPager?: boolean;
  showAdd?: boolean;
  handleAddAction?: () => void;
  position: "top" | "bottom";
}

interface GridBarState {
  pageSize: number;
}

export class GridBar extends React.Component<GridBarProps, GridBarState> {
  static defaultProps = {
    name: "gridBar",
    placeholder: "Enter Search Term",
    position: "bottom",
    showPager: true,
    showAdd: false,
  };

  private _timer: any;

  constructor(props: GridBarProps) {
    super(props);

    this._timer = null;
    this.state = {
      pageSize: 20,
    };
  }

  private handleOnChange = (name: string, value: any, data: any): void => {
    switch (name) {
      case "term":
        /* Debounce. Waits 'DELAY' ms after users stops typing before initiating AJAX search. */
        const DELAY = 100;
        if (this._timer !== null) clearTimeout(this._timer);
        let fn = () => {
          this.props.handleAction(this.props.name, "changeTerm", value);
        };
        this._timer = setTimeout(fn, DELAY);
        break;
      case "pageSize":
        this.setState({ pageSize: value });
        this.props.handleAction(
          this.props.name,
          "changePageSize",
          Number(value)
        );
        break;
    }
  };

  renderPager() {
    if (!this.props.showPager) return;
    return <ul className="grid_pager"></ul>;
  }

  render() {
    let className = "grid_bar " + this.props.position;
    return (
      <div className={className}>
        <div className="group"></div>
        <div className="group"></div>
      </div>
    );
  }
}

export default GridBar;
