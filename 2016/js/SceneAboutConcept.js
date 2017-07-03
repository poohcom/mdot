var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneAboutConcept = (function (_super) {
    __extends(SceneAboutConcept, _super);
    function SceneAboutConcept() {
        _super.call(this);
        if (SceneAboutConcept._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAboutConcept._instance = this;
        this.init();
    }
    SceneAboutConcept.instance = function () {
        if (SceneAboutConcept._instance === null) {
            SceneAboutConcept._instance = new SceneAboutConcept();
        }
        return SceneAboutConcept._instance;
    };
    SceneAboutConcept.prototype.init = function () {
        var concept = new createjs.Bitmap(this.getTex("concept"));
        concept.x = 567;
        concept.y = 225;
        this.addChild(concept);
        var media_concept = new createjs.Bitmap(this.getTex("about media_concept"));
        media_concept.x = 1111;
        media_concept.y = 665;
        this.addChild(media_concept);
        var mdot_logo = new createjs.Bitmap(this.getTex("about media _17th_concept_mdot Logo-02"));
        mdot_logo.x = 1085;
        mdot_logo.y = 503;
        this.addChild(mdot_logo);
        var title = new createjs.Bitmap(this.getTex("4_1_concept_typo"));
        title.x = 394;
        title.y = 110;
        this.addChild(title);
    };
    SceneAboutConcept.prototype.updateMouseXY = function (mx, my) {
    };
    SceneAboutConcept.prototype.startScene = function () {
        this.alpha = 0;
        createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);
    };
    SceneAboutConcept.prototype.stopScene = function () {
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    };
    SceneAboutConcept.prototype.getStopSceneTime = function () {
        return 2;
    };
    SceneAboutConcept._instance = null;
    return SceneAboutConcept;
})(Scene);
//# sourceMappingURL=SceneAboutConcept.js.map