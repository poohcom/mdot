var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Label = (function (_super) {
    __extends(Label, _super);
    function Label() {
        _super.call(this);
        this.index = 0;
    }
    Label.prototype.setText = function (text) {
        var list = text.split("\n");
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, 169, list.length * 18);
        this.hitArea = hit;
        for (var i = 0; i < list.length; i++) {
            var button = new createjs.Text(list[i], "normal 16px yoon", "#ffffff");
            button.x = 200 - button.getMeasuredWidth();
            button.y = i * 18;
            this.addChild(button);
        }
    };
    Label.prototype.setText2 = function (text) {
        var list = text.split("\n");
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, 39, list.length * 18);
        for (var i = 0; i < list.length; i++) {
            var button = new createjs.Text(list[i], "normal 16px yoon", "#ffffff");
            button.x = -button.getMeasuredWidth();
            hit.x = -button.getMeasuredWidth();
            button.y = i * 18;
            this.addChild(button);
        }
        this.hitArea = hit;
    };
    return Label;
})(createjs.Container);
//# sourceMappingURL=Label.js.map