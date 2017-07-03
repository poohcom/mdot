/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ScenePortContents = (function (_super) {
    __extends(ScenePortContents, _super);
    function ScenePortContents() {
        _super.call(this);
        this.thumbtext = [
            ["Bluelink Infortainment\n& Smart Watch", "김보경 순별이 신민아 이소영"],
            ["Booze", "배하린 송연아"],
            ["E- SMART", "오남경 윤지혜 임소리 허초미"],
            ["Kids Keeper", "나현아 남예은 신효진\n오연택 정미애"],
            ["Midi Kiosk", "권은혜 박성현 이정민\n조다예 하진아"],
            ["Multi Talk", "김선형"],
            ["My Fitness Partner", "고현경 김연희 김혜주\n윤소담 조은아"],
            ["서울시티투어버스\n정류장 키오스크", "김아란 이소라 정채원 최새봄나"],
            ["한글박물관", "도미래 이민아 양수련\n정하나 한소린"]
        ];
        /////////
        //public drawLines(): void {
        //    this.count++;
        //    for (var j: number = 0; j < this.buttonCount; j++) {
        //        if (this.buttonList[j].isMouseOver == false) {
        //            this.buttonList[j].y = this.buttonList[j].y + 2;
        //        }
        //    }
        //    var r: number = this.count / 5;
        //    this.gheight = Math.sin(r / 29) / 4 + 0.75;
        //    this.gheight2 = Math.cos(r / 37);
        //    this.g.clear();
        //    this.g.setStrokeStyle(1.5);
        //    this.g.beginStroke("#FFF");
        //    this.drawLine(3 + this.gheight2, 3 * this.gheight2, this.gheight, this.gheight * 20 + r / 180, 0);
        //    this.g.setStrokeStyle(0.5);
        //    this.drawLine(4 + this.gheight2, 3 * this.gheight2, 3, -this.gheight * 30 + r / 180, 1920);
        //    this.g.setStrokeStyle(2.0);
        //    this.drawLine(5 + this.gheight2, 2 + this.gheight2, this.gheight, this.gheight * 20 + r / 180, 1920);
        //    this.g.setStrokeStyle(1.0);
        //    this.drawLine(6, 2.5 + this.gheight2, this.gheight2 * 20, this.gheight * 10 + r / 180, 0);
        //}
        //public drawLine(a1: number, a2: number, b1: number, b2: number, delayIndex: number): void {
        //    this.g.moveTo(0, 540);
        //    var r: number = 0;
        //    var c: number = Math.PI / 960;
        //    for (var i: number = 20; i < 1920 && i < this.count * 20 - delayIndex; i = i + 10) {
        //        r = c * i;
        //        this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx(r, a1, a2, b1, b2) * this.gheight);
        //    }
        //    if (1920 < this.count * 20 - delayIndex) {
        //        this.g.lineTo(1920, 540);
        //    }
        //    for (var j: number = 0; j < this.buttonCount; j++) {
        //        var bx: number = this.startX + this.gap * j;
        //        r = c * bx;
        //        var by = 540 + (0.5 - Math.cos(r) / 2) * this.fx(r, a1, a2, b1, b2) * this.gheight;
        //        if (this.buttonList[j].y > by) {
        //            this.buttonList[j].y = by;
        //        }
        //    }
        //}
        //public fx(r: number, a1: number, a2: number, b1: number, b2: number): number {
        //    return Math.sin(r * a1 - b1) * 50 + Math.sin(r * a2 + b2) * 100;
        //}
        this.dr = 0;
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
        this.listText = [
            "Bluelink Infortainment \n& Smart Watch",
            "Booze",
            "E- SMART",
            "Kids Keeper",
            "Midi Kiosk",
            "Multi Talk",
            "My Fitness Partner",
            "서울시티투어버스 키오스크",
            "한글 박물관"
        ];
        this.g = new createjs.Graphics();
        this.shape = new createjs.Shape();
        this.shape.alpha = 0.4;
        this.shape.graphics = this.g;
        this.addChild(this.shape);
        this.makeButton();
        this.makeList();
        for (var i = 0; i < this.textButtonList.length; i++) {
            this.textButtonList[i].on("click", function () {
                var index = ScenePortContents.instance().textButtonList.indexOf(this) + 1;
                SceneManager.instance().popupPort(28, index);
            });
        }
    };
    ScenePortContents.prototype.startScene = function () {
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
    ScenePortContents.prototype.drawing = function (event) {
        ScenePortContents.instance().drawLines();
    };
    ScenePortContents.prototype.stopScene = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
    };
    ScenePortContents.prototype.makeButton = function () {
        this.startX = 480;
        this.buttonCount = 9;
        this.gap = 20 * 6;
        for (var i = 0; i < this.buttonCount; i++) {
            var button = new PortCircleButton(this.getTex("students_work_button"), "assets/16th_web/contents/thumbnail/" + (i + 1) + ".png", 18, 53, this.thumbtext[i][0], this.thumbtext[i][1]);
            button.index = i + 1;
            button.x = this.startX + this.gap * i;
            button.y = 1080 / 2;
            button.on("click", function () {
                SceneManager.instance().popupPort(28, this.index);
            });
            button.on("mouseover", function (event) {
                ScenePortContents.instance().mouseOver(event.currentTarget.index);
            });
            button.on("mouseout", function (event) {
                ScenePortContents.instance().mouseOut(event.currentTarget.index);
            });
            this.addChild(button);
            this.buttonList.push(button);
        }
    };
    ScenePortContents.prototype.drawLines = function () {
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
        this.drawSine(960 / 150.0, sr * 0.5, 30, 4, 0.5, 15, this.gheight, false);
        this.g.setStrokeStyle(2.0);
        this.drawSine(960 / 300.0, sr * 0.8, 80, 1 + this.gheight2 * 2, 0.5, 10, this.gheight, true);
    };
    ScenePortContents.prototype.drawSine = function (a1, a2, a3, b1, b2, b3, height, collide) {
        this.g.moveTo(0, 540);
        var r = 0;
        //var c: number = Math.PI / 960;
        var c = 2 * Math.PI / (1920 - 400);
        for (var i = 200; i < 1720; i = i + 10) {
            var di = Math.min(1520, i - 200);
            r = c * di;
            this.g.lineTo(i, 540 + (0.5 - Math.cos(r) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight);
        }
        this.g.lineTo(1920, 540);
        if (collide == false)
            return;
        for (var j = 0; j < this.buttonCount; j++) {
            var bx = this.startX + this.gap * j;
            var dbx = Math.min(1520, bx - 200);
            r = c * dbx;
            var by = 540 + (0.5 - Math.cos(r) / 2) * this.fx2(r, a1, a2, a3, b1, b2, b3) * this.gheight;
            if (this.buttonList[j].y > by && this.buttonList[j].isMouseOver == false) {
                this.buttonList[j].y = by;
                this.buttonList[j].dy = -5;
            }
        }
    };
    ScenePortContents.prototype.fx2 = function (r, a1, a2, a3, b1, b2, b3) {
        return Math.sin((-r + a2) * a1) * a3 + Math.sin((-r + b2) * b1) * b3;
    };
    ScenePortContents._instance = null;
    return ScenePortContents;
})(ScenePort);
//# sourceMappingURL=ScenePortContents.js.map