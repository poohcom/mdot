/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// 학생
var SceneAboutStudents = (function (_super) {
    __extends(SceneAboutStudents, _super);
    function SceneAboutStudents() {
        _super.call(this);
        this.circleButtonList = [];
        this.text1 = null;
        this.text2 = null;
        this.circleList2 = [];
        this.isCircle = false;
        this.circleX = 0;
        this.circleY = 0;
        this.shapeList = [];
        this.arcSize = [17, 27, 33, 44, 54, 78, 100, 122, 133, 177, 189, 207, 235, 290, 380];
        this.arcStart = [0, 0, 0, 0, 0, 0, -45, 225, 0, 180, 45, 135, 0, 0, 0];
        this.arcEnd = [360, 360, 360, 360, 270, 360, 225, 315, 315, 405, 315, 450, 360, 360, 360];
        this.lastButton = null;
        this.list = [
            "gusrud2380@hanmail.net",
            "고현경",
            "kh93he@naver.com",
            "권은혜",
            "kminji1129@gmail.com",
            "김민지",
            "yellow9590@naver.com",
            "김보경",
            "anger9857@naver.com",
            "김선형",
            "ryuh_@naver.com",
            "김수려",
            "harulof@naver.com",
            "김수현",
            "arangoood@gmail.com",
            "김아란",
            "yeori13@naver.com",
            "김연희",
            "jooyeon1519@gmail.com",
            "김주연",
            "midi_j@naver.com",
            "김지영",
            "socool204@hanmail.net",
            "김혜주",
            "nha1201@naver.com",
            "나현아",
            "kokakai@naver.com",
            "남예은",
            "heyhho3@gmail.com",
            "노효정",
            "ehalfoeh@naver.com",
            "도미래",
            "rud_gml37@naver.com",
            "박경희",
            "000777days@naver.com",
            "박성현",
            "rollingboy24@naver.com",
            "박정윤",
            "baebae_3@naver.com",
            "배하린",
            "youna328@naver.com",
            "송연아",
            "tnsqufdl003@naver.com",
            "순별이",
            "inminaout@naver.com",
            "신민아",
            "yyyy7159@naver.com",
            "신효진",
            "suryeon27@naver.com",
            "양수련",
            "iii2000@naver.com",
            "오남경",
            "soccer1429@naver.com",
            "오명선",
            "taekeak@naver.com",
            "오연택",
            "bomming@naver.com",
            "윤새봄",
            "you_n_sodam@naver.com",
            "윤소담",
            "jihye0665@naver.com",
            "윤지혜",
            "zoezoes@naver.com",
            "임소리",
            "leejoohee22@naver.com",
            "이주희",
            "leenu7@naver.com",
            "이정민",
            "mari6089@hanmail.net",
            "이예림",
            "soyu92@hanmail.net",
            "이소영",
            "zndvn1@naver.com",
            "이소라",
            "ingeniare65@gmail.com",
            "이서현",
            "dlalsdkk@naver.com",
            "이민아",
            "dajang0323@naver.com",
            "이다정",
            "dksmfu@naver.com",
            "조은아",
            "dayecho@gmail.com",
            "조다예",
            "lusia_dino@naver.com",
            "정하나",
            "penguin30480@gmail.com",
            "정채원",
            "jiji7898@naver.com",
            "정지선",
            "epsilon669@hotmail.com",
            "정주희",
            "qhrud1468@daum.net",
            "정보경",
            "jmj032@naver.com",
            "정민주",
            "wjdaldo1234@naver.com",
            "정미애",
            "juhe0628_2@naver.com",
            "임주희",
            "mooso21@hanmail.net",
            "홍보미",
            "chom121660@naver.com",
            "허초미",
            "note93@naver.com",
            "한소린",
            "skywlsdk@naver.com ",
            "하진아",
            "csbn92@daum.net",
            "최새봄나"
        ];
        if (SceneAboutStudents._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAboutStudents._instance = this;
        this.alpha = 0;
        //this.assets.loadManifest([
        //    { id: "cicle", src: "assets/about_media_design/3_students/cicle.png" },
        //    { id: "16th_mdot_category1", src: "assets/about_media_design/3_students/16th_mdot_category1.png" }
        //]);
        this.init();
    }
    SceneAboutStudents.instance = function () {
        if (SceneAboutStudents._instance === null) {
            SceneAboutStudents._instance = new SceneAboutStudents();
        }
        return SceneAboutStudents._instance;
    };
    SceneAboutStudents.prototype.init = function () {
        this.initGraphic();
        for (var i = 0; i < 21; i++) {
            var circleButton = new CircleButton(this.getTex("16th_mdot_category1"), this.getTex("cicle"), 8, 25);
            circleButton.index = i;
            this.setCirclePosition(circleButton, i / 21 * 360, 380);
            this.circleButtonList.push(circleButton);
        }
        for (var i = 21; i < 39; i++) {
            var circleButton = new CircleButton(this.getTex("16th_mdot_category1"), this.getTex("cicle"), 8, 25);
            circleButton.index = i;
            this.setCirclePosition(circleButton, i / 19 * 360 + 20, 290);
            this.circleButtonList.push(circleButton);
        }
        for (var i = 39; i < 55; i++) {
            var circleButton = new CircleButton(this.getTex("16th_mdot_category1"), this.getTex("cicle"), 8, 25);
            circleButton.index = i;
            this.setCirclePosition(circleButton, i / 17 * 360 + 40, 235);
            this.circleButtonList.push(circleButton);
        }
        for (var i = 0; i < this.circleButtonList.length; i++) {
            this.circleButtonList[i].on("mouseover", function (event) {
                //(<CircleButton>event.target).image = (<CircleButton>event.target)._base;
                //(<CircleButton>event.target).regX = (<CircleButton>event.target)._center2;
                //(<CircleButton>event.target).regY = (<CircleButton>event.target)._center2;
                if (SceneAboutStudents.instance().lastButton === null) {
                }
                else {
                    SceneAboutStudents.instance().lastButton.setMouseout();
                    SceneAboutStudents.instance().lastButton = null;
                    SceneAboutStudents.instance().clearText();
                }
                SceneAboutStudents.instance().setText(event.target.x, event.target.y, event.target.index, true);
            });
            this.circleButtonList[i].on("mouseout", function (event) {
                //(<CircleButton>event.target).image = (<CircleButton>event.target)._imageOrUrl;
                //(<CircleButton>event.target).regX = (<CircleButton>event.target)._center1;
                //(<CircleButton>event.target).regY = (<CircleButton>event.target)._center1;
                SceneAboutStudents.instance().clearText();
            });
            this.addChild(this.circleButtonList[i]);
        }
    };
    SceneAboutStudents.prototype.clearText = function () {
        if (this.text1 === null)
            return;
        this.removeChild(this.text1);
        this.removeChild(this.text2);
        this.text1 = null;
        this.text2 = null;
        this.isCircle = false;
        this.clearBubble2();
    };
    SceneAboutStudents.prototype.setText = function (px, py, index, bubble) {
        if (this.text1 === null) {
            this.text1 = new createjs.Text(this.list[index * 2 + 1], "bold 14px yoon", "#ffffff");
            this.text1.x = px + 25;
            this.text1.y = py - 14;
            this.text1.alpha = 0;
            createjs.Tween.get(this.text1, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);
            this.addChild(this.text1);
            this.text2 = new createjs.Text(this.list[index * 2], "14px yoon", "#ffffff");
            this.text2.x = px + 25;
            this.text2.y = py + 3;
            this.text2.alpha = 0;
            createjs.Tween.get(this.text2, { loop: false }).to({ alpha: 1 }, 500, createjs.Ease.linear);
            this.addChild(this.text2);
            this.isCircle = true;
            this.circleX = px;
            this.circleY = py;
            if (bubble == true) {
                this.initBubble2();
            }
        }
    };
    SceneAboutStudents.prototype.initBubble = function () {
        for (var i = 0; i < 30; i++) {
            var circle = new Circle();
            circle.init(2 + 3 * Math.random(), 0.2 + 0.5 * Math.random());
            circle.x = 1520 * Math.random() + 200;
            circle.y = 1080 * Math.random();
            this.circleList.push(circle);
            this.addChild(circle);
        }
    };
    SceneAboutStudents.prototype.clearBubble2 = function () {
        for (var i = 0; i < this.circleList2.length; i++) {
            this.removeChild(this.circleList2[i]);
        }
        this.circleList2 = [];
    };
    SceneAboutStudents.prototype.initBubble2 = function () {
        for (var j = 0; j < 15; j++) {
            var circle = new Circle();
            circle.init(2 + 2 * Math.random(), 0.2 * Math.random());
            circle.x = this.circleX;
            circle.y = this.circleY;
            this.circleList2.push(circle);
            this.addChild(circle);
        }
    };
    SceneAboutStudents.prototype.updateBubble2 = function () {
        for (var i = 0; i < this.circleList2.length; i++) {
            //this.circleList2[i].y = this.circleList2[i].y - 3;
            //this.circleList2[i].x = this.circleList2[i].x + Math.sin(this.count / 90 * i / 3)/3;
            this.circleList2[i].y = this.circleList2[i].y - 5;
            this.circleList2[i].x = this.circleX + Math.sin((this.circleList2[i].y - this.circleY) / 90) * (10 + i);
            this.circleList2[i].alpha = this.circleList2[i].alpha - 0.005;
            if (this.circleList2[i].alpha <= 0) {
                this.circleList2[i].init(2 + 2 * Math.random(), 0.2 + 0.5 * Math.random());
                this.circleList2[i].x = this.circleX;
                this.circleList2[i].y = this.circleY;
            }
        }
    };
    SceneAboutStudents.prototype.setCirclePosition = function (button, rad, r) {
        button.x = 1920 / 2 + Math.sin(Math.PI * rad / 180) * r;
        button.y = 1080 / 2 - Math.cos(Math.PI * rad / 180) * r;
    };
    SceneAboutStudents.prototype.initGraphic = function () {
        this.shape = new createjs.Shape();
        this.g = new createjs.Graphics();
        this.shape.graphics = g;
        this.initBubble();
        for (var i = 0; i < this.arcSize.length; i++) {
            var shape = new createjs.Shape();
            var g = new createjs.Graphics();
            shape.graphics = g;
            shape.x = 1920 / 2;
            shape.y = 1080 / 2;
            this.addChild(shape);
            g.clear();
            g.setStrokeStyle(1);
            g.beginStroke("#FFF");
            g.arc(0, 0, this.arcSize[i], this.arcStart[i] * Math.PI / 180, this.arcEnd[i] * Math.PI / 180, false);
            this.shapeList.push(shape);
        }
    };
    SceneAboutStudents.prototype.startScene = function () {
        this.count = 0;
        this.addEventListener("tick", this.drawing);
        for (var i = 0; i < this.circleList.length; i++) {
            this.addChild(this.circleList[i]);
        }
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 1000, createjs.Ease.linear);
    };
    SceneAboutStudents.prototype.drawing = function (event) {
        SceneAboutStudents.instance().drawLines();
    };
    SceneAboutStudents.prototype.drawLines = function () {
        this.count++;
        this.updateBubble();
        this.updateBubble2();
        if (this.count % 150 == 0) {
            var index = Math.round(Math.random() * this.circleButtonList.length);
            if (this.lastButton === null) {
            }
            else {
                this.lastButton.setMouseout();
                this.clearText();
            }
            this.circleButtonList[index].setMouseover();
            this.setText(this.circleButtonList[index].x, this.circleButtonList[index].y, this.circleButtonList[index].index, false);
            this.lastButton = this.circleButtonList[index];
        }
        if (this.count > 30) {
            for (var i = 0; i < this.arcSize.length; i++) {
                this.shapeList[i].rotation = this.shapeList[i].rotation + (((i % 2) == 0) ? -0.2 : -0.2);
            }
            return;
        }
        var r = this.count / 30;
        for (var i = 0; i < this.arcSize.length; i++) {
            this.shapeList[i].scaleX = this.shapeList[i].scaleY = 0.5 + (1 - 0.5) * r + (1 - r) * (this.arcSize.length - i) / this.arcSize.length * 2;
        }
    };
    SceneAboutStudents.prototype.stopScene = function () {
        this.removeEventListener("tick", this.drawing);
        for (var i = 0; i < this.circleList.length; i++) {
            this.removeChild(this.circleList[i]);
        }
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
    };
    SceneAboutStudents._instance = null;
    return SceneAboutStudents;
})(Scene);
//# sourceMappingURL=SceneAboutStudents.js.map