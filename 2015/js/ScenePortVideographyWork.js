/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ScenePortVideographyWork = (function (_super) {
    __extends(ScenePortVideographyWork, _super);
    function ScenePortVideographyWork() {
        _super.call(this);
        this.max_count = 13;
        this.lVideoDOMElement = null;
        this.lVideo = null;
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
        this.img1 = null;
        this.img2 = null;
        this.img3 = null;
        this.img4 = null;
        if (ScenePortVideographyWork._instance) {
            throw new Error("Error: Config instead of new.");
        }
        ScenePortVideographyWork._instance = this;
        this.init();
    }
    ScenePortVideographyWork.instance = function () {
        if (ScenePortVideographyWork._instance === null) {
            ScenePortVideographyWork._instance = new ScenePortVideographyWork();
        }
        return ScenePortVideographyWork._instance;
    };
    ScenePortVideographyWork.prototype.prev = function () {
        this.setIndex(this.index - 1);
    };
    ScenePortVideographyWork.prototype.next = function () {
        this.setIndex(this.index + 1);
    };
    ScenePortVideographyWork.prototype.setIndex = function (idx) {
        if (idx < 1) {
            idx = this.max_count;
        }
        if (idx > this.max_count) {
            idx = 1;
        }
        this.index = idx;
        this.stopVideo();
        if (this.content1 === null) {
        }
        else {
            this.removeLabel(this.content1);
            this.removeLabel(this.content2);
            this.removeLabel(this.content3);
            this.removeLabel(this.content4);
            this.removeLabel(this.content5);
        }
        this.content1 = this.getLabel("video" + this.index + "_1");
        this.content1.x = 460;
        this.content1.y = 169;
        this.addChild(this.content1);
        this.content2 = this.getLabel("video" + this.index + "_2");
        this.content2.x = 465;
        this.content2.y = 787;
        this.addChild(this.content2);
        this.content3 = this.getLabel("video" + this.index + "_3");
        this.content3.x = 465;
        this.content3.y = 917;
        this.addChild(this.content3);
        this.content4 = this.getLabel("video" + this.index + "_4");
        this.content4.x = 702;
        this.content4.y = 750;
        this.addChild(this.content4);
        this.content5 = this.getLabel("video" + this.index + "_5");
        this.content5.x = 1106;
        this.content5.y = 750;
        this.addChild(this.content5);
        this.showLabel(this.content1);
        this.showLabel(this.content2);
        this.showLabel(this.content3);
        this.showLabel(this.content4);
        this.showLabel(this.content5);
        //
        //this.lVideo = document.createElement('video');
        //this.lVideo.src = "./assets/work_page/videography/" + this.index + "/video.mp4";
        //this.lVideo.hidden = false;
        //this.lVideo.width = 810;
        //this.lVideo.height = 456;
        //this.lVideo.volume = 0.6;
        //this.lVideo.controls = true;
        //this.lVideo.autoplay = true;
        //var rootGroup = document.getElementById('videocontainer');
        //rootGroup.appendChild(this.lVideo);
        //var lVideoDOMElement: createjs.DOMElement = new createjs.DOMElement(this.lVideo);
        //lVideoDOMElement.x = 466;
        //lVideoDOMElement.y = 241;
        //this.addChild(lVideoDOMElement);
        if (this.bigimg === null) {
        }
        else {
            this.removeChild(this.bigimgButton);
            this.removeChild(this.bigimg);
            this.removeChild(this.img1);
            this.removeChild(this.img2);
            this.removeChild(this.img3);
            this.removeChild(this.img4);
            this.removeChild(this.icon_play);
        }
        this.bigimg = new createjs.Bitmap("assets/16th_web/video/medium/" + this.index + "_1.jpg");
        this.bigimg.x = 466;
        this.bigimg.y = 240;
        this.addChild(this.bigimg);
        this.icon_play = new createjs.Bitmap(this.getTex("work_button_play"));
        this.icon_play.x = 466 + 810 / 2;
        this.icon_play.y = 240 + 456 / 2;
        this.icon_play.regX = 47;
        this.icon_play.regY = 47;
        this.icon_play.visible = false;
        if (this.getlayout() == 1) {
            this.bigimgButton = new DarkButton(456, 808);
        }
        else {
            this.bigimgButton = new DarkButton(810, 456);
        }
        this.bigimgButton.setPos(466, 240);
        this.addChild(this.bigimgButton);
        this.bigimgButton.on("mouseover", function () {
            ScenePortVideographyWork.instance().bigimgButton.setVisible();
            ScenePortVideographyWork.instance().icon_play.visible = true;
            ScenePortVideographyWork.instance().icon_play.scaleX = 0;
            ScenePortVideographyWork.instance().icon_play.scaleY = 0;
            createjs.Tween.get(ScenePortVideographyWork.instance().icon_play, { loop: false }).to({ scaleX: 1, scaleY: 1 }, 500, createjs.Ease.circOut);
        });
        this.bigimgButton.on("mouseout", function () {
            ScenePortVideographyWork.instance().bigimgButton.setInvisible();
            ScenePortVideographyWork.instance().icon_play.visible = false;
            ScenePortVideographyWork.instance().icon_play.scaleX = 1;
            ScenePortVideographyWork.instance().icon_play.scaleY = 1;
            createjs.Tween.get(ScenePortVideographyWork.instance().icon_play, { loop: false }).to({ scaleX: 0, scaleY: 0 }, 500, createjs.Ease.circOut);
        });
        this.bigimgButton.on("click", function () {
            ScenePortVideographyWork.instance().bigimgButton.setInvisible();
            ScenePortVideographyWork.instance().icon_play.visible = false;
            ScenePortVideographyWork.instance().playVideo();
            SceneManager.instance().bgmOff();
        });
        this.icon_play.mouseEnabled = false;
        this.addChild(this.icon_play);
        this.img1 = new createjs.Bitmap("assets/16th_web/video/small/" + this.index + "/" + this.index + "_1.jpg");
        this.img1.x = 1285;
        this.img1.y = 240;
        this.img1.on("mouseover", function () {
            ScenePortVideographyWork.instance().setImgIndex(1);
        });
        this.addChild(this.img1);
        this.img2 = new createjs.Bitmap("assets/16th_web/video/small/" + this.index + "/" + this.index + "_2.jpg");
        this.img2.x = 1285;
        this.img2.y = 357;
        this.img2.on("mouseover", function () {
            ScenePortVideographyWork.instance().setImgIndex(2);
        });
        this.addChild(this.img2);
        this.img3 = new createjs.Bitmap("assets/16th_web/video/small/" + this.index + "/" + this.index + "_3.jpg");
        this.img3.x = 1285;
        this.img3.y = 472;
        this.img3.on("mouseover", function () {
            ScenePortVideographyWork.instance().setImgIndex(3);
        });
        this.addChild(this.img3);
        this.img4 = new createjs.Bitmap("assets/16th_web/video/small/" + this.index + "/" + this.index + "_4.jpg");
        this.img4.x = 1285;
        this.img4.y = 587;
        this.img4.on("mouseover", function () {
            ScenePortVideographyWork.instance().setImgIndex(4);
        });
        this.addChild(this.img4);
        this.setType();
    };
    ScenePortVideographyWork.prototype.setImgIndex = function (idx) {
        if (this.lVideo === null) {
        }
        else {
            if (this.lVideo.paused == false) {
                return;
            }
        }
        this.stopVideo();
        this.removeChild(this.bigimg);
        this.bigimg = new createjs.Bitmap("assets/16th_web/video/medium/" + this.index + "_" + idx + ".jpg");
        this.bigimg.x = 466;
        this.bigimg.y = 240;
        this.addChildAt(this.bigimg, 1);
        this.setType();
    };
    ScenePortVideographyWork.prototype.getlayout = function () {
        switch (this.index) {
            case 3:
                return 1;
            default:
                return 0;
        }
    };
    ScenePortVideographyWork.prototype.setType = function () {
        switch (this.getlayout()) {
            case 1:
                this.label1.x = 1121;
                this.label1.y = 170;
                this.label2.x = 1121;
                this.label2.y = 442;
                this.label3.x = 1121;
                this.label3.y = 571;
                this.content1.x = 1121;
                this.content1.y = 228;
                this.content2.x = 1121;
                this.content2.y = 479;
                this.content3.x = 1121;
                this.content3.y = 602;
                this.content4.x = 1121;
                this.content4.y = 700;
                this.content5.x = 1121;
                this.content5.y = 900;
                // 428, 756
                this.bigimg.x = 425;
                this.bigimg.y = 168;
                this.bigimgButton.setPos(425, 168);
                // 138 242
                this.img1.x = 900;
                this.img1.y = 168;
                this.img2.x = 900;
                this.img2.y = 168 + 14 + 190;
                this.img3.x = 900;
                this.img3.y = 168 + (14 + 190) * 2;
                this.img4.x = 900;
                this.img4.y = 168 + (14 + 190) * 3;
                this.icon_play.x = 425 + (456) / 2;
                this.icon_play.y = 168 + (808) / 2;
                this.setLoadingDot();
                break;
            default:
                this.icon_play.x = 466 + (810) / 2;
                this.icon_play.y = 240 + (456) / 2;
                this.setLoadingDot();
                this.label1.x = 468;
                this.label1.y = 118;
                this.label2.x = 465;
                this.label2.y = 752;
                this.label3.x = 465;
                this.label3.y = 880;
                this.content1.x = 465;
                this.content1.y = 159;
                this.content2.x = 465;
                this.content2.y = 787;
                this.content3.x = 465;
                this.content3.y = 917;
                this.content4.x = 702;
                this.content4.y = 750;
                this.content5.x = 1106;
                this.content5.y = 750;
                this.bigimg.x = 466;
                this.bigimg.y = 240;
                this.bigimgButton.setPos(466, 240);
                this.img1.x = 1285;
                this.img1.y = 240;
                this.img2.x = 1285;
                this.img2.y = 357;
                this.img3.x = 1285;
                this.img3.y = 472;
                this.img4.x = 1285;
                this.img4.y = 587;
                break;
        }
    };
    ScenePortVideographyWork.prototype.playVideo = function () {
        ////////////////
        if (this.lVideo === null) {
        }
        else {
            this.stopVideo();
        }
        this.lVideo = document.createElement('video');
        this.lVideo.hidden = true;
        setTimeout(showVideo, 1000);
        function showVideo() {
            if (ScenePortVideographyWork.instance().lVideo === null) {
            }
            else {
                ScenePortVideographyWork.instance().lVideo.hidden = false;
            }
        }
        this.lVideo.src = "assets/16th_web/video/mp4/" + this.index + ".mp4";
        this.lVideo.poster = "assets/16th_web/video/medium/" + this.index + "_1.jpg";
        this.lVideo.preload = "metadata";
        if (this.getlayout() == 1) {
            this.lVideo.width = 456;
            this.lVideo.height = 808;
        }
        else {
            this.lVideo.width = 810;
            this.lVideo.height = 456;
        }
        this.lVideo.volume = 0.6;
        this.lVideo.controls = true;
        this.lVideo.autoplay = true;
        var rootGroup = document.getElementById('videocontainer');
        rootGroup.appendChild(this.lVideo);
        this.lVideoDOMElement = new createjs.DOMElement(this.lVideo);
        if (this.getlayout() == 1) {
            this.lVideoDOMElement.x = 425;
            this.lVideoDOMElement.y = 168;
        }
        else {
            this.lVideoDOMElement.x = 466;
            this.lVideoDOMElement.y = 240;
        }
        this.addChild(this.lVideoDOMElement);
    };
    ScenePortVideographyWork.prototype.fullscreenOn = function () {
        if (this.lVideoDOMElement === null)
            return;
        this.lVideoDOMElement.x = 0;
        this.lVideoDOMElement.y = 0;
        this.removeChild(this.lVideoDOMElement);
        this.stage.addChild(this.lVideoDOMElement);
    };
    ScenePortVideographyWork.prototype.fullscreenOff = function () {
        if (this.lVideoDOMElement === null)
            return;
        if (this.getlayout() == 1) {
            this.lVideoDOMElement.x = 425;
            this.lVideoDOMElement.y = 168;
        }
        else {
            this.lVideoDOMElement.x = 466;
            this.lVideoDOMElement.y = 240;
        }
        this.stage.removeChild(this.lVideoDOMElement);
        this.addChild(this.lVideoDOMElement);
    };
    ScenePortVideographyWork.prototype.stopVideo = function () {
        SceneManager.instance().resumeBGM();
        if (this.lVideo === null)
            return;
        this.lVideo.pause();
        var rootGroup = document.getElementById('videocontainer');
        rootGroup.removeChild(this.lVideo);
        this.removeChild(this.lVideoDOMElement);
        this.lVideoDOMElement = null;
        this.lVideo = null;
    };
    ScenePortVideographyWork.prototype.init = function () {
        //this.initBubble("#F00");
        var prev_button = new Button(this.getTex("btm_1"), 80, 80);
        prev_button.x = 222;
        prev_button.y = 448;
        prev_button.on("click", function () {
            ScenePortVideographyWork.instance().prev();
        });
        this.addChild(prev_button);
        var next_button = new Button(this.getTex("btn_2"), 80, 80);
        next_button.x = 1672;
        next_button.y = 448;
        next_button.on("click", function () {
            ScenePortVideographyWork.instance().next();
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
        //this.label1 = this.getLabel('videography_title');
        //this.label1.x = 97;
        //this.label1.y = 65;
        //this.addChild(this.label1);
        this.label1 = new createjs.Bitmap(this.getTex("videography_subject"));
        this.label1.x = 465;
        this.label1.y = 114;
        this.addChild(this.label1);
        this.label2 = this.getLabel('designer');
        this.label2.x = 465;
        this.label2.y = 752;
        this.addChild(this.label2);
        this.label3 = this.getLabel('category');
        this.label3.x = 465;
        this.label3.y = 880;
        this.addChild(this.label3);
    };
    ScenePortVideographyWork.prototype.startScene = function () {
        this.closePopup();
        this.count = 0;
        this.alpha = 1;
        //createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        //this.addEventListener("tick", this.drawing);
        //this.showLabel(this.label1);
        this.showLabel(this.label2);
        this.showLabel(this.label3);
        //this.setIndex(this.index);
        ///this.addEventListener("tick", this.drawing);
    };
    ScenePortVideographyWork.prototype.stopScene = function () {
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
        this.stopVideo();
        //this.removeEventListener("tick", this.drawing);
    };
    ScenePortVideographyWork.prototype.setLoadingDot = function () {
        this.work_loadingdot.x = this.icon_play.x;
        this.work_loadingdot.y = this.icon_play.y;
    };
    ScenePortVideographyWork._instance = null;
    return ScenePortVideographyWork;
})(ScenePortWork);
//# sourceMappingURL=ScenePortVideographyWork.js.map