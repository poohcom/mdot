var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        _super.call(this);
        this.graphics = new createjs.Graphics();
    }
    Rect.prototype.init = function (w, h, color, fill, italic) {
        if (fill === void 0) { fill = false; }
        if (italic === void 0) { italic = false; }
        this._fill = fill;
        this._w = w;
        this._max_w = w;
        this._h = h;
        this._color = color;
        this._italic = italic;
        this.update();
    };
    Rect.prototype.update = function () {
        this.graphics.clear();
        this.graphics.setStrokeStyle(1);
        this.graphics.beginStroke(this._color);
        if (this._fill) {
            this.graphics.beginFill(this._color);
        }
        if (this._italic == false) {
            this.graphics.drawRect(0, 0, this._w, this._h);
        }
        else {
            this.graphics.moveTo(0, 0);
            this.graphics.lineTo(Math.min(this._max_w, this._w + 10), 0);
            this.graphics.lineTo(this._w, this._h);
            this.graphics.lineTo(0, this._h);
        }
    };
    Object.defineProperty(Rect.prototype, "w", {
        get: function () {
            return this._w;
        },
        set: function (value) {
            this._w = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "h", {
        get: function () {
            return this._h;
        },
        set: function (value) {
            this._h = value;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    return Rect;
})(createjs.Shape);
//# sourceMappingURL=Rect.js.map