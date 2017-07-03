var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(imageOrUrl, w, h) {
        _super.call(this, imageOrUrl);
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, w, h);
        this.hitArea = hit;
    }
    return Button;
})(createjs.Bitmap);
//# sourceMappingURL=Button.js.map