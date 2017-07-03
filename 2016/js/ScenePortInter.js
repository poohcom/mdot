var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScenePortInter = (function (_super) {
    __extends(ScenePortInter, _super);
    function ScenePortInter() {
        _super.call(this);
        this.page_w = 2500;
        this.page_h = 1080;
        this.thumbtext = [
            ["m.dot", "강민정 방선경 배은영\n장지영 정다정 홍정원"],
            ["AREA 51", "신다희 이찬미"],
            ["Billy Milligan", "김효진 이지아\n임우영 임지원"],
            ["SEE THROUGH", "김지현 방지은 윤정연\n정수호 조지형"],
            ["Vegan", "강은성 문소진\n유지원 임수현"],
            ["단테의 신곡", "맹예진 양다솔\n이민지 임지혜"],
            ["심해 탐험대", "김지영 차지예 황은하"]
        ];
        this.listText = [
            "m.dot",
            "AREA 51",
            "Billy Milligan",
            "SEE THROUGH",
            "Vegan",
            "단테의 신곡",
            "심해 탐험대"
        ];
        this.dx = 0;
        this.m_x = 0;
        this.m_y = 0;
        if (ScenePortInter._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortInter._instance = this;
        this.init();
    }
    ScenePortInter.instance = function () {
        if (ScenePortInter._instance === null) {
            ScenePortInter._instance = new ScenePortInter();
        }
        return ScenePortInter._instance;
    };
    ScenePortInter.prototype.init = function () {
        this.group = new createjs.Container;
        this.addChild(this.group);
        this.particleManager = new ParticleManager;
        this.group.addChild(this.particleManager);
        this.shape = new TriangleShape();
        this.shape.initTri(DataInter.p, DataInter.l, DataInter.t);
        this.shape.gradientType = SceneManager.INTERACTIVE;
        this.shape.alpha = 0.5;
        this.shape.lineSize = 1;
        this.group.addChild(this.shape);
        this.group.x = 0;
        this.makeButton();
        this.makeList();
        for (var i = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function (event) {
                SceneManager.instance().popupPortInter(event.currentTarget.index);
            });
        }
    };
    ScenePortInter.prototype.makeButton = function () {
        for (var i = 0; i < this.listText.length; i++) {
            var button = new PortButton(this.shape, "assets/port/inter/" + (i + 1) + "/" + (i + 1) + ".jpg", this.shape.getHitArea(i), this.thumbtext[i][0], this.thumbtext[i][1], i);
            var pos = this.shape.getTriangleCenter(i);
            button.x = pos[0];
            button.y = pos[1];
            button.on("click", function (event) {
                SceneManager.instance().popupPortInter(event.currentTarget.index);
            });
            this.group.addChild(button);
            this.buttonList.push(button);
        }
    };
    ScenePortInter.prototype.updateOver = function (index) {
        this.shape.setSelectIndex(index);
    };
    ScenePortInter.prototype.updateMouseXY = function (mx, my) {
        this.m_x = mx;
        this.m_y = my;
        this.dx = -(mx - 960) / 200;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(0, this.group.x);
        this.group.x = Math.max(1920 - this.page_w + 300, this.group.x);
        this.shape.updateMouseXY(mx - this.group.x, my);
    };
    ScenePortInter.prototype.startScene = function () {
        this.group.x = 0;
        this.m_x = 0;
        this.m_y = 0;
        this.alpha = 1;
        this.shape.playToLeft(this.page_w, 4);
        this.particleManager.playToLeft(this.page_w, 20);
    };
    ScenePortInter.prototype.playScene = function () {
        this.dx *= 0.99;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(0, this.group.x);
        this.group.x = Math.max(1920 - this.page_w + 300, this.group.x);
        this.shape.drawUpdate();
        this.particleManager.update();
    };
    ScenePortInter.prototype.stopScene = function () {
        this.particleManager.clear();
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    };
    ScenePortInter._instance = null;
    return ScenePortInter;
})(ScenePort);
//# sourceMappingURL=ScenePortInter.js.map