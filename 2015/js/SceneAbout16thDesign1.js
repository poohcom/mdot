/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneAbout16thDesign1 = (function (_super) {
    __extends(SceneAbout16thDesign1, _super);
    function SceneAbout16thDesign1() {
        _super.call(this);
        if (SceneAbout16thDesign1._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thDesign1._instance = this;
        this.init();
    }
    SceneAbout16thDesign1.instance = function () {
        if (SceneAbout16thDesign1._instance === null) {
            SceneAbout16thDesign1._instance = new SceneAbout16thDesign1();
        }
        return SceneAbout16thDesign1._instance;
    };
    SceneAbout16thDesign1.prototype.init = function () {
        this.initBubble("#FFF");
        this.process_image1 = new createjs.Bitmap(this.getTex("process_image1"));
        this.process_image1.x = 135;
        this.process_image1.y = 612;
        this.addChild(this.process_image1);
        this.process_image2 = new createjs.Bitmap(this.getTex("process_image2"));
        this.process_image2.x = 1023;
        this.process_image2.y = 340;
        this.addChild(this.process_image2);
        this.process_line_decoration = new createjs.Bitmap(this.getTex("process_line_decoration1"));
        this.process_line_decoration.x = (1920 - 116) / 2;
        this.process_line_decoration.y = 0;
        this.addChild(this.process_line_decoration);
        this.date1 = new createjs.Bitmap(this.getTex("date1"));
        this.date1.x = 1021;
        this.date1.y = 306;
        this.addChild(this.date1);
        this.date2 = new createjs.Bitmap(this.getTex("date2"));
        this.date2.x = 824;
        this.date2.y = 583;
        this.addChild(this.date2);
    };
    SceneAbout16thDesign1.prototype.startScene = function () {
        this.count = 0;
        this.alpha = 1;
        //createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        this.addEventListener("tick", this.drawing);
    };
    SceneAbout16thDesign1.prototype.stopScene = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 800, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
    };
    SceneAbout16thDesign1.prototype.drawing = function (event) {
        event.target.drawLines();
    };
    SceneAbout16thDesign1.prototype.drawLines = function () {
        this.count++;
        this.updateBubble();
    };
    SceneAbout16thDesign1._instance = null;
    return SceneAbout16thDesign1;
})(Scene);
//# sourceMappingURL=SceneAbout16thDesign1.js.map