var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var MyComponent = (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(props) {
        _super.call(this, props);
        this.foo = 42;
    }
    MyComponent.prototype.render = function () {
        return (React.createElement("div", null, "Hello world!"));
    };
    return MyComponent;
})(React.Component);
exports.MyComponent = MyComponent;
