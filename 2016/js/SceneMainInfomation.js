var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneMainInfomation = (function (_super) {
    __extends(SceneMainInfomation, _super);
    function SceneMainInfomation() {
        _super.call(this);
        if (SceneMainInfomation._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneMainInfomation._instance = this;
        this.init();
    }
    SceneMainInfomation.instance = function () {
        if (SceneMainInfomation._instance === null) {
            SceneMainInfomation._instance = new SceneMainInfomation();
        }
        return SceneMainInfomation._instance;
    };
    SceneMainInfomation.prototype.init = function () {
        var close_button = new Button(this.getTex("X"), 45, 45);
        close_button.x = 1679;
        close_button.y = 185;
        close_button.on("click", function () { SceneManager.instance().closeInfomation(); });
        close_button.regX = 12;
        close_button.regY = 12;
        close_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            if (this.rotation == 0) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 90 }, 300, createjs.Ease.circOut);
            }
        });
        close_button.on("mouseout", function () {
            if (this.rotation == 90) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 0 }, 300, createjs.Ease.circOut);
            }
        });
        this.addChild(close_button);
        this.exhibition_info = new createjs.Bitmap(this.getTex("exhibition_info"));
        this.addChild(this.exhibition_info);
        this.light = new createjs.Bitmap(this.getTex("light"));
        this.light.x = 820 - 45;
        this.light.y = 475 - 38;
        this.addChild(this.light);
    };
    SceneMainInfomation.prototype.startScene = function () {
        this.light.alpha = 0;
        this.lightTween = createjs.Tween.get(this.light, { loop: true }).to({ alpha: 1 }, 1000, createjs.Ease.linear).to({ alpha: 0 }, 1000, createjs.Ease.linear);
    };
    SceneMainInfomation.prototype.stopScene = function () {
        createjs.Tween.removeTweens(this.lightTween);
    };
    SceneMainInfomation._instance = null;
    return SceneMainInfomation;
})(Scene);
//# sourceMappingURL=SceneMainInfomation.js.map