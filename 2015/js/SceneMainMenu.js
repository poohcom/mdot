/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// 메인 메뉴
var SceneMainMenu = (function (_super) {
    __extends(SceneMainMenu, _super);
    function SceneMainMenu() {
        _super.call(this);
        this.updateR = false;
        this.drawCount = 0;
        if (SceneMainMenu._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneMainMenu._instance = this;
        this.init();
    }
    SceneMainMenu.instance = function () {
        if (SceneMainMenu._instance === null) {
            SceneMainMenu._instance = new SceneMainMenu();
        }
        return SceneMainMenu._instance;
    };
    SceneMainMenu.prototype.setCenterText = function (index) {
        var targetRad = 0;
        switch (index) {
            case 0:
                //this.center_text.image = this.getTex("menu_portfolio");
                this.center_text.image = null;
                this.center_text.regX = 246 / 2;
                this.center_text.regY = 43 / 2;
                this.line.min_r = 334;
                this.line.max_r = 334;
                break;
            case 1:
                this.center_text.image = this.getTex("menu_interactive_design");
                this.center_text.regX = 247 / 2;
                this.center_text.regY = 28 / 2;
                targetRad = 330;
                break;
            case 2:
                this.center_text.image = this.getTex("menu_videography");
                this.center_text.regX = 165 / 2;
                this.center_text.regY = 28 / 2;
                targetRad = 270;
                break;
            case 3:
                this.center_text.image = this.getTex("menu_poster");
                this.center_text.regX = 93 / 2;
                this.center_text.regY = 28 / 2;
                targetRad = 210;
                break;
            case 4:
                this.center_text.image = this.getTex("menu_contents_design");
                this.center_text.regX = 220 / 2;
                this.center_text.regY = 28 / 2;
                targetRad = 120;
                break;
            case 5:
                this.center_text.image = this.getTex("menu_animation");
                this.center_text.regX = 135 / 2;
                this.center_text.regY = 28 / 2;
                targetRad = 45;
                break;
        }
        this.center_text.alpha = 0;
        createjs.Tween.get(this.center_text, { loop: false }).to({ alpha: 1 }, 1000, createjs.Ease.circOut);
        if (this.line.visible == false) {
            this.line.visible = true;
            this.line.rad = targetRad;
            this.line.max_r = 334;
            createjs.Tween.get(this.line, { loop: false }).to({ min_r: 215 }, 1000, createjs.Ease.circOut);
        }
        else {
            this.line.min_r = 215;
            this.line.max_r = 334;
            createjs.Tween.removeTweens(this.line);
            if ((targetRad - this.line.rad) < 0) {
                targetRad = targetRad + 360;
            }
            if ((targetRad - this.line.rad) > 180) {
                this.line.rad = this.line.rad + 360;
            }
            createjs.Tween.get(this.line, { loop: false }).to({ rad: targetRad }, 1000, createjs.Ease.circOut).call(function () {
                this.rad = this.rad % 360;
            });
        }
    };
    //public menu_icon: TitleCircle;
    //public main_portfolio_title: createjs.Bitmap;
    SceneMainMenu.prototype.init = function () {
        this.initGraphic();
        //this.menu_icon = new TitleCircle(this.getTex("aboutmediadesign_titledot"), 19);
        //this.menu_icon.x = 129;
        //this.menu_icon.y = 117;
        //this.addChild(this.menu_icon);
        //this.main_portfolio_title = new createjs.Bitmap(this.getTex("main_portfolio_title"));
        //this.main_portfolio_title.x = 195;
        //this.main_portfolio_title.y = 96;
        //this.addChild(this.main_portfolio_title);
        this.line = new CircleLine();
        this.line.x = 1920 / 2;
        this.line.y = 1080 / 2;
        this.line.visible = false;
        this.addChild(this.line);
        //this.circle_1 = new createjs.Bitmap(this.getTex("circle_1"));
        //this.circle_1.x = 1920 / 2;
        //this.circle_1.y = 1080 / 2;
        //this.circle_1.regX = 125/2;
        //this.circle_1.regY = 123 / 2;
        //this.circle_1.visible = false;
        //this.addChild(this.circle_1);
        this.circle_2 = new createjs.Bitmap(this.getTex("circle_2"));
        this.circle_2.x = 1920 / 2;
        this.circle_2.y = 1080 / 2;
        this.circle_2.regX = 462 / 2;
        this.circle_2.regY = 453 / 2;
        this.addChild(this.circle_2);
        this.circle_3 = new createjs.Bitmap(this.getTex("circle_3"));
        this.circle_3.x = 1920 / 2;
        this.circle_3.y = 1080 / 2;
        this.circle_3.regX = 458 / 2;
        this.circle_3.regY = 453 / 2;
        this.addChild(this.circle_3);
        this.circle_4 = new createjs.Bitmap(this.getTex("circle_4"));
        this.circle_4.x = 1920 / 2;
        this.circle_4.y = 1080 / 2;
        this.circle_4.regX = 351;
        this.circle_4.regY = 348;
        this.addChild(this.circle_4);
        this.circle_4_mask = new CircleMask();
        this.circle_4_mask.x = 1920 / 2;
        this.circle_4_mask.y = 1080 / 2;
        this.circle_4_mask.r = 400;
        this.circle_4.mask = this.circle_4_mask;
        this.circle_5 = new createjs.Bitmap(this.getTex("circle_5"));
        this.circle_5.x = 1920 / 2;
        this.circle_5.y = 1080 / 2;
        this.circle_5.regX = 726 / 2;
        this.circle_5.regY = 726 / 2;
        this.addChild(this.circle_5);
        this.menu_portfolio = new createjs.Bitmap(this.getTex("menu_portfolio"));
        this.menu_portfolio.x = 1920 / 2;
        this.menu_portfolio.y = 1080 / 2 - 18;
        this.menu_portfolio.regX = 215 / 2;
        this.menu_portfolio.regY = 47 / 2;
        this.addChild(this.menu_portfolio);
        //this.center_text = new createjs.Bitmap(this.getTex("menu_portfolio"));
        this.center_text = new createjs.Bitmap(null);
        this.center_text.x = 1920 / 2;
        this.center_text.y = 1080 / 2 + 28;
        this.addChild(this.center_text);
        this.aboutGroup = new createjs.Container;
        this.portfolioGroup = new createjs.Container;
        this.addChild(this.aboutGroup);
        this.addChild(this.portfolioGroup);
        this.interactive_button = new CircleButton(this.getTex("circle_button"), this.getTex("menu_mouse_over"), 12, 41);
        this.portfolioGroup.addChild(this.interactive_button);
        this.interactive_button.on("click", function (event) {
            createjs.Sound.play("portfolio_menu_open", createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 0.5);
            SceneManager.instance().nextSceneIndex(20);
        });
        this.interactive_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            SceneMainMenu.instance().setCenterText(1);
        });
        this.animation_button = new CircleButton(this.getTex("circle_button"), this.getTex("menu_mouse_over"), 12, 41);
        this.portfolioGroup.addChild(this.animation_button);
        this.animation_button.on("click", function (event) {
            createjs.Sound.play("portfolio_menu_open", createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 0.5);
            SceneManager.instance().nextSceneIndex(21);
        });
        this.animation_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            SceneMainMenu.instance().setCenterText(5);
        });
        this.videography_button = new CircleButton(this.getTex("circle_button"), this.getTex("menu_mouse_over"), 12, 41);
        this.portfolioGroup.addChild(this.videography_button);
        this.videography_button.on("click", function (event) {
            createjs.Sound.play("portfolio_menu_open", createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 0.5);
            SceneManager.instance().nextSceneIndex(22);
        });
        this.videography_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            SceneMainMenu.instance().setCenterText(2);
        });
        this.contents_design_button = new CircleButton(this.getTex("circle_button"), this.getTex("menu_mouse_over"), 12, 41);
        this.portfolioGroup.addChild(this.contents_design_button);
        this.contents_design_button.on("click", function (event) {
            createjs.Sound.play("portfolio_menu_open", createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 0.5);
            SceneManager.instance().nextSceneIndex(23);
        });
        this.contents_design_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            SceneMainMenu.instance().setCenterText(4);
        });
        this.poster_button = new CircleButton(this.getTex("circle_button"), this.getTex("menu_mouse_over"), 12, 41);
        this.portfolioGroup.addChild(this.poster_button);
        this.poster_button.on("click", function (event) {
            createjs.Sound.play("portfolio_menu_open", createjs.Sound.INTERRUPT_ANY, 0, 0, 0, 0.5);
            SceneManager.instance().nextSceneIndex(24);
        });
        this.poster_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            SceneMainMenu.instance().setCenterText(3);
        });
        this.interactive_button.x = 1920 / 2;
        this.interactive_button.y = 1080 / 2;
        this.animation_button.x = 1920 / 2;
        this.animation_button.y = 1080 / 2;
        this.videography_button.x = 1920 / 2;
        this.videography_button.y = 1080 / 2;
        this.contents_design_button.x = 1920 / 2;
        this.contents_design_button.y = 1080 / 2;
        this.poster_button.x = 1920 / 2;
        this.poster_button.y = 1080 / 2;
        this.interactive_button.ts = 0.85;
        this.animation_button.ts = 0.85;
        this.videography_button.ts = 0.85;
        this.contents_design_button.ts = 0.85;
        this.poster_button.ts = 0.85;
        this.main_portfolio_copyrights = new createjs.Bitmap(this.getTex("main_portfolio_copyrights"));
        this.main_portfolio_copyrights.x = 695;
        this.main_portfolio_copyrights.y = 981;
        this.portfolioGroup.addChild(this.main_portfolio_copyrights);
    };
    SceneMainMenu.prototype.setMode = function (mode) {
        switch (mode) {
            case 0:
                this.visible = true;
                this.portfolioGroup.visible = true;
                break;
            case 1:
                this.visible = false;
                break;
            case 2:
                this.visible = true;
                //createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 1000, createjs.Ease.linear).call(function () { this.visible = false;});
                createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: -1080 * 2.5 - 50, x: -960 - 50 }, 1000, createjs.Ease.circOut);
                this.portfolioGroup.visible = false;
                //this.circle_1.visible = false;
                this.circle_2.visible = true;
                this.circle_3.visible = false;
                this.circle_4.visible = true;
                this.circle_4_mask.drawArc(0, 2 * Math.PI);
                this.circle_5.visible = false;
                this.center_text.visible = false;
                this.line.visible = false;
                break;
            case 3:
                break;
        }
        MenuBar.instance().setMode(mode);
    };
    SceneMainMenu.prototype.setCirclePosition = function (button, rad, r) {
        button.x = 1920 / 2 + Math.sin(Math.PI * rad / 180) * r;
        button.y = 1080 / 2 - Math.cos(Math.PI * rad / 180) * r;
    };
    SceneMainMenu.prototype.initGraphic = function () {
        this.shape = new createjs.Shape();
        this.g = new createjs.Graphics();
        this.shape.graphics = this.g;
        this.initBubble("#FFF");
    };
    SceneMainMenu.prototype.startScene = function () {
        this.count = 0;
        this.drawCount = 0;
        this.updateR = false;
        this.line.min_r = 334;
        this.line.max_r = 334;
        this.line.rad = 0;
        this.line.visible = false;
        this.addEventListener("tick", this.drawing);
        for (var i = 0; i < this.circleList.length; i++) {
            this.addChild(this.circleList[i]);
        }
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        //this.portfolioGroup.visible = false;
        //this.portfolioGroup.alpha = 0;
        this.center_text.visible = true;
        this.center_text.alpha = 0;
        //this.center_text.image = this.getTex("menu_portfolio");
        this.center_text.image = null;
        this.center_text.regX = 246 / 2;
        this.center_text.regY = 43 / 2;
        //this.circle_1.scaleX = 0;
        //this.circle_1.scaleY = 0;
        this.circle_2.scaleX = 0;
        this.circle_2.scaleY = 0;
        this.circle_3.alpha = 0;
        this.circle_3.scaleX = 1;
        this.circle_3.scaleY = 1;
        this.circle_3.visible = false;
        this.circle_5.alpha = 0;
        this.circle_5.scaleX = 0.93;
        this.circle_5.scaleY = 0.93;
        this.circle_5.visible = false;
        this.interactive_button.visible = false;
        this.animation_button.visible = false;
        this.videography_button.visible = false;
        this.contents_design_button.visible = false;
        this.poster_button.visible = false;
        createjs.Tween.get(this.circle_2, { loop: false }).wait(500).to({ scaleX: 1, scaleY: 1 }, 1000, createjs.Ease.linear).call(function () {
            SceneMainMenu.instance().circle_3.visible = true;
            createjs.Tween.get(SceneMainMenu.instance().circle_3, { loop: true }).to({ scaleX: 1.05, scaleY: 1.05, alpha: 1 }, 500, createjs.Ease.linear).to({ scaleX: 1.1, scaleY: 1.1, alpha: 0 }, 500, createjs.Ease.linear);
            SceneMainMenu.instance().circle_5.visible = true;
            createjs.Tween.get(SceneMainMenu.instance().circle_5, { loop: true }).to({ scaleX: 0.97, scaleY: 0.97, alpha: 1 }, 500, createjs.Ease.linear).to({ scaleX: 1, scaleY: 1, alpha: 0 }, 500, createjs.Ease.linear);
            //createjs.Tween.get(SceneMainMenu.instance().circle_1, { loop: false }).to({ scaleX: 1, scaleY: 1 }, 1000, createjs.Ease.linear);
            createjs.Tween.get(SceneMainMenu.instance().center_text, { loop: false }).wait(1000).to({ alpha: 1 }, 1000, createjs.Ease.linear);
        });
        callButton1();
        function callButton1() {
            SceneMainMenu.instance().interactive_button.visible = true;
            SceneMainMenu.instance().animation_button.visible = true;
            SceneMainMenu.instance().interactive_button.rad = -30;
            SceneMainMenu.instance().animation_button.rad = -30;
            createjs.Tween.get(SceneMainMenu.instance().animation_button, { loop: false }).wait(500).to({ rad: 45 }, 500, createjs.Ease.linear).call(callButton2);
        }
        function callButton2() {
            SceneMainMenu.instance().contents_design_button.visible = true;
            SceneMainMenu.instance().contents_design_button.rad = -315;
            createjs.Tween.get(SceneMainMenu.instance().contents_design_button, { loop: false }).to({ rad: -240 }, 500, createjs.Ease.linear).call(callButton3);
        }
        function callButton3() {
            SceneMainMenu.instance().poster_button.visible = true;
            SceneMainMenu.instance().poster_button.rad = -240;
            createjs.Tween.get(SceneMainMenu.instance().poster_button, { loop: false }).to({ rad: -150 }, 500, createjs.Ease.linear).call(callButton4);
        }
        function callButton4() {
            SceneMainMenu.instance().videography_button.visible = true;
            SceneMainMenu.instance().videography_button.rad = -150;
            createjs.Tween.get(SceneMainMenu.instance().videography_button, { loop: false }).to({ rad: -90 }, 700, createjs.Ease.circOut).call(function () {
                SceneMainMenu.instance().updateR = true;
            });
        }
        //function callButton1() {
        //    SceneMainMenu.instance().interactive_button.visible = true;
        //    SceneMainMenu.instance().videography_button.visible = true;
        //    SceneMainMenu.instance().interactive_button.rad = -30;
        //    SceneMainMenu.instance().videography_button.rad = -30;
        //    createjs.Tween.get(SceneMainMenu.instance().videography_button, { loop: false }).to({ rad: -90 }, 500, createjs.Ease.linear).call(callButton2);
        //}
        //function callButton2() {
        //    SceneMainMenu.instance().poster_button.visible = true;
        //    SceneMainMenu.instance().poster_button.rad = -90;
        //    createjs.Tween.get(SceneMainMenu.instance().poster_button, { loop: false }).to({ rad: -150 }, 500, createjs.Ease.linear).call(callButton3);
        //}
        //function callButton3() {
        //    SceneMainMenu.instance().contents_design_button.visible = true;
        //    SceneMainMenu.instance().contents_design_button.rad = -150;
        //    createjs.Tween.get(SceneMainMenu.instance().contents_design_button, { loop: false }).to({ rad: -240 }, 500, createjs.Ease.linear).call(callButton4);
        //}
        //function callButton4() {
        //    SceneMainMenu.instance().animation_button.visible = true;
        //    SceneMainMenu.instance().animation_button.rad = -240;
        //    createjs.Tween.get(SceneMainMenu.instance().animation_button, { loop: false }).to({ rad: -315 }, 500, createjs.Ease.linear).call(function () {
        //        SceneMainMenu.instance().updateR = true;
        //    });
        //}
    };
    SceneMainMenu.prototype.drawing = function (event) {
        SceneMainMenu.instance().drawLines();
    };
    SceneMainMenu.prototype.stopScene = function () {
        //createjs.Tween.removeTweens(this.circle_1);
        createjs.Tween.removeTweens(this.circle_2);
        createjs.Tween.removeTweens(this.circle_3);
        createjs.Tween.removeTweens(this.circle_3);
        createjs.Tween.removeTweens(this.circle_4_mask);
        createjs.Tween.removeTweens(this.circle_5);
        createjs.Tween.removeTweens(this.line);
        createjs.Tween.removeTweens(this.center_text);
        createjs.Tween.removeTweens(this.contents_design_button);
        createjs.Tween.removeTweens(this.animation_button);
        createjs.Tween.removeTweens(this.videography_button);
        createjs.Tween.removeTweens(this.interactive_button);
        createjs.Tween.removeTweens(this.poster_button);
        //createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
        for (var i = 0; i < this.circleList.length; i++) {
            this.removeChild(this.circleList[i]);
        }
    };
    SceneMainMenu.prototype.drawLines = function () {
        this.count++;
        this.updateBubble();
        var r = 336;
        if (this.updateR == true) {
            this.drawCount++;
            r = r + (-Math.cos(Math.PI * 2 * (this.drawCount % 30) / 30) / 2 + 0.5) * 5;
        }
        var target = Math.min(240, -120 + this.count * 8);
        this.circle_4_mask.drawArc(-120 * Math.PI / 180, target * Math.PI / 180);
        this.setCirclePosition(this.interactive_button, this.interactive_button.rad, r);
        this.setCirclePosition(this.animation_button, this.animation_button.rad, r);
        this.setCirclePosition(this.videography_button, this.videography_button.rad, r);
        this.setCirclePosition(this.contents_design_button, this.contents_design_button.rad, r);
        this.setCirclePosition(this.poster_button, this.poster_button.rad, r);
        this.line.drawLineRad();
        //this.menu_icon.drawCircle();
    };
    SceneMainMenu._instance = null;
    return SceneMainMenu;
})(Scene);
//# sourceMappingURL=SceneMainMenu.js.map