/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TitleCircle = (function (_super) {
    __extends(TitleCircle, _super);
    function TitleCircle(imageOrUrl, center1) {
        _super.call(this);
        this.list = [];
        this.r = 0;
        this.count = 0;
        this._imageOrUrl = new createjs.Bitmap(imageOrUrl);
        this._imageOrUrl.regX = center1;
        this._imageOrUrl.regY = center1;
        this.addChild(this._imageOrUrl);
        for (var i = 0; i < 4; i++) {
            var c = new Circle();
            this.list.push(c);
            this.addChild(c);
        }
    }
    TitleCircle.prototype.drawCircle = function () {
        this.count++;
        for (var i = 0; i < this.list.length; i++) {
            this.list[i].initLine(((i * 10 + this.count / 2) % 40) / 2 + 20, 1 - Math.abs(((i * 10 + this.count / 2) % 40 / 20) - 1));
        }
    };
    return TitleCircle;
})(createjs.Container);
//# sourceMappingURL=TitleCircle.js.map