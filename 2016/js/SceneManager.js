var SceneManager = (function () {
    function SceneManager() {
        this._sceneIndex = -1;
        this._startTime = 0;
        this.stage = null;
        this.rootContainer = null;
        this.bgContainer = null;
        this.sceneContainer = null;
        this.menuContainer = null;
        this.scene = null;
        this.isLoadedBgm = false;
        this.bgm = null;
        this.tree = null;
        this.oldIndex = -1;
        this.startTime = 0;
        this.isResumeBGM = true;
        if (SceneManager._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneManager._instance = this;
    }
    SceneManager.instance = function () {
        if (SceneManager._instance === null) {
            SceneManager._instance = new SceneManager();
        }
        return SceneManager._instance;
    };
    SceneManager.prototype.getSceneIndex = function () {
        return this._sceneIndex;
    };
    SceneManager.prototype.soundplay = function () {
        createjs.Sound.play("mouse_over", createjs.Sound.INTERRUPT_NONE);
    };
    SceneManager.prototype.soundClickPlay = function () {
        createjs.Sound.play("mouse_click", createjs.Sound.INTERRUPT_NONE);
    };
    SceneManager.prototype.soundTreePlay = function () {
        if (this.tree == null) {
            this.tree = createjs.Sound.play("tree_mouse_over", createjs.Sound.INTERRUPT_ANY, 0, 0, -1, 0.35);
            return;
        }
        this.tree.paused = false;
    };
    SceneManager.prototype.soundTreeStop = function () {
        if (this.tree == null)
            return;
        this.tree.paused = true;
    };
    SceneManager.prototype.soundPagePlay = function () {
        createjs.Sound.play("page_movement", createjs.Sound.INTERRUPT_NONE);
    };
    SceneManager.prototype.createBG = function () {
        this.stage = new createjs.Stage(document.getElementById('uicanvas'));
        createjs.Touch.enable(this.stage);
        this.rootContainer = new createjs.Container();
        this.stage.addChild(this.rootContainer);
        this.bgContainer = new createjs.Container();
        this.bgContainer.addChild(SceneStar.instance());
        this.rootContainer.addChild(this.bgContainer);
        this.sceneContainer = new createjs.Container();
        var mask = new createjs.Shape();
        mask.graphics.beginFill("#FFF").drawRect(0, 0, 1920, 1080);
        this.sceneContainer.mask = mask;
        this.rootContainer.addChild(this.sceneContainer);
        createjs.Ticker.addEventListener("tick", this.stage);
        createjs.Ticker.setFPS(30);
        this.stage.update();
        this.stage.enableMouseOver(30);
        this.stage.mouseMoveOutside = true;
        this.rootContainer.addEventListener("tick", update);
        this.stage.on("stagemousemove", function (event) {
            var lx = (event.stageX - SceneManager.instance().rootContainer.x) / SceneManager.instance().rootContainer.scaleX;
            var ly = (event.stageY - SceneManager.instance().rootContainer.y) / SceneManager.instance().rootContainer.scaleY;
            SceneManager.instance().updateMouseXY(lx, ly);
        });
        this.nextSceneIndex(SceneManager.LOADING);
        function update(event) {
            SceneManager.instance().playScene();
        }
    };
    SceneManager.prototype.updateMouseXY = function (mx, my) {
        for (var i = 0; i < this.bgContainer.numChildren; i++) {
            this.bgContainer.getChildAt(i).updateMouseXY(mx, my);
        }
        if (this.sceneContainer.visible == false)
            return;
        for (var i = 0; i < this.sceneContainer.numChildren; i++) {
            this.sceneContainer.getChildAt(i).updateMouseXY(mx, my);
        }
    };
    SceneManager.prototype.playScene = function () {
        for (var i = 0; i < this.bgContainer.numChildren; i++) {
            this.bgContainer.getChildAt(i).playScene();
        }
        for (var i = 0; i < this.sceneContainer.numChildren; i++) {
            this.sceneContainer.getChildAt(i).playScene();
        }
    };
    SceneManager.prototype.initBG = function () {
        this.menuContainer = new createjs.Container();
        this.rootContainer.addChild(this.menuContainer);
        this.menuContainer.addChild(MenuBar.instance());
    };
    SceneManager.prototype.setSize = function (w, h) {
        if (this.rootContainer == null)
            return;
        var render3d = document.getElementById('render3d');
        if (1920 / 1080 > w / h) {
            this.rootContainer.scaleX = w / 1920;
            this.rootContainer.scaleY = w / 1920;
            this.rootContainer.x = 0;
            this.rootContainer.y = (h - 1080 * w / 1920) / 2;
        }
        else {
            this.rootContainer.scaleX = h / 1080;
            this.rootContainer.scaleY = h / 1080;
            this.rootContainer.x = (w - 1920 * h / 1080) / 2;
            this.rootContainer.y = 0;
        }
    };
    SceneManager.prototype.nextSceneIndex = function (index, isPlay) {
        if (isPlay === void 0) { isPlay = true; }
        if (index == this._sceneIndex)
            return;
        if (this.scene != null && (Date.now() - this.startTime) < this.scene.getStopSceneTime() * 1000 && this.oldIndex != -1)
            return;
        this.startTime = Date.now();
        console.log("index", index, this._sceneIndex, this.oldIndex);
        if (SceneManager.LOADING != index) {
            MenuBar.instance().setMenuButton(index);
        }
        if (this.scene === null) {
        }
        else {
            this.scene.stopScene();
            var s = this.scene;
            if (isPlay == true) {
                setTimeout(function () { SceneManager.instance().sceneContainer.removeChild(s); }, this.scene.getStopSceneTime() * 1000);
            }
            else {
                setTimeout(function () { SceneManager.instance().sceneContainer.removeChild(s); }, this.scene.getStopSceneTime() * 1000);
            }
            this.scene = null;
        }
        this.oldIndex = this._sceneIndex;
        this._sceneIndex = index;
        this._startTime = Date.now();
        switch (index) {
            case SceneManager.LOADING:
                this.scene = new SceneLoading();
                break;
            case SceneManager.INTRO:
                this.scene = SceneIntro.instance();
                break;
            case SceneManager.MAIN:
                MenuBar.instance().setMenu(MenuBar.NO_SUB_MENU);
                MenuBar.instance().hide17Th();
                this.scene = SceneMainMainPage.instance();
                if (this.oldIndex == SceneManager.INTRO) {
                    SceneStar.instance().scroll(0, 1, 43 / 12);
                    this.scene.scrollXY(0, 1080, 0, 0, 43 / 12);
                    Scene3DManager.instance().startScene();
                }
                else if (this.oldIndex == SceneManager.ABOUT_MEDIA_DESIGN) {
                    this.soundPagePlay();
                    SceneStar.instance().scroll(0, -1, 1);
                    this.scene.scrollXY(0, -1080, 0, 0, 1);
                }
                else {
                    this.scene.scrollXY(0, 0, 0, 0, 43 / 12);
                }
                if (this.oldIndex == SceneManager.POSTER
                    || this.oldIndex == SceneManager.VIDEOGRAPHY
                    || this.oldIndex == SceneManager.INTERACTIVE
                    || this.oldIndex == SceneManager.CONTENTS
                    || this.oldIndex == SceneManager.ANIMATION) {
                    this.soundPagePlay();
                }
                Scene3DManager.instance().goCamera(0, 0, 2);
                break;
            case SceneManager.INTERACTIVE:
                MenuBar.instance().setMenu(MenuBar.PORTFOLO);
                MenuBar.instance().hide17Th();
                this.scene = ScenePortInter.instance();
                if (isPlay == true) {
                    SceneStar.instance().scroll(-1, 0, 1);
                    Scene3DManager.instance().goCamera(-300, 0, 1);
                    SceneMainMainPage.instance().scrollXY(0, 0, 1920, 0, 1);
                    this.scene.scrollXY(645 - ScenePortInter.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 1);
                }
                else {
                    Scene3DManager.instance().goCamera(-300, 0, 0);
                    SceneMainMainPage.instance().scrollXY(0, 0, 1920, 0, 0);
                    this.scene.scrollXY(645 - ScenePortInter.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 0);
                }
                break;
            case SceneManager.ANIMATION:
                MenuBar.instance().setMenu(MenuBar.PORTFOLO);
                MenuBar.instance().hide17Th();
                this.scene = ScenePortAnimation.instance();
                if (isPlay == true) {
                    SceneStar.instance().scroll(1, 0, 1);
                    Scene3DManager.instance().goCamera(300, 0, 1);
                    SceneMainMainPage.instance().scrollXY(0, 0, -1920, 0, 1);
                    this.scene.scrollXY(1115 + ScenePortAnimation.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 1);
                }
                else {
                    Scene3DManager.instance().goCamera(300, 0, 0);
                    SceneMainMainPage.instance().scrollXY(0, 0, -1920, 0, 0);
                    this.scene.scrollXY(1115 + ScenePortAnimation.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 0);
                }
                break;
            case SceneManager.VIDEOGRAPHY:
                MenuBar.instance().setMenu(MenuBar.PORTFOLO);
                MenuBar.instance().hide17Th();
                this.scene = ScenePortVideo.instance();
                if (isPlay == true) {
                    SceneStar.instance().scroll(-1, 0, 1);
                    Scene3DManager.instance().goCamera(-300, 0, 1);
                    SceneMainMainPage.instance().scrollXY(0, 0, 1920, 0, 1);
                    this.scene.scrollXY(712 - ScenePortVideo.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 1);
                }
                else {
                    Scene3DManager.instance().goCamera(-300, 0, 0);
                    SceneMainMainPage.instance().scrollXY(0, 0, 1920, 0, 0);
                    this.scene.scrollXY(712 - ScenePortVideo.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 0);
                }
                break;
            case SceneManager.CONTENTS:
                MenuBar.instance().setMenu(MenuBar.PORTFOLO);
                MenuBar.instance().hide17Th();
                this.scene = ScenePortContents.instance();
                if (isPlay == true) {
                    SceneStar.instance().scroll(1, 0, 1);
                    Scene3DManager.instance().goCamera(300, 0, 1);
                    SceneMainMainPage.instance().scrollXY(0, 0, -1920, 0, 1);
                    this.scene.scrollXY(1101 + ScenePortContents.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 1);
                }
                else {
                    Scene3DManager.instance().goCamera(300, 0, 0);
                    SceneMainMainPage.instance().scrollXY(0, 0, -1920, 0, 0);
                    this.scene.scrollXY(1101 + ScenePortContents.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 0);
                }
                break;
            case SceneManager.POSTER:
                MenuBar.instance().setMenu(MenuBar.PORTFOLO);
                MenuBar.instance().hide17Th();
                this.scene = ScenePortPoster.instance();
                if (isPlay == true) {
                    SceneStar.instance().scroll(1, 0, 1);
                    Scene3DManager.instance().goCamera(300, 0, 1);
                    SceneMainMainPage.instance().scrollXY(0, 0, -1920, 0, 1);
                    this.scene.scrollXY(1101 + ScenePortPoster.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 1);
                }
                else {
                    Scene3DManager.instance().goCamera(300, 0, 0);
                    SceneMainMainPage.instance().scrollXY(0, 0, -1920, 0, 0);
                    this.scene.scrollXY(1101 + ScenePortPoster.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 0);
                }
                break;
            case SceneManager.ABOUT_MEDIA_DESIGN:
                MenuBar.instance().setMenu(MenuBar.ABOUT_MEDIA);
                MenuBar.instance().hide17Th();
                this.scene = SceneAboutMediaDesign.instance();
                if (this.oldIndex == SceneManager.MAIN) {
                    SceneStar.instance().scroll(0, 1, 1);
                    this.scene.scrollXY(0, -1080, 0, 0, 1);
                    Scene3DManager.instance().goCamera(0, -100, 2);
                    SceneMainMainPage.instance().scrollXY(0, 0, 0, -1080, 1);
                    this.soundPagePlay();
                }
                else {
                    this.scene.scrollXY(0, -1080, 0, 0, 0);
                    Scene3DManager.instance().goCamera(0, -100, 0);
                }
                break;
            case SceneManager.PROFESSORS:
                MenuBar.instance().setMenu(MenuBar.ABOUT_MEDIA);
                MenuBar.instance().hide17Th();
                this.scene = SceneAboutProfessors.instance();
                Scene3DManager.instance().goCamera(0, -100, 2);
                break;
            case SceneManager.STUDENTS:
                MenuBar.instance().setMenu(MenuBar.ABOUT_MEDIA);
                MenuBar.instance().hide17Th();
                this.scene = SceneAboutStudents.instance();
                Scene3DManager.instance().goCamera(0, -100, 2);
                break;
            case SceneManager.MDOT_17_1:
                MenuBar.instance().setMenu(MenuBar.ABOUT_MEDIA);
                this.scene = SceneAboutConcept.instance();
                Scene3DManager.instance().goCamera(0, -100, 2);
                break;
            case SceneManager.MDOT_17_2:
                MenuBar.instance().setMenu(MenuBar.ABOUT_MEDIA);
                this.scene = SceneAboutDesignProcess.instance();
                Scene3DManager.instance().goCamera(0, -100, 2);
                break;
            case SceneManager.MDOT_17_3:
                MenuBar.instance().setMenu(MenuBar.ABOUT_MEDIA);
                this.scene = SceneAbout17ThCommittee.instance();
                Scene3DManager.instance().goCamera(0, -100, 2);
                break;
            case SceneManager.VIDEOGRAPHY_WORK:
                MenuBar.instance().setMenu(MenuBar.NO_MENU);
                MenuBar.instance().hide17Th();
                this.scene = ScenePortVideographyWork.instance();
                break;
            case SceneManager.ANIMATION_WORK:
                MenuBar.instance().setMenu(MenuBar.NO_MENU);
                MenuBar.instance().hide17Th();
                this.scene = ScenePortAnimationWork.instance();
                break;
            case SceneManager.CONTENTS_WORK:
                MenuBar.instance().setMenu(MenuBar.NO_MENU);
                MenuBar.instance().hide17Th();
                this.scene = ScenePortContentsWork.instance();
                break;
            case SceneManager.INTERACTIVE_WORK:
                MenuBar.instance().setMenu(MenuBar.NO_MENU);
                MenuBar.instance().hide17Th();
                this.scene = ScenePortInterWork.instance();
                break;
            case SceneManager.POSTER_WORK:
                MenuBar.instance().setMenu(MenuBar.NO_MENU);
                MenuBar.instance().hide17Th();
                this.scene = ScenePortPosterWork.instance();
                break;
        }
        this.sceneContainer.addChild(this.scene);
        this.scene.startScene();
    };
    SceneManager.prototype.fullscreenOn = function () {
        if (this._sceneIndex == SceneManager.VIDEOGRAPHY_WORK) {
            ScenePortVideographyWork.instance().fullscreenOn();
        }
        if (this._sceneIndex == SceneManager.ANIMATION_WORK) {
            ScenePortAnimationWork.instance().fullscreenOn();
        }
    };
    SceneManager.prototype.fullscreenOff = function () {
        if (this._sceneIndex == SceneManager.VIDEOGRAPHY_WORK) {
            ScenePortVideographyWork.instance().fullscreenOff();
        }
        if (this._sceneIndex == SceneManager.ANIMATION_WORK) {
            ScenePortAnimationWork.instance().fullscreenOff();
        }
    };
    SceneManager.prototype.bgmOff = function () {
        MenuBar.instance().sound_button.visible = false;
        MenuBar.instance().sound_off.visible = true;
        this.bgm.paused = true;
    };
    SceneManager.prototype.resumeBGM = function () {
        if (this.isResumeBGM == true) {
            MenuBar.instance().sound_button.visible = true;
            MenuBar.instance().sound_off.visible = false;
            this.bgm.paused = false;
        }
    };
    SceneManager.prototype.popupSitemap = function () {
        if (this.menuContainer.numChildren > 1) {
            return;
        }
        Scene3DManager.instance().particleSystem.visible = false;
        MenuBar.instance().hideForPopup();
        this.sceneContainer.visible = false;
        this.menuContainer.addChild(SceneSitemap.instance());
    };
    SceneManager.prototype.closeSitemap = function () {
        Scene3DManager.instance().particleSystem.visible = true;
        MenuBar.instance().show();
        this.sceneContainer.visible = true;
        this.menuContainer.removeChild(SceneSitemap.instance());
    };
    SceneManager.prototype.closeSitemapNext = function (index) {
        Scene3DManager.instance().particleSystem.visible = true;
        MenuBar.instance().show();
        this.closeSitemap();
        this.nextSceneIndex(index, false);
    };
    SceneManager.prototype.popupInfomation = function () {
        if (this.menuContainer.numChildren > 1) {
            return;
        }
        MenuBar.instance().hideForPopup();
        Scene3DManager.instance().particleSystem.visible = false;
        this.sceneContainer.visible = false;
        SceneMainInfomation.instance().startScene();
        this.menuContainer.addChild(SceneMainInfomation.instance());
    };
    SceneManager.prototype.closeInfomation = function () {
        MenuBar.instance().show();
        Scene3DManager.instance().particleSystem.visible = true;
        this.sceneContainer.visible = true;
        Scene3DManager.instance().particleSystem.visible = true;
        SceneMainInfomation.instance().stopScene();
        this.menuContainer.removeChild(SceneMainInfomation.instance());
    };
    SceneManager.prototype.popupPortAnimation = function (index) {
        this.nextSceneIndex(SceneManager.ANIMATION_WORK, false);
        ScenePortAnimationWork.instance().setIndex(index + 1);
    };
    SceneManager.prototype.popupPortVideo = function (index) {
        this.nextSceneIndex(SceneManager.VIDEOGRAPHY_WORK, false);
        ScenePortVideographyWork.instance().setIndex(index + 1);
    };
    SceneManager.prototype.popupPortContents = function (index) {
        this.nextSceneIndex(SceneManager.CONTENTS_WORK, false);
        ScenePortContentsWork.instance().setIndex(index + 1);
    };
    SceneManager.prototype.popupPortInter = function (index) {
        this.nextSceneIndex(SceneManager.INTERACTIVE_WORK, false);
        ScenePortInterWork.instance().setIndex(index + 1);
    };
    SceneManager.prototype.popupPortPoster = function (index) {
        this.nextSceneIndex(SceneManager.POSTER_WORK, false);
        ScenePortPosterWork.instance().setIndex(index + 1);
    };
    SceneManager.LOADING = 0;
    SceneManager.INTRO = 1;
    SceneManager.MAIN = 2;
    SceneManager.INTERACTIVE = 3;
    SceneManager.ANIMATION = 4;
    SceneManager.VIDEOGRAPHY = 5;
    SceneManager.CONTENTS = 6;
    SceneManager.POSTER = 7;
    SceneManager.ABOUT_MEDIA_DESIGN = 8;
    SceneManager.PROFESSORS = 9;
    SceneManager.STUDENTS = 10;
    SceneManager.MDOT_17_1 = 12;
    SceneManager.MDOT_17_2 = 13;
    SceneManager.MDOT_17_3 = 14;
    SceneManager.INTERACTIVE_WORK = 15;
    SceneManager.ANIMATION_WORK = 16;
    SceneManager.VIDEOGRAPHY_WORK = 17;
    SceneManager.CONTENTS_WORK = 18;
    SceneManager.POSTER_WORK = 19;
    SceneManager._instance = null;
    return SceneManager;
})();
//# sourceMappingURL=SceneManager.js.map