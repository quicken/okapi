"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var React = __importStar(require("react"));
var TabContainer = (function (_super) {
    __extends(TabContainer, _super);
    function TabContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeTab: _this.props.defaultActiveTab,
        };
        return _this;
    }
    TabContainer.prototype.handleClickTab = function (tabIndex) {
        this.setState(__assign(__assign({}, this.state), { activeTab: tabIndex }));
        if (this.props.onAction) {
            this.props.onAction(this.props.name, "click_tab", tabIndex);
        }
    };
    TabContainer.prototype.renderTabs = function () {
        var _this = this;
        var tabs = React.Children.toArray(this.props.children);
        var elements = [];
        tabs.forEach(function (child, index) {
            if (React.isValidElement(child)) {
                var _a = child.props, label = _a.label, disabled = _a.disabled;
                var className = index === _this.state.activeTab ? "active" : undefined;
                if (disabled) {
                    elements.push(React.createElement("li", { key: _this.props.name + "_tab_" + index, className: "disabled" }, label));
                }
                else {
                    elements.push(React.createElement("li", { key: _this.props.name + "_tab_" + index, className: className, onClick: function () {
                            _this.handleClickTab(index);
                        } }, label));
                }
            }
        });
        return elements;
    };
    TabContainer.prototype.renderTabContent = function () {
        var children = React.Children.toArray(this.props.children);
        if (this.state.activeTab !== -1 && this.state.activeTab < children.length) {
            return children[this.state.activeTab];
        }
    };
    TabContainer.prototype.render = function () {
        return (React.createElement("div", { className: "tab_controller" },
            React.createElement("ul", { className: "tab_menu" }, this.renderTabs()),
            React.createElement("div", { className: "tab_container" }, this.renderTabContent())));
    };
    TabContainer.defaultProps = {
        defaultActiveTab: 0,
    };
    return TabContainer;
}(React.Component));
exports.default = TabContainer;
