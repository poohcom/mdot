/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Label = (function (_super) {
    __extends(Label, _super);
    //public _imageOrUrl: HTMLImageElement;
    function Label() {
        _super.call(this);
    }
    Label.prototype.setText = function (text) {
        var list = text.split("\n");
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, 169, list.length * 18);
        this.hitArea = hit;
        for (var i = 0; i < list.length; i++) {
            var button = new createjs.Text(list[i], "normal 13px yoon", "#ffffff");
            button.y = i * 18;
            this.addChild(button);
        }
    };
    Label.prototype.setText2 = function (text) {
        var list = text.split("\n");
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, 39, list.length * 18);
        this.hitArea = hit;
        for (var i = 0; i < list.length; i++) {
            var button = new createjs.Text(list[i], "normal 13px yoon", "#ffffff");
            button.y = i * 18;
            this.addChild(button);
        }
    };
    return Label;
})(createjs.Container);
//# sourceMappingURL=Label.js.map