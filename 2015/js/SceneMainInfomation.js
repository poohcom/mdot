/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneMainInfomation = (function (_super) {
    __extends(SceneMainInfomation, _super);
    function SceneMainInfomation() {
        _super.call(this);
        this.arr = [];
        this.circlePosX = [279, 1011];
        this.circlePosY = [570, 500];
        if (SceneMainInfomation._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneMainInfomation._instance = this;
        this.init();
    }
    SceneMainInfomation.instance = function () {
        if (SceneMainInfomation._instance === null) {
            SceneMainInfomation._instance = new SceneMainInfomation();
        }
        return SceneMainInfomation._instance;
    };
    SceneMainInfomation.prototype.init = function () {
        this.initBubble();
        this.menu_icon = new TitleCircle(this.getTex("aboutmediadesign_titledot"), 19);
        this.menu_icon.x = 129;
        this.menu_icon.y = 117;
        //this.menu_icon.x = 179;
        //this.menu_icon.y = 277;
        this.addChild(this.menu_icon);
        this.exhibition_information = new createjs.Bitmap(this.getTex("main_exhibitioninformation_title"));
        this.exhibition_information.x = 195;
        this.exhibition_information.y = 96;
        //this.exhibition_information.x = 245;
        //this.exhibition_information.y = 237;
        this.addChild(this.exhibition_information);
        this.map = new createjs.Bitmap(this.getTex("map_flatten_1"));
        this.map.x = 238;
        this.map.y = 400;
        this.addChild(this.map);
        this.map_icon = new createjs.Bitmap(this.getTex("map_icon"));
        this.map_icon.x = 600;
        this.map_icon.y = 610;
        this.map_icon.regX = 41;
        this.map_icon.regY = 39;
        this.map_icon.scaleX = 0.7;
        this.map_icon.scaleY = 0.7;
        this.addChild(this.map_icon);
        for (var i = 0; i < 3; i++) {
            var circle = new Circle();
            circle.x = 600;
            circle.y = 610;
            this.addChild(circle);
            this.arr.push(circle);
        }
        this.text_image = new createjs.Bitmap(this.getTex("text_image"));
        this.text_image.x = 1258;
        this.text_image.y = 256;
        this.addChild(this.text_image);
    };
    SceneMainInfomation.prototype.startScene = function () {
        this.count = 0;
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        this.addEventListener("tick", this.drawing);
    };
    SceneMainInfomation.prototype.stopScene = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
    };
    SceneMainInfomation.prototype.clearScene = function () {
        _super.prototype.clearScene.call(this);
    };
    SceneMainInfomation.prototype.playScene = function () {
    };
    SceneMainInfomation.prototype.drawing = function (event) {
        event.target.drawLines();
    };
    SceneMainInfomation.prototype.drawLines = function () {
        this.count++;
        this.updateBubble();
        var mapindex = Math.round(this.count / 5) % 30 + 1;
        if (mapindex > 15) {
            mapindex = 16 - (mapindex - 15);
        }
        this.map.image = this.getTex("map_flatten_" + mapindex);
        for (var i = 0; i < 3; i++) {
            this.arr[i].initLine((this.count / 10 + i * 10) % 30, 1 - (this.count / 10 + i * 10) % 30 / 30);
        }
        this.menu_icon.drawCircle();
    };
    SceneMainInfomation.prototype.initBubble = function () {
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 30; j++) {
                var circle = new Circle();
                circle.index = i;
                circle.init(2 + 3 * Math.random(), 0.2 * Math.random());
                var dx = Math.random() * 200;
                circle.x = this.circlePosX[i] + dx;
                circle.y = this.circlePosY[i] - Math.random() * 100 + dx * ((i == 0) ? -0.3 : 0.4);
                this.circleList.push(circle);
                this.addChild(circle);
            }
        }
    };
    SceneMainInfomation.prototype.updateBubble = function () {
        for (var i = 0; i < this.circleList.length; i++) {
            this.circleList[i].x = this.circleList[i].x + Math.sin(this.count / 90 * i / 3) / 5;
            this.circleList[i].y = this.circleList[i].y - 1;
            this.circleList[i].alpha = this.circleList[i].alpha - 0.002;
            if (this.circleList[i].alpha <= 0) {
                var index = this.circleList[i].index;
                var dx = Math.random() * 200;
                this.circleList[i].initFill(2 + 3 * Math.random(), 0.1 + 0.2 * Math.random());
                this.circleList[i].x = this.circlePosX[index] + dx;
                this.circleList[i].y = this.circlePosY[index] + Math.random() * 10 + dx * ((index == 0) ? -0.3 : 0.4);
            }
        }
    };
    SceneMainInfomation._instance = null;
    return SceneMainInfomation;
})(Scene);
//# sourceMappingURL=SceneMainInfomation.js.map