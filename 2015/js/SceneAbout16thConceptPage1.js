/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneAbout16thConceptPage1 = (function (_super) {
    __extends(SceneAbout16thConceptPage1, _super);
    function SceneAbout16thConceptPage1() {
        _super.call(this);
        if (SceneAbout16thConceptPage1._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thConceptPage1._instance = this;
        //this.assets.loadManifest([
        //    { id: "image_decoration", src: "assets/about_media_design/4_16th_concept/image_decoration.png" },
        //    { id: "text_decoration", src: "assets/about_media_design/4_16th_concept/text_decoration.png" }
        //    ]);
        this.init();
    }
    SceneAbout16thConceptPage1.instance = function () {
        if (SceneAbout16thConceptPage1._instance === null) {
            SceneAbout16thConceptPage1._instance = new SceneAbout16thConceptPage1();
        }
        return SceneAbout16thConceptPage1._instance;
    };
    SceneAbout16thConceptPage1.prototype.init = function () {
        this.image_text_decoration = new createjs.Bitmap(this.getTex("image_decoration"));
        this.image_text_decoration.x = 579;
        this.image_text_decoration.y = 164;
        this.addChild(this.image_text_decoration);
        this.text_decoration = new createjs.Bitmap(this.getTex("text_decoration"));
        this.text_decoration.x = 523;
        this.text_decoration.y = 750;
        this.addChild(this.text_decoration);
    };
    SceneAbout16thConceptPage1.prototype.startScene = function () {
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
    };
    SceneAbout16thConceptPage1.prototype.stopScene = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
    };
    SceneAbout16thConceptPage1._instance = null;
    return SceneAbout16thConceptPage1;
})(Scene);
//# sourceMappingURL=SceneAbout16thConceptPage1.js.map