var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneAboutProfessors = (function (_super) {
    __extends(SceneAboutProfessors, _super);
    function SceneAboutProfessors() {
        _super.call(this);
        if (SceneAboutProfessors._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAboutProfessors._instance = this;
        this.init();
    }
    SceneAboutProfessors.instance = function () {
        if (SceneAboutProfessors._instance === null) {
            SceneAboutProfessors._instance = new SceneAboutProfessors();
        }
        return SceneAboutProfessors._instance;
    };
    SceneAboutProfessors.prototype.init = function () {
        var ANIMATION = new createjs.Bitmap(this.getTex("ANIMATION-01"));
        ANIMATION.x = 497;
        ANIMATION.y = 281;
        this.addChild(ANIMATION);
        var CONTENTS = new createjs.Bitmap(this.getTex("CONTENTS-01"));
        CONTENTS.x = 1222;
        CONTENTS.y = 637;
        this.addChild(CONTENTS);
        var INTERACTIVE = new createjs.Bitmap(this.getTex("INTERACTIVE-01"));
        INTERACTIVE.x = 941;
        INTERACTIVE.y = 431;
        this.addChild(INTERACTIVE);
        var POSTER = new createjs.Bitmap(this.getTex("POSTER-01"));
        POSTER.x = 647;
        POSTER.y = 699;
        this.addChild(POSTER);
        var VIDEOGRAPHY = new createjs.Bitmap(this.getTex("VIDEOGRAPHY-01"));
        VIDEOGRAPHY.x = 1476;
        VIDEOGRAPHY.y = 301;
        this.addChild(VIDEOGRAPHY);
        var spriteSheet0C = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("animation_16x9")],
            "frames": { "regX": 0, "height": 531 / 9, "count": 142, "regY": 0, "width": 1008 / 16 },
            "animations": {
                "ani": [0, 141, "ani", 1]
            }
        });
        var spriteSheet1C = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("poster_15x7")],
            "frames": { "regX": 0, "height": 385 / 7, "count": 95, "regY": 0, "width": 975 / 15 },
            "animations": {
                "ani": [0, 94, "ani", 1]
            }
        });
        var spriteSheet2C = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("inter_17x10")],
            "frames": { "regX": 0, "height": 520 / 10, "count": 160, "regY": 0, "width": 969 / 17 },
            "animations": {
                "ani": [0, 159, "ani", 1]
            }
        });
        var spriteSheet3C = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("contents_17x8")],
            "frames": { "regX": 0, "height": 416 / 8, "count": 128, "regY": 0, "width": 1003 / 17 },
            "animations": {
                "ani": [0, 127, "ani", 1]
            }
        });
        var spriteSheet4C = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("video_17x8")],
            "frames": { "regX": 0, "height": 464 / 8, "count": 123, "regY": 0, "width": 986 / 17 },
            "animations": {
                "ani": [0, 122, "ani", 1]
            }
        });
        var grant0C = new createjs.Sprite(spriteSheet0C, "ani");
        grant0C.x = 537;
        grant0C.y = 376;
        this.addChild(grant0C);
        var grant1C = new createjs.Sprite(spriteSheet1C, "ani");
        grant1C.x = 688;
        grant1C.y = 799;
        this.addChild(grant1C);
        var grant2C = new createjs.Sprite(spriteSheet2C, "ani");
        grant2C.x = 1011;
        grant2C.y = 528;
        this.addChild(grant2C);
        var grant3C = new createjs.Sprite(spriteSheet3C, "ani");
        grant3C.x = 1341;
        grant3C.y = 745;
        this.addChild(grant3C);
        var grant4C = new createjs.Sprite(spriteSheet4C, "ani");
        grant4C.x = 1519;
        grant4C.y = 400;
        this.addChild(grant4C);
        var title = new createjs.Bitmap(this.getTex("2_professors_typo"));
        title.x = 394;
        title.y = 110;
        this.addChild(title);
    };
    SceneAboutProfessors.prototype.updateMouseXY = function (mx, my) {
    };
    SceneAboutProfessors.prototype.startScene = function () {
        this.alpha = 0;
        createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);
    };
    SceneAboutProfessors.prototype.stopScene = function () {
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    };
    SceneAboutProfessors.prototype.getStopSceneTime = function () {
        return 2;
    };
    SceneAboutProfessors._instance = null;
    return SceneAboutProfessors;
})(Scene);
//# sourceMappingURL=SceneAboutProfessors.js.map