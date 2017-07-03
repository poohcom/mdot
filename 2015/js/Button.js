/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Button = (function (_super) {
    __extends(Button, _super);
    //public _imageOrUrl: HTMLImageElement;
    function Button(imageOrUrl, w, h) {
        _super.call(this, imageOrUrl);
        //this._imageOrUrl = imageOrUrl;
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, w, h);
        this.hitArea = hit;
    }
    return Button;
})(createjs.Bitmap);
//# sourceMappingURL=Button.js.map