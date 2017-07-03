/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SceneSideMenu = (function (_super) {
    __extends(SceneSideMenu, _super);
    function SceneSideMenu() {
        _super.call(this);
        this.titleBitmap = null;
        this.title = null;
        this.mode = 0;
        this.rad = 110;
        this.sideButton = [];
        this.drawCount = 0;
        if (SceneSideMenu._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneSideMenu._instance = this;
        this.init();
    }
    SceneSideMenu.instance = function () {
        if (SceneSideMenu._instance === null) {
            SceneSideMenu._instance = new SceneSideMenu();
        }
        return SceneSideMenu._instance;
    };
    SceneSideMenu.prototype.setSceneMode = function (index) {
        if (this.title === null) {
        }
        else {
            this.removeChild(this.title);
            this.title = null;
        }
        if (this.titleBitmap === null) {
        }
        else {
            this.removeChild(this.titleBitmap);
            this.titleBitmap = null;
        }
        switch (index) {
            case 10:
                //this.titleBitmap = new createjs.Bitmap(this.getTex("aboutmediadesign_title_page1"));
                //this.titleBitmap = new createjs.Bitmap(null);
                this.setMode(0);
                this.visible = false;
                //this.startScene();
                this.stopScene();
                break;
            case 11:
                //this.title = this.getLabel("professor1");
                this.titleBitmap = new createjs.Bitmap(this.getTex("aboutmediadesign_title_page2"));
                this.setMode(0);
                this.visible = true;
                this.startScene();
                break;
            case 12:
                //this.title = this.getLabel("student1");
                this.titleBitmap = new createjs.Bitmap(this.getTex("aboutmediadesign_title_page3"));
                this.setMode(0);
                this.visible = true;
                this.startScene();
                break;
            case 13:
                //this.title = this.getLabel("sixteenthmdot1");
                this.titleBitmap = new createjs.Bitmap(this.getTex("aboutmediadesign_title_page41"));
                this.setMode(0);
                this.visible = true;
                this.startScene();
                break;
            case 14:
                //this.title = this.getLabel("sixteenthcommitte1");
                this.titleBitmap = new createjs.Bitmap(this.getTex("aboutmediadesign_title_page42"));
                this.setMode(0);
                this.visible = true;
                this.stopScene();
                this.startScene();
                break;
            case 15:
                //this.title = this.getLabel("designprocess1");
                this.titleBitmap = new createjs.Bitmap(this.getTex("aboutmediadesign_title_page4234"));
                this.setMode(0);
                this.visible = true;
                this.startScene();
                break;
            case 16:
                //this.title = this.getLabel("designprocess1");
                this.titleBitmap = new createjs.Bitmap(this.getTex("aboutmediadesign_title_page4234"));
                this.setMode(0);
                this.visible = true;
                this.startScene();
                break;
            case 17:
                //this.title = this.getLabel("designprocess1");
                this.titleBitmap = new createjs.Bitmap(this.getTex("aboutmediadesign_title_page4234"));
                this.setMode(0);
                this.visible = true;
                this.startScene();
                break;
            case 20:
                //this.title = this.getLabel("interactive_design1");
                //{ id: "mouse_over_interactive_design", src: "assets/main/circle_menu/mouse_over_interactive_design.png" },
                //{ id: "mouse_over_rotation", src: "assets/main/circle_menu/mouse_over_rotation.png" },
                //{ id: "mouse_over_contents_design", src: "assets/main/circle_menu/mouse_over_contents_design.png" },
                //{ id: "mouse_over_videography", src: "assets/main/circle_menu/mouse_over_videography.png" },
                //{ id: "mouse_over_title_animation", src: "assets/main/circle_menu/mouse_over_title_animation.png" },
                //{ id: "mouse_over_poster", src: "assets/main/circle_menu/mouse_over_poster.png" },
                //this.title = new createjs.Bitmap(this.getTex("interactive_design_title"));
                this.title = new createjs.Bitmap(this.getTex("subject_name_interactive_design"));
                this.setMode(1);
                this.startScene();
                this.sideButtonInit(0);
                break;
            case 21:
                this.title = new createjs.Bitmap(this.getTex("subject_name_animation"));
                this.setMode(1);
                this.startScene();
                this.sideButtonInit(1);
                break;
            case 22:
                //this.title = this.getLabel("videography1");
                //this.title = new createjs.Bitmap(this.getTex("videography_tiltie"));
                this.title = new createjs.Bitmap(this.getTex("subject_name_videopraphy"));
                this.setMode(1);
                this.startScene();
                this.sideButtonInit(2);
                break;
            case 23:
                //this.title = this.getLabel("contents_design1");
                //this.title = new createjs.Bitmap(this.getTex("contents_design_title"));
                this.title = new createjs.Bitmap(this.getTex("subject_name_contents_design"));
                this.setMode(1);
                this.startScene();
                this.sideButtonInit(3);
                break;
            case 24:
                //this.title = new createjs.Bitmap(this.getTex("poster_title"));
                this.title = new createjs.Bitmap(this.getTex("subject_name_poster"));
                this.setMode(1);
                this.startScene();
                this.sideButtonInit(4);
                break;
            default:
                this.stopScene();
                this.visible = false;
                break;
        }
        if (this.title === null) {
            this.line.visible = false;
        }
        else {
            this.line.visible = true;
            this.addChild(this.title);
            this.rad = 80;
            createjs.Tween.get(this, { loop: false }).to({ rad: 110 }, 1000, createjs.Ease.linear);
        }
        if (this.titleBitmap === null) {
        }
        else {
            this.addChild(this.titleBitmap);
            if (index == 10 || index == 13 || index == 14 || index == 15 || index == 16 || index == 17) {
                this.titleBitmap.x = 195;
                this.titleBitmap.y = 76;
            }
            else {
                this.titleBitmap.x = 195;
                this.titleBitmap.y = 96;
            }
        }
    };
    SceneSideMenu.prototype.init = function () {
        this.visible = false;
        this.portfolioGroup = new createjs.Container;
        this.addChild(this.portfolioGroup);
        this.line = new CircleLine();
        this.line.min_r = 210;
        this.line.max_r = 334;
        this.line.rad = 110;
        this.line.x = -50;
        this.line.y = -50;
        this.addChild(this.line);
        this.menu_icon = new TitleCircle(this.getTex("aboutmediadesign_titledot"), 19);
        this.menu_icon.x = 129;
        this.menu_icon.y = 117;
        this.addChild(this.menu_icon);
        this.rad = 110;
        //
        this.portfolio_button = new Button(this.getTex("menu_work_portfolio"), 124, 23);
        this.portfolio_button.on("click", function (event) {
            SceneSideMenu.instance().setMode(2);
        });
        this.addChild(this.portfolio_button);
        this.mouseover_interactive_design = new SideButton(this.getTex("circle_button"), this.getTex("mouse_over_interactive_design"), 23, 24, 20, 334, 334, 130);
        this.mouseover_interactive_design.scaleX = 0.95;
        this.mouseover_interactive_design.scaleY = 0.95;
        this.sideButton.push(this.mouseover_interactive_design);
        this.portfolioGroup.addChild(this.mouseover_interactive_design);
        this.mouseover_animation = new SideButton(this.getTex("circle_button"), this.getTex("mouse_over_title_animation"), 23, 24, 21, 334, 334, 140);
        this.mouseover_animation.scaleX = 0.95;
        this.mouseover_animation.scaleY = 0.95;
        this.sideButton.push(this.mouseover_animation);
        this.portfolioGroup.addChild(this.mouseover_animation);
        this.mouseover_videography = new SideButton(this.getTex("circle_button"), this.getTex("mouse_over_videography"), 23, 24, 22, 334, 334, 150);
        this.mouseover_videography.scaleX = 0.95;
        this.mouseover_videography.scaleY = 0.95;
        this.sideButton.push(this.mouseover_videography);
        this.portfolioGroup.addChild(this.mouseover_videography);
        this.mouseover_contents = new SideButton(this.getTex("circle_button"), this.getTex("mouse_over_contents_design"), 23, 24, 23, 334, 334, 160);
        this.mouseover_contents.scaleX = 0.95;
        this.mouseover_contents.scaleY = 0.95;
        this.sideButton.push(this.mouseover_contents);
        this.portfolioGroup.addChild(this.mouseover_contents);
        this.mouseover_poster = new SideButton(this.getTex("circle_button"), this.getTex("mouse_over_poster"), 23, 24, 24, 334, 334, 170);
        this.mouseover_poster.scaleX = 0.95;
        this.mouseover_poster.scaleY = 0.95;
        this.sideButton.push(this.mouseover_poster);
        this.portfolioGroup.addChild(this.mouseover_poster);
    };
    //public setMode(mode: number): void {
    SceneSideMenu.prototype.setMode = function (mode) {
        this.mode = mode;
        switch (mode) {
            case 0:
                this.portfolio_button.visible = false;
                this.portfolioGroup.visible = false;
                this.menu_icon.x = 129;
                this.menu_icon.y = 117;
                break;
            case 1:
                this.portfolio_button.visible = false;
                this.portfolioGroup.visible = true;
                this.portfolioGroup.alpha = 1;
                break;
            case 2:
                this.portfolio_button.visible = false;
                this.portfolioGroup.visible = false;
                this.portfolioGroup.alpha = 0;
                break;
            case 3:
                this.portfolio_button.visible = false;
                this.portfolioGroup.visible = true;
                this.portfolioGroup.alpha = 1;
                break;
        }
    };
    SceneSideMenu.prototype.setCirclePosition = function (button, rad, r) {
        button.x = Math.sin(Math.PI * rad / 180) * r - 50;
        button.y = -Math.cos(Math.PI * rad / 180) * r - 50;
    };
    SceneSideMenu.prototype.startScene = function () {
        this.visible = true;
        this.count = 0;
        this.drawCount = 0;
        this.addEventListener("tick", this.drawing);
    };
    SceneSideMenu.prototype.drawing = function (event) {
        SceneSideMenu.instance().drawLines();
    };
    SceneSideMenu.prototype.stopScene = function () {
        this.removeEventListener("tick", this.drawing);
        createjs.Tween.removeTweens(this.mouseover_interactive_design);
        createjs.Tween.removeTweens(this.mouseover_animation);
        createjs.Tween.removeTweens(this.mouseover_videography);
        createjs.Tween.removeTweens(this.mouseover_contents);
        createjs.Tween.removeTweens(this.mouseover_poster);
        createjs.Tween.removeTweens(this.line);
        createjs.Tween.removeTweens(this.menu_icon);
    };
    SceneSideMenu.prototype.sideButtonInit = function (index) {
        var targetRad = 130;
        var delay = 1000;
        for (var i = 0; i < this.sideButton.length; i++) {
            var sideButton = this.sideButton[i];
            sideButton.rad = 180;
            if (index == i) {
                sideButton.visible = false;
            }
            else {
                sideButton.visible = true;
                createjs.Tween.get(sideButton, { loop: false }).wait(delay).to({ rad: targetRad }, 250, createjs.Ease.linear);
                targetRad += 10;
                delay += 100;
            }
        }
    };
    SceneSideMenu.prototype.drawLines = function () {
        this.count++;
        if (this.mode == 1) {
            this.line.rad = this.rad; // this.count;
            this.line.drawLineRad();
            for (var j = 0; j < this.sideButton.length; j++) {
                var sideButton = this.sideButton[j];
                sideButton.setCirclePosition();
            }
            this.setCirclePosition(this.menu_icon, this.rad, 334);
            if (this.title === null) {
            }
            else {
                this.title.x = this.menu_icon.x + 28;
                this.title.y = this.menu_icon.y - 30;
            }
        }
        this.menu_icon.drawCircle();
    };
    SceneSideMenu._instance = null;
    return SceneSideMenu;
})(Scene);
//# sourceMappingURL=SceneSideMenu.js.map