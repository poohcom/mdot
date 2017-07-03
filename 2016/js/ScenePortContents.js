var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScenePortContents = (function (_super) {
    __extends(ScenePortContents, _super);
    function ScenePortContents() {
        _super.call(this);
        this.page_w = 2500 + 300;
        this.page_h = 1080;
        this.thumbtext = [
            ["GONG CHA", "임지원 임지혜 장지영"],
            ["Fabien.H 스마트미러", "강민정 강은성\n김한별 유지원"],
            ["Let’s Korail", "민선정 신다희\n신유정 정예진"],
            ["MERCY JUICE", "김하나 손승희 정보경"],
            ["Innisfree Touch Screen", "손미리 유재희\n임수산나 차지예"],
            ["Pocket Ward & Smart Watch", "김소희 김은정 장민지"],
            ["Paagle", "맹예진 민지혜 배은영\n이로사 이민지"],
            ["Salon du parfumeur kiosk", "윤정연 이찬미 임우영\n정수호 조지형"],
            ["Self Flower Studio", "방선경 방지은\n이수정 정다정"],
            ["SEOUL METRO The Screen Door", "곽한송 김예원 김지영"],
            ["고궁", "김효진 김효진\n유예람 이지아"]
        ];
        this.listText = [
            "GONG CHA",
            "Fabien.H 스마트미러",
            "Let’s Korail",
            "MERCY JUICE",
            "Innisfree Touch Screen",
            "Pocket Ward & Smart Watch",
            "Paagle",
            "Salon du parfumeur kiosk",
            "Self Flower Studio",
            "SEOUL METRO The Screen Door",
            "고궁"
        ];
        this.dx = 0;
        this.m_x = 0;
        this.m_y = 0;
        if (ScenePortContents._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortContents._instance = this;
        this.init();
    }
    ScenePortContents.instance = function () {
        if (ScenePortContents._instance === null) {
            ScenePortContents._instance = new ScenePortContents();
        }
        return ScenePortContents._instance;
    };
    ScenePortContents.prototype.init = function () {
        this.group = new createjs.Container;
        this.addChild(this.group);
        this.particleManager = new ParticleManager;
        this.group.addChild(this.particleManager);
        this.shape = new TriangleShape();
        this.shape.initTri(DataContents.p, DataContents.l, DataContents.t);
        this.shape.gradientType = SceneManager.CONTENTS;
        this.shape.alpha = 0.5;
        this.shape.lineSize = 1;
        this.group.addChild(this.shape);
        this.group.x = (1920 - this.page_w);
        this.makeButton();
        this.makeList();
        for (var i = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function (event) {
                SceneManager.instance().popupPortContents(event.currentTarget.index);
            });
        }
    };
    ScenePortContents.prototype.makeButton = function () {
        for (var i = 0; i < this.listText.length; i++) {
            var button = new PortButton(this.shape, "assets/port/contents/" + (i + 1) + "/" + (i + 1) + ".jpg", this.shape.getHitArea(i), this.thumbtext[i][0], this.thumbtext[i][1], i);
            var pos = this.shape.getTriangleCenter(i);
            button.x = pos[0];
            button.y = pos[1];
            button.on("click", function (event) {
                SceneManager.instance().popupPortContents(event.currentTarget.index);
            });
            this.group.addChild(button);
            this.buttonList.push(button);
        }
    };
    ScenePortContents.prototype.updateOver = function (index) {
        this.shape.setSelectIndex(index);
    };
    ScenePortContents.prototype.updateMouseXY = function (mx, my) {
        this.m_x = mx;
        this.m_y = my;
        this.dx = -(mx - 960) / 200;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(-300, this.group.x);
        this.group.x = Math.max(1920 - this.page_w, this.group.x);
        this.shape.updateMouseXY(mx - this.group.x, my);
    };
    ScenePortContents.prototype.startScene = function () {
        this.group.x = (1920 - this.page_w);
        this.m_x = 0;
        this.m_y = 0;
        this.alpha = 1;
        this.shape.playToRight(this.page_w, 4);
        this.particleManager.playToRight(this.page_w, 20);
    };
    ScenePortContents.prototype.playScene = function () {
        this.dx *= 0.99;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(-300, this.group.x);
        this.group.x = Math.max(1920 - this.page_w, this.group.x);
        this.shape.drawUpdate();
        this.particleManager.update();
    };
    ScenePortContents.prototype.stopScene = function () {
        this.particleManager.clear();
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    };
    ScenePortContents._instance = null;
    return ScenePortContents;
})(ScenePort);
//# sourceMappingURL=ScenePortContents.js.map