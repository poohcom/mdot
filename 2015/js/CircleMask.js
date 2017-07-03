/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CircleMask = (function (_super) {
    __extends(CircleMask, _super);
    function CircleMask() {
        _super.call(this);
        this.r = 0;
        this.graphics = new createjs.Graphics();
    }
    CircleMask.prototype.drawCircle = function () {
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.graphics.beginFill("#FFF");
        this.graphics.drawCircle(1920 / 2 + 15, 400, this.r);
    };
    CircleMask.prototype.drawArc = function (s, t) {
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.graphics.beginFill("#FFF");
        this.graphics.arc(0, 0, this.r, s, t, false);
        this.graphics.lineTo(0, 0);
    };
    return CircleMask;
})(createjs.Shape);
//# sourceMappingURL=CircleMask.js.map