var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        _super.call(this);
        this.count = 0;
    }
    Scene.prototype.init = function () {
        this.startScene();
    };
    Scene.prototype.dispose = function () {
    };
    Scene.prototype.getStopSceneTime = function () {
        return 1;
    };
    Scene.prototype.startScene = function () {
    };
    Scene.prototype.stopScene = function () {
    };
    Scene.prototype.clearScene = function () {
        this.dispose();
    };
    Scene.prototype.playScene = function () {
    };
    Scene.prototype.getTex = function (name) {
        return SceneManager.instance().queue.getResult(name);
    };
    Scene.prototype.getLabel = function (name) {
        var dom = new createjs.DOMElement(document.getElementById(name));
        dom.htmlElement.hidden = false;
        return dom;
    };
    Scene.prototype.showLabel = function (dom) {
        dom.htmlElement.hidden = false;
    };
    Scene.prototype.removeLabel = function (dom) {
        dom.htmlElement.hidden = true;
    };
    Scene.prototype.updateMouseXY = function (mx, my) {
    };
    Scene.prototype.scrollXY = function (x1, y1, x2, y2, time) {
        this.x = x1;
        this.y = y1;
        createjs.Tween.get(this).to({ x: x2, y: y2 }, (time) * 1000, createjs.Ease.quadInOut);
    };
    Scene.prototype.createText = function (type, text, px, py) {
        var label;
        switch (type) {
            case Config.FONT_TYPE_BOLD:
                label = new createjs.Text(text, "bold 15px yoon", "#ffffff");
                break;
            case Config.FONT_TYPE_NORMAL:
                label = new createjs.Text(text, "normal 15px yoon", "#b9b9b9");
                break;
        }
        label.x = px;
        label.y = py;
        this.addChild(label);
    };
    return Scene;
})(createjs.Container);
//# sourceMappingURL=Scene.js.map