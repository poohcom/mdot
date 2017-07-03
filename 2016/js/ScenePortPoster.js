var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScenePortPoster = (function (_super) {
    __extends(ScenePortPoster, _super);
    function ScenePortPoster() {
        _super.call(this);
        this.page_w = 2800 + 300;
        this.page_h = 1080;
        this.thumbtext = [["Romantic Illumination", "곽한송"],
            ["치즈랑 소금이랑 콩이랑", "기소을"],
            ["Owl City Concert", "김예원"],
            ["The Fantsatic Jungle", "김주현"],
            ["I Fall in Love Too Easily", "김지현"],
            ["Beenzino concert", "김하나"],
            ["아이슬란드 블루라군 페스티벌", "김효진"],
            ["오오이시 마사요시 솔로콘서트", "김효진"],
            ["2016 GARDENING FAIR", "문소진"],
            ["Frida Kahlo", "민선정"],
            ["Penumbra's 24 hour Book store", "방선경"],
            ["ADVENTUROUS BASE CAMP FESTIVAL", "방지은"],
            ["The Spirit of indian women", "배효영"],
            ["Nekotopia", "손미리"],
            ["2016 World DJ Festival", "손승희"],
            ["GRAN GALA FLAMENCO", "신다희"],
            ["Beer 'Desperados'", "신유정"],
            ["The Snow Queen", "양다솔"],
            ["2016 Melody forest camp", "유예람"],
            ["輝亮(휘양)", "유재희"],
            ["구교영 콘서트 포스터", "유지원"],
            ["Alice through the Looking Glass", "이로사"],
            ["Rainbow Island Music Festival 2016", "이수정"],
            ["최낙타 첫 번째 콘서트", "이지아"],
            ["나쓰미의 반딧불이", "이찬미"],
            ["Pinup Girl Clothing", "이효원"],
            ["Don't forget Indio", "임수현"],
            ["푸른새벽 콘서트 포스터", "임지혜"],
            ["The five people you meet in heaven", "장지영"],
            ["Magic in the Moonlight", "정다정"],
            ["2016 ULTRA MUSIC FESTIVAL 포스터", "정보경"],
            ["무주 산골 영화제", "정예진"],
            ["MOBY-DICK", "조지형"],
            ["Garden Of Oblivious", "황은하"]
        ];
        this.listText = [
            "곽한송",
            "기소을",
            "김예원",
            "김주현",
            "김지현",
            "김하나",
            "김효진",
            "김효진",
            "문소진",
            "민선정",
            "방선경",
            "방지은",
            "배효영",
            "손미리",
            "손승희",
            "신다희",
            "신유정",
            "양다솔",
            "유예람",
            "유재희",
            "유지원",
            "이로사",
            "이수정",
            "이지아",
            "이찬미",
            "이효원",
            "임수현",
            "임지혜",
            "장지영",
            "정다정",
            "정보경",
            "정예진",
            "조지형",
            "황은하"
        ];
        this.posList = [
            1817, 185,
            1817, 223,
            1817, 262,
            1817, 299,
            1817, 337,
            1817, 376,
            1817, 413,
            1817, 451,
            1817, 490,
            1817, 528,
            1817, 566,
            1817, 604,
            1817, 641,
            1817, 680,
            1817, 717,
            1817, 755,
            1817, 794,
            1885, 185,
            1885, 223,
            1885, 262,
            1885, 299,
            1885, 337,
            1885, 376,
            1885, 413,
            1885, 451,
            1885, 490,
            1885, 528,
            1885, 566,
            1885, 604,
            1885, 641,
            1885, 680,
            1885, 717,
            1885, 755,
            1885, 794
        ];
        this.dx = 0;
        this.m_x = 0;
        this.m_y = 0;
        if (ScenePortPoster._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortPoster._instance = this;
        this.init();
    }
    ScenePortPoster.instance = function () {
        if (ScenePortPoster._instance === null) {
            ScenePortPoster._instance = new ScenePortPoster();
        }
        return ScenePortPoster._instance;
    };
    ScenePortPoster.prototype.makeListTextButton = function () {
        var startY = 74;
        for (var i = 0; i < this.listText.length; i++) {
            var button = new Label();
            button.setText2(this.listText[i]);
            button.index = i;
            button.x = this.posList[i * 2] - 1688;
            button.y = this.posList[i * 2 + 1] - 111;
            this._listTextGroup.addChild(button);
            this.textButtonList.push(button);
        }
    };
    ScenePortPoster.prototype.init = function () {
        this.group = new createjs.Container;
        this.addChild(this.group);
        this.particleManager = new ParticleManager;
        this.group.addChild(this.particleManager);
        this.shape = new TriangleShape();
        this.shape.initTri(DataPoster.p, DataPoster.l, DataPoster.t);
        this.shape.gradientType = SceneManager.POSTER;
        this.shape.alpha = 0.5;
        this.shape.lineSize = 1;
        this.group.addChild(this.shape);
        this.group.x = (1920 - this.page_w);
        this.makeButton();
        this.makeList();
        for (var i = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function (event) {
                SceneManager.instance().popupPortPoster(event.currentTarget.index);
            });
        }
    };
    ScenePortPoster.prototype.makeButton = function () {
        for (var i = 0; i < this.listText.length; i++) {
            var button = new PortButton(this.shape, "assets/port/poster/" + (i + 1) + "/" + (i + 1) + ".jpg", this.shape.getHitArea(i), this.thumbtext[i][0], this.thumbtext[i][1], i);
            var pos = this.shape.getTriangleCenter(i);
            button.setHitScale(2);
            button.x = pos[0];
            button.y = pos[1];
            button.on("click", function (event) {
                SceneManager.instance().popupPortPoster(event.currentTarget.index);
            });
            this.group.addChild(button);
            this.buttonList.push(button);
        }
    };
    ScenePortPoster.prototype.updateOver = function (index) {
        this.shape.setSelectIndex(index);
    };
    ScenePortPoster.prototype.updateMouseXY = function (mx, my) {
        this.m_x = mx;
        this.m_y = my;
        this.dx = -(mx - 960) / 200;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(-400, this.group.x);
        this.group.x = Math.max(1920 - this.page_w, this.group.x);
        this.shape.updateMouseXY(mx - this.group.x, my);
    };
    ScenePortPoster.prototype.startScene = function () {
        this.group.x = (1920 - this.page_w);
        this.m_x = 0;
        this.m_y = 0;
        this.alpha = 1;
        this.shape.playToRight(this.page_w, 4);
        this.particleManager.playToRight(this.page_w, 20);
    };
    ScenePortPoster.prototype.playScene = function () {
        this.dx *= 0.99;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(-400, this.group.x);
        this.group.x = Math.max(1920 - this.page_w, this.group.x);
        this.shape.drawUpdate();
        this.particleManager.update();
    };
    ScenePortPoster.prototype.stopScene = function () {
        this.particleManager.clear();
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    };
    ScenePortPoster._instance = null;
    return ScenePortPoster;
})(ScenePort);
//# sourceMappingURL=ScenePortPoster.js.map