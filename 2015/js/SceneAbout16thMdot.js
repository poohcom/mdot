/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneAbout16thMdot = (function (_super) {
    __extends(SceneAbout16thMdot, _super);
    function SceneAbout16thMdot() {
        _super.call(this);
        if (SceneAbout16thMdot._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thMdot._instance = this;
        this.init();
    }
    SceneAbout16thMdot.instance = function () {
        if (SceneAbout16thMdot._instance === null) {
            SceneAbout16thMdot._instance = new SceneAbout16thMdot();
        }
        return SceneAbout16thMdot._instance;
    };
    SceneAbout16thMdot.prototype.init = function () {
        this.image_decoration = new createjs.Bitmap(this.getTex("image_decoration"));
        this.image_decoration.x = 358;
        this.image_decoration.y = 241;
        this.addChild(this.image_decoration);
        this.image_decoration_text = new createjs.Bitmap(this.getTex("image_decoration_text"));
        this.image_decoration_text.x = 1134;
        this.image_decoration_text.y = 326;
        this.addChild(this.image_decoration_text);
        this.mdot_text = new createjs.Bitmap(this.getTex("16thmdot_text"));
        this.mdot_text.x = 1134;
        this.mdot_text.y = 571;
        this.addChild(this.mdot_text);
    };
    SceneAbout16thMdot.prototype.startScene = function () {
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
    };
    SceneAbout16thMdot.prototype.stopScene = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
    };
    SceneAbout16thMdot._instance = null;
    return SceneAbout16thMdot;
})(Scene);
//# sourceMappingURL=SceneAbout16thMdot.js.map