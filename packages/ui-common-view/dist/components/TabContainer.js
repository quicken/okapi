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
const React = __importStar(require("react"));
class TabContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.defaultActiveTab,
        };
    }
    handleClickTab(tabIndex) {
        this.setState(Object.assign(Object.assign({}, this.state), { activeTab: tabIndex }));
        if (this.props.onAction) {
            this.props.onAction(this.props.name, "click_tab", tabIndex);
        }
    }
    renderTabs() {
        const tabs = React.Children.toArray(this.props.children);
        const elements = [];
        tabs.forEach((child, index) => {
            if (React.isValidElement(child)) {
                const { label, disabled } = child.props;
                const className = index === this.state.activeTab ? "active" : undefined;
                if (disabled) {
                    elements.push(React.createElement("li", { key: `${this.props.name}_tab_${index}`, className: "disabled" }, label));
                }
                else {
                    elements.push(React.createElement("li", { key: `${this.props.name}_tab_${index}`, className: className, onClick: () => {
                            this.handleClickTab(index);
                        } }, label));
                }
            }
        });
        return elements;
    }
    renderTabContent() {
        const children = React.Children.toArray(this.props.children);
        if (this.state.activeTab !== -1 && this.state.activeTab < children.length) {
            return children[this.state.activeTab];
        }
    }
    render() {
        return (React.createElement("div", { className: "tab_controller" },
            React.createElement("ul", { className: "tab_menu" }, this.renderTabs()),
            React.createElement("div", { className: "tab_container" }, this.renderTabContent())));
    }
}
TabContainer.defaultProps = {
    defaultActiveTab: 0,
};
exports.default = TabContainer;
