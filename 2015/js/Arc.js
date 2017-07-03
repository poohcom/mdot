/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Arc = (function (_super) {
    __extends(Arc, _super);
    function Arc() {
        _super.call(this);
        this._r = 0;
        this.graphics = new createjs.Graphics();
    }
    Arc.prototype.initLine = function (r, a) {
        this._r = r;
        this.graphics.clear();
        if (r <= 0)
            return;
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke("#FFF");
        this.alpha = a;
        this.graphics.arc(0, 0, this._r, 0, Math.PI / 2, false);
    };
    return Arc;
})(createjs.Shape);
//# sourceMappingURL=Arc.js.map