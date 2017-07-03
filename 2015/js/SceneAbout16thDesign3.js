/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneAbout16thDesign3 = (function (_super) {
    __extends(SceneAbout16thDesign3, _super);
    function SceneAbout16thDesign3() {
        _super.call(this);
        if (SceneAbout16thDesign3._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thDesign3._instance = this;
        this.init();
    }
    SceneAbout16thDesign3.instance = function () {
        if (SceneAbout16thDesign3._instance === null) {
            SceneAbout16thDesign3._instance = new SceneAbout16thDesign3();
        }
        return SceneAbout16thDesign3._instance;
    };
    SceneAbout16thDesign3.prototype.init = function () {
        this.initBubble("#FFF");
        this.process_image1 = new createjs.Bitmap(this.getTex("process_image5"));
        this.process_image1.x = 311;
        this.process_image1.y = 372;
        this.addChild(this.process_image1);
        this.process_line_decoration = new createjs.Bitmap(this.getTex("process_line_decoration3"));
        this.process_line_decoration.x = (1920 - 116) / 2;
        this.process_line_decoration.y = 0;
        this.addChild(this.process_line_decoration);
        this.date1 = new createjs.Bitmap(this.getTex("spectrum_concept_typo"));
        this.date1.x = 861;
        this.date1.y = 274;
        this.addChild(this.date1);
    };
    SceneAbout16thDesign3.prototype.startScene = function () {
        this.count = 0;
        this.alpha = 1;
        //createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        this.addEventListener("tick", this.drawing);
    };
    SceneAbout16thDesign3.prototype.stopScene = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 800, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
    };
    SceneAbout16thDesign3.prototype.drawing = function (event) {
        event.target.drawLines();
    };
    SceneAbout16thDesign3.prototype.drawLines = function () {
        this.count++;
        this.updateBubble();
    };
    SceneAbout16thDesign3._instance = null;
    return SceneAbout16thDesign3;
})(Scene);
//# sourceMappingURL=SceneAbout16thDesign3.js.map