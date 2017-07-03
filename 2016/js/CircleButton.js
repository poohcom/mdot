var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CircleButton = (function (_super) {
    __extends(CircleButton, _super);
    function CircleButton(imageOrUrl, base, center1, center2) {
        _super.call(this);
        this.isMouseOver = false;
        this.rad = 0;
        this.ts = 1;
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, center2 * 2, center2 * 2);
        hit.x = -center2;
        hit.y = -center2;
        this.hitArea = hit;
        this._imageOrUrl = new createjs.Bitmap(imageOrUrl);
        this._imageOrUrl.regX = center1;
        this._imageOrUrl.regY = center1;
        this.addChild(this._imageOrUrl);
        this._base = new createjs.Bitmap(base);
        this._base.regX = center2;
        this._base.regY = center2;
        this._base.visible = false;
        this._base.scaleX = 0.1;
        this._base.scaleY = 0.1;
        this._base.alpha = 0;
        this.addChild(this._base);
        this.index = 0;
        this.on("mouseover", function (event) {
            event.currentTarget.setMouseover();
        });
        this.on("mouseout", function (event) {
            event.currentTarget.setMouseout();
        });
    }
    CircleButton.prototype.setMouseover = function () {
        this._imageOrUrl.visible = false;
        this._base.visible = true;
        this.isMouseOver = true;
        this._base.alpha = 0;
        this._base.scaleX = 0.1;
        this._base.scaleY = 0.1;
        createjs.Tween.get(this._base, { loop: false }).to({ alpha: 1, scaleX: this.ts, scaleY: this.ts }, 500, createjs.Ease.circOut);
    };
    CircleButton.prototype.setMouseout = function () {
        this._imageOrUrl.visible = true;
        this._base.visible = false;
        this.isMouseOver = false;
    };
    return CircleButton;
})(createjs.Container);
//# sourceMappingURL=CircleButton.js.map