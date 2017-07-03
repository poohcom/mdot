var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DarkButton = (function (_super) {
    __extends(DarkButton, _super);
    function DarkButton(w, h) {
        _super.call(this);
        this.w = 0;
        this.h = 0;
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, w, h);
        this.hitArea = hit;
        this.regX = w / 2;
        this.regY = h / 2;
        this.w = w;
        this.h = h;
        this.graphics = new createjs.Graphics();
        this.graphics.clear();
        this.graphics.clear();
        this.graphics.beginFill("#000");
        this.graphics.drawRect(0, 0, w, h);
        this.alpha = 0.0;
    }
    DarkButton.prototype.setPos = function (x, y) {
        this.x = x + this.w / 2;
        this.y = y + this.h / 2;
    };
    DarkButton.prototype.setVisible = function () {
        createjs.Tween.removeTweens(this);
        this.alpha = 0.0;
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0.3 }, 500, createjs.Ease.circOut);
    };
    DarkButton.prototype.setInvisible = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0.0 }, 500, createjs.Ease.circOut);
    };
    return DarkButton;
})(createjs.Shape);
//# sourceMappingURL=DarkButton.js.map