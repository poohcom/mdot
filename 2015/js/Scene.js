/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Scene = (function (_super) {
    __extends(Scene, _super);
    //public assets: createjs.LoadQueue;
    //private loadProgressLabel: createjs.Text = null;
    function Scene() {
        _super.call(this);
        this.circleList = [];
        this.count = 0;
        //this.loadProgressLabel = new createjs.Text("", "bold 100px yoon", "#ffffff");
        //this.loadProgressLabel.x = 860;
        //this.loadProgressLabel.y = 440;
        //this.addChild(this.loadProgressLabel);
        //this.assets = new createjs.LoadQueue();
        //this.assets.on("complete", handleComplete, this);
        //this.assets.on("progress", handleProgress, this);
        //function handleComplete() {
        //    this.init();
        //    this.removeChild(this.loadProgressLabel);
        //}
        //function handleProgress() {
        //    var progresPrecentage: number = Math.round(this.assets.progress * 100);
        //    this.loadProgressLabel.text = progresPrecentage + "%";
        //    //this.stage.update();
        //}        
    }
    // 생성
    Scene.prototype.init = function () {
        this.startScene();
    };
    Scene.prototype.dispose = function () {
        ///this.assets.removeAll();
    };
    // 연출 시작
    Scene.prototype.startScene = function () {
    };
    // 종료 연출
    Scene.prototype.stopScene = function () {
    };
    // 마무리
    Scene.prototype.clearScene = function () {
        this.dispose();
    };
    Scene.prototype.playScene = function () {
    };
    Scene.prototype.getTex = function (name) {
        //return <HTMLImageElement> this.assets.getResult(name);
        return SceneManager.instance().queue.getResult(name);
    };
    Scene.prototype.getLabel = function (name) {
        var dom = new createjs.DOMElement(document.getElementById(name));
        dom.htmlElement.hidden = false;
        return new createjs.DOMElement(document.getElementById(name));
    };
    Scene.prototype.showLabel = function (dom) {
        dom.htmlElement.hidden = false;
        //dom.htmlElement.parentNode.removeChild(dom.htmlElement);
    };
    Scene.prototype.removeLabel = function (dom) {
        dom.htmlElement.hidden = true;
        //dom.htmlElement.parentNode.removeChild(dom.htmlElement);
    };
    Scene.prototype.initBubble = function (color) {
        for (var i = 0; i < 30; i++) {
            var circle = new Circle();
            circle.initColor(2 + 3 * Math.random(), 0.2 + 0.2 * Math.random(), color);
            circle.x = 1520 * Math.random() + 200;
            circle.y = 1080 * Math.random();
            this.circleList.push(circle);
            this.addChild(circle);
        }
    };
    Scene.prototype.updateBubble = function () {
        for (var i = 0; i < this.circleList.length; i++) {
            this.circleList[i].x = this.circleList[i].x + Math.sin(this.count / 90 * i / 3);
            this.circleList[i].y = this.circleList[i].y - 1;
            if (this.circleList[i].y < 0)
                this.circleList[i].y = 1080;
        }
    };
    return Scene;
})(createjs.Container);
//# sourceMappingURL=Scene.js.map