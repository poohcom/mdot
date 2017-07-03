/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneAbout16thConceptPage2 = (function (_super) {
    __extends(SceneAbout16thConceptPage2, _super);
    function SceneAbout16thConceptPage2() {
        _super.call(this);
        if (SceneAbout16thConceptPage2._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thConceptPage2._instance = this;
        this.init();
    }
    SceneAbout16thConceptPage2.instance = function () {
        if (SceneAbout16thConceptPage2._instance === null) {
            SceneAbout16thConceptPage2._instance = new SceneAbout16thConceptPage2();
        }
        return SceneAbout16thConceptPage2._instance;
    };
    SceneAbout16thConceptPage2.prototype.init = function () {
        this.scroll = new createjs.Container;
        var hit = new createjs.Shape();
        hit.graphics.beginFill("#FFF").drawRect(91, 205, 1733, 714);
        this.mask = hit;
        this.addChild(this.scroll);
        this.process_line_decoration = new createjs.Bitmap(this.getTex("process_line_decoration"));
        this.process_line_decoration.x = 91;
        this.process_line_decoration.y = 425;
        this.scroll.addChild(this.process_line_decoration);
        this.process_image1 = new createjs.Bitmap(this.getTex("process_image1"));
        this.process_image1.x = 484;
        this.process_image1.y = 282;
        this.scroll.addChild(this.process_image1);
        this.process_image2 = new createjs.Bitmap(this.getTex("process_image2"));
        this.process_image2.x = 239;
        this.process_image2.y = 645;
        this.scroll.addChild(this.process_image2);
        this.process_image3 = new createjs.Bitmap(this.getTex("process_image3"));
        this.process_image3.x = 1018;
        this.process_image3.y = 647;
        this.scroll.addChild(this.process_image3);
        this.process_line2 = new createjs.Bitmap(this.getTex("process_line2"));
        this.process_line2.x = 111 + 1920;
        this.process_line2.y = 538;
        this.scroll.addChild(this.process_line2);
        this.process_image4 = new createjs.Bitmap(this.getTex("process_image4"));
        this.process_image4.x = 203 + 1920;
        this.process_image4.y = 385;
        this.scroll.addChild(this.process_image4);
        this.process_image5 = new createjs.Bitmap(this.getTex("process_image5"));
        this.process_image5.x = 991 + 1920;
        this.process_image5.y = 385;
        this.scroll.addChild(this.process_image5);
        ///////
        this.next_button = new Button(null, 48, 90);
        this.next_button.x = 1779;
        this.next_button.y = 560;
        this.next_button.on("click", function () {
            SceneAbout16thConceptPage2.instance().setPage(2);
        });
        this.addChild(this.next_button);
        this.previous_button = new Button(null, 48, 90);
        this.previous_button.x = 110;
        this.previous_button.y = 560;
        this.previous_button.visible = false;
        this.previous_button.on("click", function () {
            SceneAbout16thConceptPage2.instance().setPage(1);
        });
        this.addChild(this.previous_button);
    };
    SceneAbout16thConceptPage2.prototype.setPage = function (index) {
        switch (index) {
            case 1:
                this.previous_button.visible = false;
                this.next_button.visible = true;
                createjs.Tween.get(this.scroll, { loop: false }).to({ x: 0 }, 1000, createjs.Ease.linear);
                break;
            case 2:
                this.next_button.visible = false;
                this.previous_button.visible = true;
                createjs.Tween.get(this.scroll, { loop: false }).to({ x: -1920 }, 1000, createjs.Ease.linear);
                break;
        }
    };
    SceneAbout16thConceptPage2.prototype.startScene = function () {
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
    };
    SceneAbout16thConceptPage2.prototype.stopScene = function () {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
    };
    SceneAbout16thConceptPage2._instance = null;
    return SceneAbout16thConceptPage2;
})(Scene);
//# sourceMappingURL=SceneAbout16thConceptPage2.js.map