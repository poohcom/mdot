/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneAbout = (function (_super) {
    __extends(SceneAbout, _super);
    function SceneAbout() {
        _super.call(this);
        this.container = new createjs.Container;
        if (SceneAbout._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout._instance = this;
        this.init();
    }
    SceneAbout.instance = function () {
        if (SceneAbout._instance === null) {
            SceneAbout._instance = new SceneAbout();
        }
        return SceneAbout._instance;
    };
    SceneAbout.prototype.scrollToY = function (ty) {
        this.y = this.startY + ty - this.startMouseY;
        this.y = Math.min(this.y, 0);
        this.y = Math.max(this.y, -1080 * 7);
    };
    SceneAbout.prototype.init = function () {
        this.container = new createjs.Container;
        this.addChild(this.container);
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#FFF").drawRect(0, 0, 1920, 1080 * 8);
        this.container.hitArea = hit;
        this.sceneAboutAbout = new SceneAboutAbout();
        this.sceneAboutAbout.y = 0;
        this.addChild(this.sceneAboutAbout);
        this.sceneAboutProfessors = SceneAboutProfessors.instance();
        this.sceneAboutProfessors.y = 1080;
        this.addChild(this.sceneAboutProfessors);
        this.sceneAboutStudents = SceneAboutStudents.instance();
        this.sceneAboutStudents.y = 1080 * 2;
        this.addChild(this.sceneAboutStudents);
        this.sceneAbout16thMdot = SceneAbout16thMdot.instance();
        this.sceneAbout16thMdot.y = 1080 * 3;
        this.addChild(this.sceneAbout16thMdot);
        this.sceneAbout16thCommittee = SceneAbout16thCommittee.instance();
        this.sceneAbout16thCommittee.y = 1080 * 4;
        this.addChild(this.sceneAbout16thCommittee);
        this.sceneAbout16thDesign1 = SceneAbout16thDesign1.instance();
        this.sceneAbout16thDesign1.y = 1080 * 5;
        this.addChild(this.sceneAbout16thDesign1);
        this.sceneAbout16thDesign2 = SceneAbout16thDesign2.instance();
        this.sceneAbout16thDesign2.y = 1080 * 6;
        this.addChild(this.sceneAbout16thDesign2);
        this.sceneAbout16thDesign3 = SceneAbout16thDesign3.instance();
        this.sceneAbout16thDesign3.y = 1080 * 7;
        this.addChild(this.sceneAbout16thDesign3);
    };
    SceneAbout.prototype.startScene = function () {
        switch (SceneManager.instance().getSceneIndex()) {
            case 10:
                this.sceneAboutAbout.startScene();
                break;
            case 11:
                this.sceneAboutProfessors.startScene();
                break;
            case 12:
                this.sceneAboutStudents.startScene();
                break;
            case 13:
                this.sceneAbout16thMdot.startScene();
                break;
            case 14:
                this.sceneAbout16thCommittee.startScene();
                break;
            case 15:
                this.sceneAbout16thDesign1.startScene();
                break;
            case 16:
                this.sceneAbout16thDesign2.startScene();
                break;
            case 17:
                this.sceneAbout16thDesign3.startScene();
                break;
        }
        this.container.on("mousedown", function (event) {
            if (SceneManager.instance().getSceneIndex() < 10 || SceneManager.instance().getSceneIndex() >= 20)
                return;
            SceneAbout.instance().startMouseY = event.localY;
            SceneAbout.instance().startY = SceneAbout.instance().y;
        });
        this.container.on("pressmove", function (event) {
            if (SceneManager.instance().getSceneIndex() < 10 || SceneManager.instance().getSceneIndex() >= 20)
                return;
            SceneAbout.instance().scrollToY(event.localY);
        });
        this.container.on("pressup", function (event) {
            if (SceneManager.instance().getSceneIndex() < 10 || SceneManager.instance().getSceneIndex() >= 20)
                return;
            SceneAbout.instance().scrollToY(event.localY);
            var dy = SceneAbout.instance().startMouseY - event.localY;
            SceneAbout.instance().startMouseY = 0;
            if (Math.abs(dy) < 50) {
                if (SceneAbout.instance().y > -540) {
                    SceneManager.instance().nextSceneIndex(10);
                }
                else if (SceneAbout.instance().y > -540 - 1080) {
                    SceneManager.instance().nextSceneIndex(11);
                }
                else if (SceneAbout.instance().y > -540 - 1080 * 2) {
                    SceneManager.instance().nextSceneIndex(12);
                }
                else if (SceneAbout.instance().y > -540 - 1080 * 3) {
                    SceneManager.instance().nextSceneIndex(13);
                }
                else if (SceneAbout.instance().y > -540 - 1080 * 4) {
                    SceneManager.instance().nextSceneIndex(14);
                }
                else if (SceneAbout.instance().y > -540 - 1080 * 5) {
                    SceneManager.instance().nextSceneIndex(15);
                }
                else if (SceneAbout.instance().y > -540 - 1080 * 6) {
                    SceneManager.instance().nextSceneIndex(16);
                }
                else if (SceneAbout.instance().y > -540 - 1080 * 7) {
                    SceneManager.instance().nextSceneIndex(17);
                }
                return;
            }
            if (dy < 0) {
                SceneManager.instance().nextSceneIndex(Math.max(10, SceneManager.instance().getSceneIndex() - 1));
            }
            else {
                SceneManager.instance().nextSceneIndex(Math.min(17, SceneManager.instance().getSceneIndex() + 1));
            }
        });
    };
    SceneAbout.prototype.stopScene = function () {
        this.container.removeAllEventListeners();
        switch (SceneManager.instance().getSceneIndex()) {
            case 10:
                this.sceneAboutAbout.stopScene();
                break;
            case 11:
                this.sceneAboutProfessors.stopScene();
                break;
            case 12:
                this.sceneAboutStudents.stopScene();
                break;
            case 13:
                this.sceneAbout16thMdot.stopScene();
                break;
            case 14:
                this.sceneAbout16thCommittee.stopScene();
                break;
            case 15:
                this.sceneAbout16thDesign1.stopScene();
                break;
            case 16:
                this.sceneAbout16thDesign2.stopScene();
                break;
            case 17:
                this.sceneAbout16thDesign3.stopScene();
                break;
        }
    };
    SceneAbout._instance = null;
    return SceneAbout;
})(Scene);
//# sourceMappingURL=SceneAbout.js.map