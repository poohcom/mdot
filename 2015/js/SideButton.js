/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SideButton = (function (_super) {
    __extends(SideButton, _super);
    function SideButton(imageOrUrl, base, w, h, index, min, max, rad) {
        _super.call(this);
        this.isMouseOver = false;
        this.min_r = min;
        this.max_r = max;
        this.rad = rad;
        this._r = min;
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, w * 2, h * 2);
        hit.x = -w;
        hit.y = -h;
        this.hitArea = hit;
        this.sceneIndex = index;
        this._imageOrUrl = new createjs.Bitmap(imageOrUrl);
        this._imageOrUrl.regX = w / 2;
        this._imageOrUrl.regY = h / 2;
        this.addChild(this._imageOrUrl);
        this._base = new createjs.Bitmap(base);
        this._base.regX = 0;
        this._base.regY = 12 / 2;
        this._base.x = w;
        this._base.y = h / 2;
        this._base.visible = true;
        this._base.alpha = 0;
        this.addChild(this._base);
        this.on("mouseover", function (event) {
            event.currentTarget.setMouseover();
            SceneManager.instance().soundplay();
        });
        this.on("mouseout", function (event) {
            event.currentTarget.setMouseout();
        });
        this.on("click", function (event) {
            SceneManager.instance().nextSceneIndex(event.currentTarget.sceneIndex);
        });
    }
    SideButton.prototype.setMouseover = function () {
        this._base.visible = true;
        this.isMouseOver = true;
        this._base.alpha = 0;
        createjs.Tween.get(this._base, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);
    };
    SideButton.prototype.setMouseout = function () {
        this._base.visible = false;
        this.isMouseOver = false;
    };
    SideButton.prototype.getMax = function () {
        if (SceneManager.instance().getSceneIndex() == this.sceneIndex) {
            return this.min_r + (this.max_r - this.min_r) / 3;
        }
        else {
            return this.max_r;
        }
    };
    SideButton.prototype.setCirclePosition = function () {
        if (this._r > this.min_r) {
            this._r = this._r - 1;
        }
        this.x = Math.sin(Math.PI * this.rad / 180) * this._r - 50;
        this.y = -Math.cos(Math.PI * this.rad / 180) * this._r - 50;
    };
    return SideButton;
})(createjs.Container);
//# sourceMappingURL=SideButton.js.map