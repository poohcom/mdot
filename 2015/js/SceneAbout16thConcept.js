/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneAbout16thConcenpt = (function (_super) {
    __extends(SceneAbout16thConcenpt, _super);
    function SceneAbout16thConcenpt() {
        _super.call(this);
        this.pageContainer = new createjs.Container();
        this.page = null;
        this.tb1 = null;
        this.tb2 = null;
        this.tb3 = null;
        if (SceneAbout16thConcenpt._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thConcenpt._instance = this;
        // sixteenthmdot1
        this.alpha = 0;
        //this.assets.loadManifest([
        //    { id: "16th_mdot_category1", src: "assets/about_media_design/6_16th_committee/16th_mdot_category1.png" },
        //    { id: "16th_mdot_category2", src: "assets/about_media_design/6_16th_committee/16th_mdot_category2.png" }
        //]);
        this.pageContainer = new createjs.Container();
        this.addChild(this.pageContainer);
        this.sixteenthmdottitle1 = this.getLabel('sixteenthmdottitle1');
        this.sixteenthmdottitle1.x = 267;
        this.sixteenthmdottitle1.y = 223;
        this.addChild(this.sixteenthmdottitle1);
        this.sixteenthmdottitle2 = this.getLabel('sixteenthmdottitle2');
        this.sixteenthmdottitle2.x = 267;
        this.sixteenthmdottitle2.y = 223;
        this.addChild(this.sixteenthmdottitle2);
        this.sixteenthmdottitle3 = this.getLabel('sixteenthmdottitle3');
        this.sixteenthmdottitle3.x = 267;
        this.sixteenthmdottitle3.y = 223;
        this.addChild(this.sixteenthmdottitle3);
        this.init();
    }
    SceneAbout16thConcenpt.instance = function () {
        if (SceneAbout16thConcenpt._instance === null) {
            SceneAbout16thConcenpt._instance = new SceneAbout16thConcenpt();
        }
        return SceneAbout16thConcenpt._instance;
    };
    SceneAbout16thConcenpt.prototype.init = function () {
        this.initGraphic();
        this.tb1 = new ToggleButton(this.getTex("16th_mdot_category1"), this.getTex("16th_mdot_category2"), this.getTex("16th_mdot_category1"), 17, 16);
        this.tb1.setCheck(true);
        this.tb1.on("click", function () {
            SceneAbout16thConcenpt.instance().setPage(1);
        });
        this.tb1.x = 620;
        this.tb1.y = 168;
        this.addChild(this.tb1);
        this.tb2 = new ToggleButton(this.getTex("16th_mdot_category1"), this.getTex("16th_mdot_category2"), this.getTex("16th_mdot_category1"), 17, 16);
        this.tb2.setCheck(false);
        this.tb2.on("click", function () {
            SceneAbout16thConcenpt.instance().setPage(2);
        });
        this.tb2.x = 660;
        this.tb2.y = 168;
        this.addChild(this.tb2);
        this.tb3 = new ToggleButton(this.getTex("16th_mdot_category1"), this.getTex("16th_mdot_category2"), this.getTex("16th_mdot_category1"), 17, 16);
        this.tb3.setCheck(false);
        this.tb3.on("click", function () {
            SceneAbout16thConcenpt.instance().setPage(3);
        });
        this.tb3.x = 700;
        this.tb3.y = 168;
        this.addChild(this.tb3);
        //this.setPage(1);
    };
    SceneAbout16thConcenpt.prototype.initGraphic = function () {
        this.initBubble("#FFF");
    };
    SceneAbout16thConcenpt.prototype.setPage = function (pageIndex) {
        if (this.page === null) {
        }
        else {
            this.page.stopScene();
            this.pageContainer.removeChild(this.page);
        }
        switch (pageIndex) {
            case 1:
                this.page = SceneAbout16thConceptPage1.instance();
                this.showLabel(this.sixteenthmdottitle1);
                this.removeLabel(this.sixteenthmdottitle2);
                this.removeLabel(this.sixteenthmdottitle3);
                break;
            case 2:
                this.page = SceneAbout16thConceptPage2.instance();
                this.removeLabel(this.sixteenthmdottitle1);
                this.showLabel(this.sixteenthmdottitle2);
                this.removeLabel(this.sixteenthmdottitle3);
                break;
            case 3:
                this.page = SceneAbout16thConceptPage3.instance();
                this.removeLabel(this.sixteenthmdottitle1);
                this.removeLabel(this.sixteenthmdottitle2);
                this.showLabel(this.sixteenthmdottitle3);
                break;
        }
        if (this.tb1 === null) {
        }
        else {
            this.tb1.setCheck(pageIndex == 1);
            this.tb2.setCheck(pageIndex == 2);
            this.tb3.setCheck(pageIndex == 3);
        }
        this.pageContainer.addChild(this.page);
        this.page.startScene();
    };
    SceneAbout16thConcenpt.prototype.startScene = function () {
        this.setPage(1);
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 1000, createjs.Ease.linear);
        this.addEventListener("tick", this.drawing);
    };
    SceneAbout16thConcenpt.prototype.stopScene = function () {
        this.removeEventListener("tick", this.drawing);
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear).call(handleComplete);
        function handleComplete() {
            this.removeLabel(this.sixteenthmdottitle1);
            this.removeLabel(this.sixteenthmdottitle2);
            this.removeLabel(this.sixteenthmdottitle3);
        }
        ;
    };
    SceneAbout16thConcenpt.prototype.drawing = function (event) {
        event.target.drawLines();
    };
    SceneAbout16thConcenpt.prototype.drawLines = function () {
        this.count++;
        this.updateBubble();
    };
    SceneAbout16thConcenpt._instance = null;
    return SceneAbout16thConcenpt;
})(Scene);
//# sourceMappingURL=SceneAbout16thConcept.js.map