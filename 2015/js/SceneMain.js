/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../Scripts/typings/tweenjs/tweenjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneMain = (function (_super) {
    __extends(SceneMain, _super);
    function SceneMain() {
        _super.call(this);
        if (SceneMain._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneMain._instance = this;
        //        this.assets.loadManifest([]);
        this.init();
    }
    SceneMain.instance = function () {
        if (SceneMain._instance === null) {
            SceneMain._instance = new SceneMain();
        }
        return SceneMain._instance;
    };
    SceneMain.prototype.scrollToY = function (ty) {
        this.y = this.startY + ty - this.startMouseY;
    };
    SceneMain.prototype.init = function () {
        var container = new createjs.Container;
        this.addChild(container);
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#FFF").drawRect(0, 0, 1920, 1080 * 3);
        container.hitArea = hit;
        container.on("mousedown", function (event) {
            if (SceneManager.instance().getSceneIndex() >= 10)
                return;
            SceneMain.instance().startMouseY = event.localY;
            SceneMain.instance().startY = SceneMain.instance().y;
        });
        container.on("pressmove", function (event) {
            if (SceneManager.instance().getSceneIndex() > 2)
                return;
            SceneMain.instance().scrollToY(event.localY);
        });
        container.on("pressup", function (event) {
            if (SceneManager.instance().getSceneIndex() > 2)
                return;
            SceneMain.instance().scrollToY(event.localY);
            var dy = SceneMain.instance().startMouseY - event.localY;
            SceneMain.instance().startMouseY = 0;
            if (Math.abs(dy) < 50) {
                if (SceneMain.instance().y > -540) {
                    SceneManager.instance().nextSceneIndex(0);
                }
                else if (SceneMain.instance().y > -540 - 1080) {
                    SceneManager.instance().nextSceneIndex(1);
                }
                else if (SceneMain.instance().y > -540 - 1080 - 1080) {
                    SceneManager.instance().nextSceneIndex(2);
                }
                return;
            }
            if (dy < 0) {
                SceneManager.instance().nextSceneIndex(Math.max(0, SceneManager.instance().getSceneIndex() - 1));
            }
            else {
                SceneManager.instance().nextSceneIndex(Math.min(2, SceneManager.instance().getSceneIndex() + 1));
            }
        });
        this.addChild(SceneMainMainPage.instance());
        this.sceneMainInfomation = new SceneMainInfomation;
        this.sceneMainInfomation.y = 1080;
        this.addChild(this.sceneMainInfomation);
        var menu = SceneMainMenu.instance();
        menu.y = 1080 * 2;
        this.addChild(menu);
    };
    SceneMain.prototype.startScene = function () {
    };
    SceneMain.prototype.stopScene = function () {
    };
    SceneMain.prototype.clearScene = function () {
        _super.prototype.clearScene.call(this);
    };
    SceneMain.prototype.playScene = function () {
    };
    SceneMain._instance = null;
    return SceneMain;
})(Scene);
//# sourceMappingURL=SceneMain.js.map