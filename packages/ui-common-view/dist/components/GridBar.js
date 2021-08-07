"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridBar = void 0;
const React = __importStar(require("react"));
class GridBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = (name, value, data) => {
            switch (name) {
                case "term":
                    const DELAY = 100;
                    if (this._timer !== null)
                        clearTimeout(this._timer);
                    let fn = () => {
                        this.props.handleAction(this.props.name, "changeTerm", value);
                    };
                    this._timer = setTimeout(fn, DELAY);
                    break;
                case "pageSize":
                    this.setState({ pageSize: value });
                    this.props.handleAction(this.props.name, "changePageSize", Number(value));
                    break;
            }
        };
        this._timer = null;
        this.state = {
            pageSize: 20,
        };
    }
    renderPager() {
        if (!this.props.showPager)
            return;
        return React.createElement("ul", { className: "grid_pager" });
    }
    render() {
        let className = "grid_bar " + this.props.position;
        return (React.createElement("div", { className: className },
            React.createElement("div", { className: "group" }),
            React.createElement("div", { className: "group" })));
    }
}
exports.GridBar = GridBar;
GridBar.defaultProps = {
    name: "gridBar",
    placeholder: "Enter Search Term",
    position: "bottom",
    showPager: true,
    showAdd: false,
};
exports.default = GridBar;
