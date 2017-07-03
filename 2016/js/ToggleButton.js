var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToggleButton = (function (_super) {
    __extends(ToggleButton, _super);
    function ToggleButton(checkImage, uncheckImage, overImage, w, h) {
        _super.call(this, uncheckImage);
        this._check = false;
        this._checkImage = checkImage;
        this._uncheckImage = uncheckImage;
        this._overImage = overImage;
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, w, h);
        this.hitArea = hit;
        if (this._overImage === null) { }
        else {
            this.on("mouseover", this.onMouseOver);
            this.on("mouseout", this.onMouseOut);
        }
    }
    ToggleButton.prototype.toggle = function () {
        this.setCheck(!this._check);
    };
    ToggleButton.prototype.setCheck = function (check) {
        this._check = check;
        if (check == true) {
            this.image = this._checkImage;
        }
        else {
            this.image = this._uncheckImage;
        }
    };
    ToggleButton.prototype.onMouseOver = function (e) {
        this.image = this._overImage;
    };
    ToggleButton.prototype.onMouseOut = function (e) {
        this.setCheck(this._check);
    };
    return ToggleButton;
})(createjs.Bitmap);
//# sourceMappingURL=ToggleButton.js.map