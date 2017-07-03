var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneAbout17ThCommittee = (function (_super) {
    __extends(SceneAbout17ThCommittee, _super);
    function SceneAbout17ThCommittee() {
        _super.call(this);
        if (SceneAbout17ThCommittee._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout17ThCommittee._instance = this;
        this.init();
    }
    SceneAbout17ThCommittee.instance = function () {
        if (SceneAbout17ThCommittee._instance === null) {
            SceneAbout17ThCommittee._instance = new SceneAbout17ThCommittee();
        }
        return SceneAbout17ThCommittee._instance;
    };
    SceneAbout17ThCommittee.prototype.init = function () {
        var spriteSheet0 = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_6_17x10")],
            "frames": { "regX": 0, "height": 520 / 10, "count": 160, "regY": 0, "width": 969 / 17 },
            "animations": {
                "ani": [0, 159, "ani", 1]
            }
        });
        var spriteSheet1 = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_1_20x8")],
            "frames": { "regX": 0, "height": 368 / 8, "count": 160, "regY": 0, "width": 1000 / 20 },
            "animations": {
                "ani": [0, 159, "ani", 1]
            }
        });
        var spriteSheet2 = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_2_17x6")],
            "frames": { "regX": 0, "height": 294 / 6, "count": 95, "regY": 0, "width": 969 / 17 },
            "animations": {
                "ani": [0, 94, "ani", 1]
            }
        });
        var spriteSheet3 = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_3_20x7")],
            "frames": { "regX": 0, "height": 357 / 7, "count": 123, "regY": 0, "width": 1020 / 20 },
            "animations": {
                "ani": [0, 122, "ani", 1]
            }
        });
        var spriteSheet4 = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_4_18x8")],
            "frames": { "regX": 0, "height": 416 / 8, "count": 142, "regY": 0, "width": 990 / 18 },
            "animations": {
                "ani": [0, 141, "ani", 1]
            }
        });
        var spriteSheet5 = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_5_19x7")],
            "frames": { "regX": 0, "height": 322 / 7, "count": 128, "regY": 0, "width": 988 / 19 },
            "animations": {
                "ani": [0, 127, "ani", 1]
            }
        });
        var grant0 = new createjs.Sprite(spriteSheet0, "ani");
        grant0.x = 573;
        grant0.y = 352;
        this.addChild(grant0);
        var grant1 = new createjs.Sprite(spriteSheet1, "ani");
        grant1.x = 977 + 10;
        grant1.y = 436;
        this.addChild(grant1);
        var grant2 = new createjs.Sprite(spriteSheet3, "ani");
        grant2.x = 1369 + 10;
        grant2.y = 353;
        this.addChild(grant2);
        var grant3 = new createjs.Sprite(spriteSheet3, "ani");
        grant3.x = 428 + 10;
        grant3.y = 598;
        this.addChild(grant3);
        var grant4 = new createjs.Sprite(spriteSheet2, "ani");
        grant4.x = 757 + 10;
        grant4.y = 704;
        this.addChild(grant4);
        var grant5 = new createjs.Sprite(spriteSheet4, "ani");
        grant5.x = 1232 + 10;
        grant5.y = 694;
        this.addChild(grant5);
        var grant6 = new createjs.Sprite(spriteSheet5, "ani");
        grant6.x = 1547 + 10;
        grant6.y = 565;
        this.addChild(grant6);
        this.createText(Config.FONT_TYPE_BOLD, "정혜승", 587, 262);
        this.createText(Config.FONT_TYPE_BOLD, "강민정", 991, 376);
        this.createText(Config.FONT_TYPE_BOLD, "방선경", 1383, 291);
        this.createText(Config.FONT_TYPE_BOLD, "정다정", 444, 537);
        this.createText(Config.FONT_TYPE_BOLD, "배은영", 771, 642);
        this.createText(Config.FONT_TYPE_BOLD, "홍정원", 1247, 633);
        this.createText(Config.FONT_TYPE_BOLD, "장지영", 1560, 506);
        this.createText(Config.FONT_TYPE_NORMAL, "지도교수", 582, 289);
        this.createText(Config.FONT_TYPE_NORMAL, "hess@dongduk.ac.kr", 538, 316);
        this.createText(Config.FONT_TYPE_NORMAL, "nikmaxive@naver.com", 940, 402);
        this.createText(Config.FONT_TYPE_NORMAL, "bsk0528@naver.com", 1334, 318);
        this.createText(Config.FONT_TYPE_NORMAL, "thejjj33@naver.com", 397, 564);
        this.createText(Config.FONT_TYPE_NORMAL, "pencilbb@naver.com", 724, 670);
        this.createText(Config.FONT_TYPE_NORMAL, "hjewn@naver.com", 1207, 660);
        this.createText(Config.FONT_TYPE_NORMAL, "255222147@naver.com", 1506, 533);
        this.createText(Config.FONT_TYPE_NORMAL, "SCRIPT", 1503, 794);
        this.createText(Config.FONT_TYPE_NORMAL, "SOUND", 1503, 829);
        this.createText(Config.FONT_TYPE_NORMAL, "예비졸준위", 1503, 865);
        this.createText(Config.FONT_TYPE_NORMAL, "폰트제공", 1503, 900);
        this.createText(Config.FONT_TYPE_NORMAL, "장원준", 1611, 794);
        this.createText(Config.FONT_TYPE_NORMAL, "정재민", 1611, 829);
        this.createText(Config.FONT_TYPE_NORMAL, "김수희 남지연 이지은", 1611, 865);
        this.createText(Config.FONT_TYPE_NORMAL, "YOONDESIGN", 1611, 900);
        this.createText(Config.FONT_TYPE_NORMAL, "_윤고딕700WEBFONT", 1611, 930);
        var title = new createjs.Bitmap(this.getTex("4_3_17th_committee_typo"));
        title.x = 394;
        title.y = 110;
        this.addChild(title);
    };
    SceneAbout17ThCommittee.prototype.updateMouseXY = function (mx, my) {
    };
    SceneAbout17ThCommittee.prototype.startScene = function () {
        this.alpha = 0;
        createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);
    };
    SceneAbout17ThCommittee.prototype.stopScene = function () {
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    };
    SceneAbout17ThCommittee.prototype.getStopSceneTime = function () {
        return 2;
    };
    SceneAbout17ThCommittee._instance = null;
    return SceneAbout17ThCommittee;
})(Scene);
//# sourceMappingURL=SceneAbout17ThCommittee.js.map