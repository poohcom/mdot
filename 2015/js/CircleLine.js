/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CircleLine = (function (_super) {
    __extends(CircleLine, _super);
    function CircleLine() {
        _super.call(this);
        this._r = 1;
        this.min_r = 1;
        this.max_r = 1;
        this.rad = 0;
        this.graphics = new createjs.Graphics();
    }
    CircleLine.prototype.init = function (min_r, max_r, r) {
        this._r = r;
        this.min_r = min_r;
        this.max_r = max_r;
    };
    CircleLine.prototype.drawLine = function () {
        this._r = this._r + 0.5;
        if (this._r > this.max_r) {
            this._r = this.min_r;
        }
        if (this._r < this.min_r) {
            return;
        }
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.alpha = 1 - (this._r - this.min_r) / (this.max_r - this.min_r);
        //this.graphics.drawCircle(0, 0, this._max_r);
        //this.scaleX = this.scaleY = this._r / this._max_r;
        //
        //this.graphics.drawCircle(0, 0, this._r);
        //
        this.graphics.arc(0, 0, this._r, 0, 2 * Math.PI * 2, false);
    };
    CircleLine.prototype.drawLineRad = function () {
        var x1 = Math.sin(Math.PI * this.rad / 180) * this.min_r;
        var y1 = -Math.cos(Math.PI * this.rad / 180) * this.min_r;
        var x2 = Math.sin(Math.PI * this.rad / 180) * this.max_r;
        var y2 = -Math.cos(Math.PI * this.rad / 180) * this.max_r;
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
    };
    return CircleLine;
})(createjs.Shape);
//# sourceMappingURL=CircleLine.js.map