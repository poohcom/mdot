var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScenePortAnimation = (function (_super) {
    __extends(ScenePortAnimation, _super);
    function ScenePortAnimation() {
        _super.call(this);
        this.page_w = 2500;
        this.page_h = 1080;
        this.thumbtext = [
            ["BODY", "기소을 김주현 임수산나"],
            ["GOAT", "배효영 이효원 임지원"],
            ["MATILDA", "신유정"],
            ["RAIL", "문소진 양다솔"],
            ["바퀴의자", "맹예진 배은영 이민지"],
            ["방귀향수공장", "신다희"],
            ["소꿉놀이", "김소희 김은정 장민지"],
            ["양화대교", "강은성 김한별\n장지영 홍정원"],
            ["엄마와 뻐꾸기시계", "유재희 민지혜"]
        ];
        this.listText = [
            "BODY", "GOAT", "MATILDA", "RAIL", "바퀴의자", "방귀향수공장", "소꿉놀이", "양화대교", "엄마와 뻐꾸기시계"
        ];
        this.dx = 0;
        this.m_x = 0;
        this.m_y = 0;
        if (ScenePortAnimation._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortAnimation._instance = this;
        this.init();
    }
    ScenePortAnimation.instance = function () {
        if (ScenePortAnimation._instance === null) {
            ScenePortAnimation._instance = new ScenePortAnimation();
        }
        return ScenePortAnimation._instance;
    };
    ScenePortAnimation.prototype.init = function () {
        this.group = new createjs.Container;
        this.addChild(this.group);
        this.particleManager = new ParticleManager;
        this.group.addChild(this.particleManager);
        this.shape = new TriangleShape();
        this.shape.initTri(DataAnimation.p, DataAnimation.l, DataAnimation.t);
        this.shape.gradientType = SceneManager.ANIMATION;
        this.shape.alpha = 0.5;
        this.shape.lineSize = 1;
        this.group.addChild(this.shape);
        this.group.x = (1920 - this.page_w);
        this.makeButton();
        this.makeList();
        for (var i = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function (event) {
                SceneManager.instance().popupPortAnimation(event.currentTarget.index);
            });
        }
    };
    ScenePortAnimation.prototype.makeButton = function () {
        for (var i = 0; i < this.listText.length; i++) {
            var button = new PortButton(this.shape, "assets/port/ani/" + (i + 1) + "/" + (i + 1) + ".jpg", this.shape.getHitArea(i), this.thumbtext[i][0], this.thumbtext[i][1], i);
            var pos = this.shape.getTriangleCenter(i);
            button.x = pos[0];
            button.y = pos[1];
            button.on("click", function (event) {
                SceneManager.instance().popupPortAnimation(event.currentTarget.index);
            });
            this.group.addChild(button);
            this.buttonList.push(button);
        }
    };
    ScenePortAnimation.prototype.updateOver = function (index) {
        this.shape.setSelectIndex(index);
    };
    ScenePortAnimation.prototype.updateMouseXY = function (mx, my) {
        this.m_x = mx;
        this.m_y = my;
        this.dx = -(mx - 960) / 200;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(-300, this.group.x);
        this.group.x = Math.max(1920 - this.page_w, this.group.x);
        this.shape.updateMouseXY(mx - this.group.x, my);
    };
    ScenePortAnimation.prototype.startScene = function () {
        this.group.x = (1920 - this.page_w);
        this.m_x = 0;
        this.m_y = 0;
        this.alpha = 1;
        this.shape.playToRight(this.page_w, 4);
        this.particleManager.playToRight(this.page_w, 20);
    };
    ScenePortAnimation.prototype.playScene = function () {
        this.dx *= 0.99;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(-300, this.group.x);
        this.group.x = Math.max(1920 - this.page_w, this.group.x);
        this.shape.drawUpdate();
        this.particleManager.update();
    };
    ScenePortAnimation.prototype.stopScene = function () {
        this.particleManager.clear();
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    };
    ScenePortAnimation._instance = null;
    return ScenePortAnimation;
})(ScenePort);
//# sourceMappingURL=ScenePortAnimation.js.map