/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
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
        if (this._overImage === null) {
        }
        else {
            this.on("mouseover", this.onMouseOver);
            this.on("mouseout", this.onMouseOut);
        }
    }
    //public hitW: number = 0;
    //public hitH: number = 0;
    //public setHitArea2(): void {
    //    var hit: createjs.Shape = new createjs.Shape();
    //    hit.graphics.beginFill("#000").drawRect(0, 0, this.hitW, this.hitH);
    //    this.hitArea = hit;
    //}
    //public setHitArea(w: number, h: number): void {
    //    var hit: createjs.Shape = new createjs.Shape();
    //    hit.graphics.beginFill("#000").drawRect(0, 0, w, h);
    //    this.hitArea = hit;
    //}
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