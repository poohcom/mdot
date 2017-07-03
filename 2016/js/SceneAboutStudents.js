var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneAboutStudents = (function (_super) {
    __extends(SceneAboutStudents, _super);
    function SceneAboutStudents() {
        _super.call(this);
        this.dx = 0;
        this.m_x = 0;
        this.m_y = 0;
        this.studentList = [
            ["강민정", "boaramovie@naver.com"],
            ["강은성", "kangsung13@naver.com"],
            ["곽한송", "giugno14@naver.com"],
            ["기소을", "soul0ki@naver.com"],
            ["김소희", "sssssheee@daum.net"],
            ["김예원", "sksdpdnjs12@naver.com"],
            ["김은정", "kejreal@naver.com"],
            ["김주현", "jjjjjjj.oh@gmail.com"],
            ["김지영", "rosuvk@naver.com"],
            ["김지현", "sept_ee@naver.com"],
            ["김하나", "kdwkhn@naver.com"],
            ["김한별", "onestar951@naver.com"],
            ["김효진", "bbibigi0250@naver.com"],
            ["김효진", "hjzzhang0421@gmail.com"],
            ["맹예진", "3036953@naver.com"],
            ["문소진", "94msj@naver.com"],
            ["민선정", "iambalcony@gmail.com"],
            ["민지혜", "dnp2011s@naver.com"],
            ["방선경", "bsk0528@naver.com"],
            ["방지은", "wldms3182@gmail.com"],
            ["배은영", "pencilbb@naver.com"],
            ["배효영", "qogydud1234@naver.com"],
            ["손미리", "unreturn1@naver.com"],
            ["손승희", "ssh117@naver.com"],
            ["신다희", "sdashinlove@naver.com"],
            ["신유정", "sinyou0923@gmail.com"],
            ["양다솔", "dsy9464@naver.com"],
            ["유예람", "newdayram@naver.com"],
            ["유재희", "fukuari_ryu@icloud.com"],
            ["유지원", "jiwon_u@naver.com"],
            ["윤정연", "lake20126@naver.com"],
            ["이로사", "lrs2002@hanmail.net"],
            ["이민지", "wogns3885@naver.com"],
            ["이수정", "abcd157@naver.com"],
            ["이지아", "jia0420@naver.com"],
            ["이찬미", "cksal585@naver.com"],
            ["이효원", "leehyoone@naver.com"],
            ["임수산나", "bbingwool@naver.com"],
            ["임수현", "dbcjsdl0478@naver.com"],
            ["임우영", "limwoo_oo@naver.com"],
            ["임지원", "imxg0@naver.com"],
            ["임지혜", "dlawhl@naver.com"],
            ["장민지", "m_zee@naver.com"],
            ["장지영", "255222147@naver.com"],
            ["정다정", "thejjj33@gmail.com"],
            ["정보경", "blacktoast88@gmail.com"],
            ["정수호", "suho_j@naver.com"],
            ["정예진", "yejin0424_@naver.com"],
            ["조지형", "jojh923@naver.com"],
            ["차지예", "kanna96@naver.com"],
            ["홍정원", "hjewn@naver.com"],
            ["황은하", "galaxy_hehe@naver.com"]];
        if (SceneAboutStudents._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAboutStudents._instance = this;
        this.init();
    }
    SceneAboutStudents.instance = function () {
        if (SceneAboutStudents._instance === null) {
            SceneAboutStudents._instance = new SceneAboutStudents();
        }
        return SceneAboutStudents._instance;
    };
    SceneAboutStudents.prototype.init = function () {
        this.group = new createjs.Container;
        this.addChild(this.group);
        this.shape = new TriangleShape();
        this.shape.initTri(DataAboutMediaDesignStudents.p, DataAboutMediaDesignStudents.l, DataAboutMediaDesignStudents.t);
        this.shape.alpha = 0.5;
        this.shape.gradientType = SceneManager.STUDENTS;
        this.shape.lineSize = 1;
        this.group.addChild(this.shape);
        this.group.x = -1920 / 2;
        var aboutmd_students_gradiant = new createjs.Bitmap(this.getTex("aboutmd_students_gradiant"));
        this.addChild(aboutmd_students_gradiant);
        var label;
        for (var i = 0; i < this.studentList.length; i++) {
            label = new LabelStudent(this.shape.getHitArea(i), this.studentList[i][0], this.studentList[i][1], i);
            var pos = this.shape.getTriangleCenter(i);
            label.x = pos[0];
            label.y = pos[1];
            this.group.addChild(label);
        }
        var title = new createjs.Bitmap(this.getTex("3_students_typo"));
        title.x = 394;
        title.y = 110;
        this.addChild(title);
    };
    SceneAboutStudents.prototype.updateOver = function (index) {
        this.shape.setSelectIndex(index);
    };
    SceneAboutStudents.prototype.updateMouseXY = function (mx, my) {
        this.m_x = mx;
        this.m_y = my;
        this.dx = -(mx - 960) / 200;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(0, this.group.x);
        this.group.x = Math.max(-1920, this.group.x);
        this.shape.updateMouseXY(mx - this.group.x, my);
    };
    SceneAboutStudents.prototype.startScene = function () {
        this.group.x = -1920 / 2;
        this.m_x = 0;
        this.m_y = 0;
        this.alpha = 0;
        createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);
    };
    SceneAboutStudents.prototype.playScene = function () {
        this.dx *= 0.99;
        this.group.x = this.group.x + this.dx;
        this.group.x = Math.min(0, this.group.x);
        this.group.x = Math.max(-1920, this.group.x);
        this.shape.drawUpdate();
    };
    SceneAboutStudents.prototype.getStopSceneTime = function () {
        return 2;
    };
    SceneAboutStudents.prototype.stopScene = function () {
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    };
    SceneAboutStudents._instance = null;
    return SceneAboutStudents;
})(Scene);
//# sourceMappingURL=SceneAboutStudents.js.map