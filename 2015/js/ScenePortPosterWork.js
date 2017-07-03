/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ScenePortPosterWork = (function (_super) {
    __extends(ScenePortPosterWork, _super);
    function ScenePortPosterWork() {
        _super.call(this);
        this.max_count = 54;
        this.label1 = null;
        this.label2 = null;
        this.label3 = null;
        this.content1 = null;
        this.content2 = null;
        this.content3 = null;
        this.content4 = null;
        this.content5 = null;
        this.bigimg = null;
        this.icon_play = null;
        this.bigimgButton = null;
        if (ScenePortPosterWork._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortPosterWork._instance = this;
        this.init();
    }
    ScenePortPosterWork.instance = function () {
        if (ScenePortPosterWork._instance === null) {
            ScenePortPosterWork._instance = new ScenePortPosterWork();
        }
        return ScenePortPosterWork._instance;
    };
    ScenePortPosterWork.prototype.prev = function () {
        this.setIndex(this.index - 1);
    };
    ScenePortPosterWork.prototype.next = function () {
        this.setIndex(this.index + 1);
    };
    ScenePortPosterWork.prototype.setIndex = function (idx) {
        if (idx < 1) {
            idx = this.max_count;
        }
        if (idx > this.max_count) {
            idx = 1;
        }
        this.index = idx;
        if (this.content1 === null) {
        }
        else {
            this.removeLabel(this.content1);
            this.removeLabel(this.content2);
            this.removeLabel(this.content3);
            this.removeLabel(this.content4);
            this.removeLabel(this.content5);
            this.removeChild(this.icon_play);
        }
        this.content1 = this.getLabel("poster" + this.index + "_1");
        this.content1.x = 460;
        this.content1.y = 169;
        this.addChild(this.content1);
        this.content2 = this.getLabel("poster" + this.index + "_2");
        this.content2.x = 465;
        this.content2.y = 787;
        this.addChild(this.content2);
        this.content3 = this.getLabel("poster" + this.index + "_3");
        this.content3.x = 465;
        this.content3.y = 917;
        this.addChild(this.content3);
        this.content4 = this.getLabel("poster" + this.index + "_4");
        this.content4.x = 702;
        this.content4.y = 750;
        this.addChild(this.content4);
        this.content5 = this.getLabel("poster" + this.index + "_5");
        this.content5.x = 1106;
        this.content5.y = 750;
        this.addChild(this.content5);
        this.showLabel(this.content1);
        this.showLabel(this.content2);
        this.showLabel(this.content3);
        this.showLabel(this.content4);
        this.showLabel(this.content5);
        //
        if (this.bigimg === null) {
        }
        else {
            this.removeChild(this.bigimgButton);
            this.removeChild(this.bigimg);
            this.removeChild(this.icon_play);
        }
        // 582 826
        this.bigimg = new createjs.Bitmap("assets/16th_web/poster/medium/" + this.index + "_1.jpg");
        this.bigimg.x = 466;
        this.bigimg.y = 240;
        this.addChild(this.bigimg);
        this.icon_play = new createjs.Bitmap(this.getTex("work_button_fullscreen"));
        this.icon_play.x = 466 + 810 / 2;
        this.icon_play.y = 240 + 456 / 2;
        this.icon_play.regX = 47;
        this.icon_play.regY = 47;
        this.icon_play.visible = false;
        this.bigimgButton = new DarkButton(584, 826);
        this.bigimgButton.setPos(466, 240);
        this.bigimgButton.on("mouseover", function () {
            ScenePortPosterWork.instance().bigimgButton.setVisible();
            ScenePortPosterWork.instance().icon_play.visible = true;
            ScenePortPosterWork.instance().icon_play.scaleX = 0;
            ScenePortPosterWork.instance().icon_play.scaleY = 0;
            createjs.Tween.get(ScenePortPosterWork.instance().icon_play, { loop: false }).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.circOut);
        });
        this.bigimgButton.on("mouseout", function () {
            ScenePortPosterWork.instance().bigimgButton.setInvisible();
            ScenePortPosterWork.instance().icon_play.visible = false;
            ScenePortPosterWork.instance().icon_play.scaleX = 1;
            ScenePortPosterWork.instance().icon_play.scaleY = 1;
            createjs.Tween.get(ScenePortPosterWork.instance().icon_play, { loop: false }).to({ scaleX: 0, scaleY: 0 }, 500, createjs.Ease.circOut);
        });
        this.bigimgButton.on("click", function () {
            ScenePortPosterWork.instance().bigimgButton.setInvisible();
            ScenePortPosterWork.instance().icon_play.visible = false;
            ScenePortPosterWork.instance().popup2(ScenePortPosterWork.instance().getlayout(), "assets/16th_web/poster/big/", 1, 1);
        });
        this.addChild(this.bigimgButton);
        this.icon_play.mouseEnabled = false;
        this.addChild(this.icon_play);
        this.setType();
    };
    ScenePortPosterWork.prototype.getlayout = function () {
        switch (this.index) {
            default:
                return 2;
        }
    };
    ScenePortPosterWork.prototype.setType = function () {
        this.label1.x = 1121;
        this.label1.y = 130;
        this.label2.x = 1121;
        this.label2.y = 392;
        this.label3.x = 1121;
        this.label3.y = 521;
        this.content1.x = 1121;
        this.content1.y = 188;
        this.content2.x = 1121;
        this.content2.y = 429;
        this.content3.x = 1121;
        this.content3.y = 552;
        this.content4.x = 1121;
        this.content4.y = 650;
        this.content5.x = 1121;
        this.content5.y = 900;
        this.bigimg.x = 459;
        this.bigimg.y = 118;
        this.bigimgButton.setPos(459, 118);
        this.icon_play.x = 459 + (584) / 2;
        this.icon_play.y = 118 + (826) / 2;
        this.setLoadingDot();
    };
    ScenePortPosterWork.prototype.init = function () {
        //this.initBubble("#F00");
        var prev_button = new Button(this.getTex("btm_1"), 80, 80);
        prev_button.x = 222;
        prev_button.y = 448;
        prev_button.on("click", function () {
            ScenePortPosterWork.instance().prev();
        });
        this.addChild(prev_button);
        var next_button = new Button(this.getTex("btn_2"), 80, 80);
        next_button.x = 1672;
        next_button.y = 448;
        next_button.on("click", function () {
            ScenePortPosterWork.instance().next();
        });
        this.addChild(next_button);
        var esc_button = new Button(this.getTex("work_button_close"), 60, 60);
        esc_button.x = 1810 + 30;
        esc_button.y = 95 + 30;
        esc_button.regX = 18;
        esc_button.regY = 18;
        esc_button.on("click", function () {
            SceneManager.instance().closePort();
        });
        esc_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            if (this.rotation == 0) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 90 }, 300, createjs.Ease.circOut);
            }
        });
        esc_button.on("mouseout", function () {
            if (this.rotation == 90) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 0 }, 300, createjs.Ease.circOut);
            }
        });
        this.addChild(esc_button);
        this.label1 = new createjs.Bitmap(this.getTex("poster_subject"));
        this.label1.x = 1121;
        this.label1.y = 130;
        this.addChild(this.label1);
        this.label2 = this.getLabel('designer');
        this.label2.x = 1121;
        this.label2.y = 392;
        this.addChild(this.label2);
        this.label3 = this.getLabel('category');
        this.label3.x = 1121;
        this.label3.y = 521;
        this.addChild(this.label3);
    };
    ScenePortPosterWork.prototype.startScene = function () {
        this.closePopup();
        this.count = 0;
        this.alpha = 1;
        //createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        //this.addEventListener("tick", this.drawing);
        //this.showLabel(this.label1);
        this.showLabel(this.label2);
        this.showLabel(this.label3);
        //this.setIndex(this.index);
        //this.addEventListener("tick", this.drawing);
    };
    ScenePortPosterWork.prototype.stopScene = function () {
        this.closePopup();
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear).call(handleComplete);
        function handleComplete() {
            //this.removeLabel(this.label1);
            this.removeLabel(this.label2);
            this.removeLabel(this.label3);
            if (this.content1 === null) {
            }
            else {
                this.removeLabel(this.content1);
                this.removeLabel(this.content2);
                this.removeLabel(this.content3);
                this.removeLabel(this.content4);
                this.removeLabel(this.content5);
                this.content1 = null;
                this.content2 = null;
                this.content3 = null;
                this.content4 = null;
                this.content5 = null;
            }
        }
        ;
        //this.removeEventListener("tick", this.drawing);
    };
    //public drawing(event: Event): void {
    //    ScenePortPosterWork.instance().drawLines();
    //}
    //public drawLines(): void {
    //    this.count++;
    //    this.updateBubble();
    //}
    ScenePortPosterWork.prototype.setLoadingDot = function () {
        this.work_loadingdot.x = this.icon_play.x;
        this.work_loadingdot.y = this.icon_play.y;
    };
    ScenePortPosterWork._instance = null;
    return ScenePortPosterWork;
})(ScenePortWork);
//# sourceMappingURL=ScenePortPosterWork.js.map