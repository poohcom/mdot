/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneAbout16thDesign2 = (function (_super) {
    __extends(SceneAbout16thDesign2, _super);
    function SceneAbout16thDesign2() {
        _super.call(this);
        if (SceneAbout16thDesign2._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thDesign2._instance = this;
        this.init();
    }
    SceneAbout16thDesign2.instance = function () {
        if (SceneAbout16thDesign2._instance === null) {
            SceneAbout16thDesign2._instance = new SceneAbout16thDesign2();
        }
        return SceneAbout16thDesign2._instance;
    };
    SceneAbout16thDesign2.prototype.init = function () {
        this.initBubble("#FFF");
        this.process_image1 = new createjs.Bitmap(this.getTex("process_image3"));
        this.process_image1.x = 1018;
        this.process_image1.y = 159;
        this.addChild(this.process_image1);
        this.process_image2 = new createjs.Bitmap(this.getTex("process_image4"));
        this.process_image2.x = 327;
        this.process_image2.y = 468;
        this.addChild(this.process_image2);
        this.process_line_decoration = new createjs.Bitmap(this.getTex("process_line_decoration2"));
        this.process_line_decoration.x = (1920 - 116) / 2;
        this.process_line_decoration.y = 0;
        this.addChild(this.process_line_decoration);
        this.date1 = new createjs.Bitmap(this.getTex("date3"));
        this.date1.x = 1021;
        this.date1.y = 131;
        this.addChild(this.date1);
        this.date2 = new createjs.Bitmap(this.getTex("date4"));
        this.date2.x = 824;
        this.date2.y = 443;
        this.addChild(this.date2);
    };
    SceneAbout16thDesign2.prototype.startScene = function () {
        this.count = 0;
        this.alpha = 1;
        //createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        this.addEventListener("tick", this.drawing);
    };
    SceneAbout16thDesign2.prototype.stopScene = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 800, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
    };
    SceneAbout16thDesign2.prototype.drawing = function (event) {
        event.target.drawLines();
    };
    SceneAbout16thDesign2.prototype.drawLines = function () {
        this.count++;
        this.updateBubble();
    };
    SceneAbout16thDesign2._instance = null;
    return SceneAbout16thDesign2;
})(Scene);
//# sourceMappingURL=SceneAbout16thDesign2.js.map