/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PortCircleButton = (function (_super) {
    __extends(PortCircleButton, _super);
    function PortCircleButton(imageOrUrl, base, center1, center2, text1, text2) {
        _super.call(this);
        this._base = null;
        this.isMouseOver = false;
        this._text1 = null;
        this._text2 = null;
        this.labelGroup = null;
        this.label1 = null;
        this.label2 = null;
        this.dy = 0;
        this._base_string = null;
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawRect(0, 0, 36 * 2, 36 * 2);
        hit.x = -36;
        hit.y = -36;
        this.hitArea = hit;
        this._imageOrUrl = new createjs.Bitmap(imageOrUrl);
        this._imageOrUrl.regX = center1;
        this._imageOrUrl.regY = center1;
        this._imageOrUrl.scaleX = this._imageOrUrl.scaleY = 0.1 * (Math.floor(Math.random() * 10000) % 4) + 1;
        this.addChild(this._imageOrUrl);
        this._base_string = base;
        //this._base = new createjs.Bitmap(base);
        //this._base.visible = false;
        //this._base.regX = center2;
        //this._base.regY = center2;
        //this.addChild(this._base);
        this.index = 0;
        //this.regX = center1;
        //this.regY = center1;
        this._center1 = center1;
        this._center2 = center2;
        this._text1 = text1;
        this._text2 = text2;
        this.labelGroup = new createjs.Container();
        this.labelGroup.x = center2 + 10;
        this.labelGroup.y = -center2 / 2;
        this.labelGroup.visible = false;
        this.addChild(this.labelGroup);
        var h = 26;
        if (text1 === null) {
        }
        else {
            var line = text1.indexOf("\n");
            if (line > -1) {
                h = 50;
                this.label1 = new createjs.Text(text1.substr(0, line), "bold 16px yoon", "#ffffff");
                this.label1.y = 0;
                this.labelGroup.addChild(this.label1);
                var label4 = new createjs.Text(text1.substr(line + 1), "bold 16px yoon", "#ffffff");
                label4.y = 24;
                this.labelGroup.addChild(label4);
            }
            else {
                this.label1 = new createjs.Text(text1, "bold 16px yoon", "#ffffff");
                this.labelGroup.addChild(this.label1);
            }
        }
        if (text2 === null) {
            this.labelGroup.y = 0;
        }
        else {
            var line2 = text2.indexOf("\n");
            if (line2 > -1) {
                this.label2 = new createjs.Text(text2.substr(0, line2), "normal 13px yoon", "#ffffff");
                this.label2.y = h;
                this.labelGroup.addChild(this.label2);
                var label3 = new createjs.Text(text2.substr(line2 + 1), "normal 13px yoon", "#ffffff");
                label3.y = h + 20;
                this.labelGroup.addChild(label3);
            }
            else {
                this.label2 = new createjs.Text(text2, "normal 13px yoon", "#ffffff");
                this.label2.y = h;
                this.labelGroup.addChild(this.label2);
            }
        }
        this.on("mouseover", function (event) {
            event.currentTarget._imageOrUrl.visible = false;
            event.currentTarget.createBase();
            event.currentTarget._base.visible = true;
            event.currentTarget._base.scaleX = 0;
            event.currentTarget._base.scaleY = 0;
            createjs.Tween.get(event.currentTarget._base, { loop: false }).to({ scaleX: 1, scaleY: 1 }, 300, createjs.Ease.linear);
            //(<PortCircleButton>event.currentTarget).regX = (<PortCircleButton>event.currentTarget)._center2;
            //(<PortCircleButton>event.currentTarget).regY = (<PortCircleButton>event.currentTarget)._center2;
            event.currentTarget.isMouseOver = true;
            event.currentTarget.labelGroup.visible = true;
            SceneManager.instance().soundplay();
        });
        this.on("mouseout", function (event) {
            event.currentTarget._imageOrUrl.visible = true;
            if (event.currentTarget._base === null) {
            }
            else {
                event.currentTarget._base.visible = false;
            }
            //(<PortCircleButton>event.currentTarget).regX = (<PortCircleButton>event.currentTarget)._center1;
            //(<PortCircleButton>event.currentTarget).regY = (<PortCircleButton>event.currentTarget)._center1;
            event.currentTarget.isMouseOver = false;
            event.currentTarget.labelGroup.visible = false;
        });
    }
    PortCircleButton.prototype.createBase = function () {
        if (this._base === null) {
            this._base = new createjs.Bitmap(this._base_string);
            this._base.visible = false;
            this._base.regX = this._center2;
            this._base.regY = this._center2;
            this.addChild(this._base);
        }
        else {
        }
    };
    PortCircleButton.prototype.updateY = function () {
        this.dy = Math.min(2, this.dy + 0.5);
        this.y = this.y + this.dy;
    };
    return PortCircleButton;
})(createjs.Container);
//# sourceMappingURL=PortCircleButton.js.map