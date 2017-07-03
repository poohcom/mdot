/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneAboutAbout = (function (_super) {
    __extends(SceneAboutAbout, _super);
    function SceneAboutAbout() {
        _super.call(this);
        this.about_media_design_background = null;
        this.about_media_design_text = null;
        this.alpha = 0;
        this.init();
    }
    SceneAboutAbout.prototype.init = function () {
        this.about_media_design_background = new createjs.Bitmap(SceneManager.instance().queueBG.getResult("about_media_design_background"));
        this.about_media_design_background.scaleX = 1920 / Config.BG_SIZE;
        this.about_media_design_background.scaleY = 1080 / Config.BG_SIZE;
        this.addChild(this.about_media_design_background);
        this.initBubble("#FFF");
        this.about_media_design_text = new createjs.Bitmap(this.getTex("about_media_design_text"));
        this.about_media_design_text.x = 512;
        this.about_media_design_text.y = 235;
        this.addChild(this.about_media_design_text);
        this.titleBitmap = new createjs.Bitmap(this.getTex("aboutmediadesign_title_page1"));
        this.titleBitmap.x = 195;
        this.titleBitmap.y = 76;
        this.addChild(this.titleBitmap);
        this.menu_icon = new TitleCircle(this.getTex("aboutmediadesign_titledot"), 19);
        this.menu_icon.x = 129;
        this.menu_icon.y = 117;
        this.addChild(this.menu_icon);
    };
    SceneAboutAbout.prototype.startScene = function () {
        this.count = 0;
        this.alpha = 1;
        createjs.Tween.get(this.about_media_design_background, { loop: false }).wait(1000).to({ alpha: 0 }, 500, createjs.Ease.linear);
        this.addEventListener("tick", this.drawing);
    };
    SceneAboutAbout.prototype.stopScene = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
    };
    SceneAboutAbout.prototype.playScene = function () {
    };
    SceneAboutAbout.prototype.drawing = function (event) {
        event.target.drawLines();
    };
    SceneAboutAbout.prototype.drawLines = function () {
        this.count++;
        this.updateBubble();
        this.menu_icon.drawCircle();
    };
    return SceneAboutAbout;
})(Scene);
//# sourceMappingURL=SceneAboutAbout.js.map