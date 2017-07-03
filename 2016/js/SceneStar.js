var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneStar = (function (_super) {
    __extends(SceneStar, _super);
    function SceneStar() {
        _super.call(this);
        this.circleList = [];
        this.mx = 0;
        this.my = 0;
        if (SceneStar._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneStar._instance = this;
        this.init();
    }
    SceneStar.instance = function () {
        if (SceneStar._instance === null) {
            SceneStar._instance = new SceneStar();
        }
        return SceneStar._instance;
    };
    SceneStar.prototype.init = function () {
        for (var i = 0; i < 70; i++) {
            var circle = new Circle();
            circle.init(0.5, 1);
            circle.x = 1920 * Math.random();
            circle.y = 1080 * Math.random();
            this.circleList.push(circle);
            this.addChild(circle);
        }
        for (var i = 0; i < 40; i++) {
            var circle = new Circle();
            circle.init(0.7, 1);
            circle.x = 1920 * Math.random();
            circle.y = 1080 * Math.random();
            this.circleList.push(circle);
            this.addChild(circle);
        }
        for (var i = 0; i < 15; i++) {
            var circle = new Circle();
            circle.init(1, 1);
            circle.x = 1920 * Math.random();
            circle.y = 1080 * Math.random();
            this.circleList.push(circle);
            this.addChild(circle);
        }
        this.startScene();
    };
    SceneStar.prototype.updateMouseXY = function (mx1, my1) {
        this.mx = (mx1 - 1920 / 2) / 100;
        this.my = (my1 - 1080 / 2) / 100;
    };
    SceneStar.prototype.startScene = function () {
    };
    SceneStar.prototype.scroll = function (dx, dy, time) {
        var ddx = dx * 1920 / 30 / time;
        var ddy = dy * 1080 / 30 / time;
        this.mx = ddx;
        this.my = ddy;
        createjs.Tween.get(this).to({ mx: ddx, my: ddy }, (time) * 1000, createjs.Ease.quadInOut);
    };
    SceneStar.prototype.playScene = function () {
        this.mx *= 0.9;
        this.my *= 0.9;
        for (var i = 0; i < this.circleList.length; i++) {
            this.circleList[i].update(this.mx, this.my);
        }
    };
    SceneStar.prototype.stopScene = function () {
    };
    SceneStar._instance = null;
    return SceneStar;
})(Scene);
//# sourceMappingURL=SceneStar.js.map