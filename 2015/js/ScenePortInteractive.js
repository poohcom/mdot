/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ScenePortInteractive = (function (_super) {
    __extends(ScenePortInteractive, _super);
    function ScenePortInteractive() {
        _super.call(this);
        this.thumbtext = [["M.DOT", "김연희 노효정 오남경\n이예림 조다예 하진아"], ["Animal Farm", "남예은 오연택 이주희 홍보미"], ["The Secret forest - 비밀의 숲", "김수려 박경희 오명선"], ["궁금해요, 곤충의 숲", "김민지 도미래 정보경 정지선"], ["깨비깨비 한국도깨비", "김주연 김지영 임주희 정민주", ""], ["악마를 보았다", "권은혜 윤지혜 조은아"]];
        this.dr = 0;
        if (ScenePortInteractive._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortInteractive._instance = this;
        this.init();
    }
    ScenePortInteractive.instance = function () {
        if (ScenePortInteractive._instance === null) {
            ScenePortInteractive._instance = new ScenePortInteractive();
        }
        return ScenePortInteractive._instance;
    };
    ScenePortInteractive.prototype.init = function () {
        this.listText = [
            "M.DOT",
            "Animal Farm",
            "The Secret forest",
            "궁금해요, 곤충의 숲",
            "깨비깨비 한국도깨비",
            "악마를 보았다"
        ];
        this.g = new createjs.Graphics();
        this.shape = new createjs.Shape();
        this.shape.alpha = 0.5;
        this.shape.graphics = this.g;
        this.addChild(this.shape);
        this.makeButton();
        this.makeList();
        for (var i = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function () {
                var index = ScenePortInteractive.instance().textButtonList.indexOf(this) + 1;
                SceneManager.instance().popupPort(25, index);
            });
        }
    };
    ScenePortInteractive.prototype.startScene = function () {
        this.count = 0;
        this.dr = 0;
        this.addEventListener("tick", this.drawing);
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        for (var i = 0; i < this.buttonCount; i++) {
            this.buttonList[i].alpha = 0;
            createjs.Tween.get(this.buttonList[i], { loop: false }).wait(2000).to({ alpha: 1 }, 1000, createjs.Ease.linear);
        }
    };
    ScenePortInteractive.prototype.stopScene = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
    };
    ScenePortInteractive.prototype.makeButton = function () {
        this.startX = 460;
        this.buttonCount = 6;
        this.gap = 20 * 10;
        for (var i = 0; i < this.buttonCount; i++) {
            var button = new PortCircleButton(this.getTex("students_work_button"), "assets/16th_web/interac/thumbnail/" + (i + 1) + ".png", 18, 53, this.thumbtext[i][0], this.thumbtext[i][1]);
            button.index = i + 1;
            button.x = this.startX + this.gap * i;
            button.y = 1080 / 2;
            button.on("click", function () {
                SceneManager.instance().popupPort(25, this.index);
            });
            button.on("mouseover", function (event) {
                ScenePortInteractive.instance().mouseOver(event.currentTarget.index);
            });
            button.on("mouseout", function (event) {
                ScenePortInteractive.instance().mouseOut(event.currentTarget.index);
            });
            this.addChild(button);
            this.buttonList.push(button);
        }
    };
    ScenePortInteractive.prototype.drawing = function (event) {
        ScenePortInteractive.instance().drawLines();
    };
    ScenePortInteractive.prototype.drawLines = function () {
        this.count++;
        for (var j = 0; j < this.buttonCount; j++) {
            if (this.buttonList[j].isMouseOver == false) {
                //this.buttonList[j].y = this.buttonList[j].y + 2;
                this.buttonList[j].updateY();
            }
        }
        //var r: number = this.count / 5;
        //this.gheight = Math.sin(r / 29) / 4 + 0.75;
        this.gheight = 1; //Math.sin(r / 29) / 4 + 0.75;
        this.dr = this.dr + 0.02 + Math.sin(this.count / 15) / 100;
        var sr = this.count / 50;
        if (this.count < 60) {
            this.gheight = 0;
        }
        else if (this.count < 150) {
            var h1 = Math.sin((this.count - 60) / 90 * Math.PI / 2);
            this.gheight = this.gheight * h1;
        }
        var r = this.dr;
        this.g.clear();
        this.g.beginStroke("#FFF");
        this.g.setStrokeStyle(1.5);
        this.drawSine(960 / 400, r * 0.9, 100, 1 + this.gheight2, 0.5, 45, this.gheight, false);
        this.g.setStrokeStyle(0.5);
        this.drawSine(960 / 550.0, r * 1.1, 100, 1 + this.gheight2 * 3, 0.5, 25, this.gheight, false);
        this.g.setStrokeStyle(1.0);
        this.drawSine(960 / 100.0, sr * 0.5, 30, 4, 0.5, 15, this.gheight, false);
        this.g.setStrokeStyle(2.0);
        this.drawSine(960 / 300.0, sr * 0.8, 80, 1 + this.gheight2 * 2, 0.5, 10, this.gheight, true);
    };
    ScenePortInteractive.prototype.drawSine = function (a1, a2, a3, b1, b2, b3, height, collide) {
        this.g.moveTo(0, 540);
        var r = 0;
        //var c: number = Math.PI / 960;
        var c = 2 * Math.PI / (1920 - 600);
        for (var i = 300; i < 1620; i = i + 10) {
            var di = Math.min(1320, i - 300);
            r = c * di;
            this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight);
        }
        this.g.lineTo(1920, 540);
        if (collide == false)
            return;
        for (var j = 0; j < this.buttonCount; j++) {
            var bx = this.startX + this.gap * j;
            var dbx = Math.min(1320, bx - 300);
            r = c * dbx;
            var by = 540 + (0.5 - Math.cos(r) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight;
            if (this.buttonList[j].y > by && this.buttonList[j].isMouseOver == false) {
                this.buttonList[j].y = by;
                this.buttonList[j].dy = -5;
            }
        }
    };
    ScenePortInteractive.prototype.fx2 = function (r, a1, a2, a3, b1, b2, b3) {
        return Math.sin((-r + a2) * a1) * a3 + Math.sin((-r + b2) * b1) * b3;
    };
    ScenePortInteractive._instance = null;
    return ScenePortInteractive;
})(ScenePort);
//# sourceMappingURL=ScenePortInteractive.js.map