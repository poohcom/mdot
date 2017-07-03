/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SineShape = (function (_super) {
    __extends(SineShape, _super);
    function SineShape() {
        _super.call(this);
        this.lineSize = 1;
        this.graphics = new createjs.Graphics();
    }
    SineShape.prototype.drawSine = function (a1, a2, a3, b1, b2, b3, height) {
        this.graphics.clear();
        this.graphics.beginStroke("#FFF");
        this.graphics.setStrokeStyle(this.lineSize);
        this.graphics.moveTo(0, 540);
        var r = 0;
        var c = Math.PI / 960;
        for (var i = 10; i < 1920; i = i + 10) {
            r = c * i;
            this.graphics.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * height);
        }
        this.graphics.lineTo(1920, 540);
    };
    // 가운데 저정렬
    SineShape.prototype.drawMiddleSine = function (a1, a2, a3, b1, b2, b3, height) {
        this.graphics.clear();
        this.graphics.beginStroke("#FFF");
        this.graphics.setStrokeStyle(this.lineSize);
        this.graphics.moveTo(0, 540);
        var r = 0;
        var c = Math.PI / 960;
        for (var i = 10; i < 1920; i = i + 10) {
            r = c * i;
            this.graphics.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * (0.7 - Math.cos(r * 2) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * height);
        }
        this.graphics.lineTo(1920, 540);
    };
    SineShape.prototype.fx2 = function (r, a1, a2, a3, b1, b2, b3) {
        return Math.sin((-r + a2) * a1) * a3 + Math.sin((-r + b2) * b1) * b3;
        //return Math.sin((-r + a2) * a1) * a3;
    };
    return SineShape;
})(createjs.Shape);
//# sourceMappingURL=SineShape.js.map