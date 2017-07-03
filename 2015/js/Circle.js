/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        _super.call(this);
        this.index = 0;
        this._r = 0;
        this.graphics = new createjs.Graphics();
    }
    Circle.prototype.initFill = function (r, a) {
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        //this.graphics.beginStroke("#FFF");
        this.graphics.beginFill("#FFF");
        this.graphics.drawCircle(0, 0, r);
        this.alpha = a;
    };
    Circle.prototype.init = function (r, a) {
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.graphics.beginFill("#FFF");
        this.graphics.drawCircle(0, 0, r);
        this.alpha = a;
    };
    Circle.prototype.initColor = function (r, a, color) {
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke(color);
        this.graphics.beginFill(color);
        this.graphics.drawCircle(0, 0, r);
        this.alpha = a;
    };
    Circle.prototype.initLine = function (r, a) {
        this._r = r;
        this.graphics.clear();
        if (r <= 0)
            return;
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.graphics.drawCircle(0, 0, r);
        this.alpha = a;
    };
    return Circle;
})(createjs.Shape);
//# sourceMappingURL=Circle.js.map