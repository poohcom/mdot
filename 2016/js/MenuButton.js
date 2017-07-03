var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MenuButton = (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(uncheckImage, checkImage, overImage, checkBGImage, w, h) {
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        _super.call(this);
        this._check = false;
        this.textBG = new createjs.Bitmap(checkBGImage);
        this.textBG.alpha = 0;
        this.addChild(this.textBG);
        this.text = new createjs.Bitmap(uncheckImage);
        this.addChild(this.text);
        this._checkImage = checkImage;
        this._uncheckImage = uncheckImage;
        this._overImage = overImage;
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, checkImage.width, checkImage.height);
        this.hitArea = hit;
        if (this._overImage === null) { }
        else {
            this.on("mouseover", this.onMouseOver);
            this.on("mouseout", this.onMouseOut);
        }
    }
    MenuButton.prototype.toggle = function () {
        this.setCheck(!this._check);
    };
    MenuButton.prototype.setCheck = function (check) {
        this._check = check;
        if (check == true) {
            this.text.image = this._checkImage;
        }
        else {
            this.text.image = this._uncheckImage;
        }
    };
    MenuButton.prototype.onMouseOver = function (e) {
        this.text.image = this._overImage;
        createjs.Tween.get(this.textBG).to({ alpha: 1 }, (7 / 12) * 1000, createjs.Ease.linear);
    };
    MenuButton.prototype.onMouseOut = function (e) {
        this.setCheck(this._check);
        createjs.Tween.get(this.textBG).to({ alpha: 0 }, (7 / 12) * 1000, createjs.Ease.linear);
    };
    return MenuButton;
})(createjs.Container);
//# sourceMappingURL=MenuButton.js.map