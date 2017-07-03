var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneAboutMediaDesign = (function (_super) {
    __extends(SceneAboutMediaDesign, _super);
    function SceneAboutMediaDesign() {
        _super.call(this);
        if (SceneAboutMediaDesign._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAboutMediaDesign._instance = this;
        this.init();
    }
    SceneAboutMediaDesign.instance = function () {
        if (SceneAboutMediaDesign._instance === null) {
            SceneAboutMediaDesign._instance = new SceneAboutMediaDesign();
        }
        return SceneAboutMediaDesign._instance;
    };
    SceneAboutMediaDesign.prototype.init = function () {
        var about_text = new createjs.Bitmap(this.getTex("about_text"));
        about_text.x = 486;
        about_text.y = 284;
        this.addChild(about_text);
        var title = new createjs.Bitmap(this.getTex("1_about_media_design_typo"));
        title.x = 394;
        title.y = 110;
        this.addChild(title);
    };
    SceneAboutMediaDesign.prototype.updateMouseXY = function (mx, my) {
    };
    SceneAboutMediaDesign.prototype.startScene = function () {
        this.alpha = 0;
        createjs.Tween.get(this).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);
    };
    SceneAboutMediaDesign.prototype.stopScene = function () {
        this.alpha = 0;
    };
    SceneAboutMediaDesign.prototype.getStopSceneTime = function () {
        return 2;
    };
    SceneAboutMediaDesign._instance = null;
    return SceneAboutMediaDesign;
})(Scene);
//# sourceMappingURL=SceneAboutMediaDesign.js.map