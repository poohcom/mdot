/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class SceneManager {


    public static LOADING: number = 0;
    public static INTRO: number = 1;
    public static MAIN: number = 2; // 포트폴리오

    public static INTERACTIVE: number = 3;
    public static ANIMATION: number = 4;
    public static VIDEOGRAPHY: number = 5;
    public static CONTENTS: number = 6;
    public static POSTER: number = 7;

    public static ABOUT_MEDIA_DESIGN: number = 8;
    public static PROFESSORS: number = 9;
    public static STUDENTS: number = 10;
//    public static MDOT_17: number = 11;
    public static MDOT_17_1: number = 12;
    public static MDOT_17_2: number = 13;
    public static MDOT_17_3: number = 14;


    public static INTERACTIVE_WORK: number = 15;
    public static ANIMATION_WORK: number = 16;
    public static VIDEOGRAPHY_WORK: number = 17;
    public static CONTENTS_WORK: number = 18;
    public static POSTER_WORK: number = 19;



    private static _instance: SceneManager = null;
    private _sceneIndex: number = -1;
    private _startTime: number = 0;
    public stage: createjs.Stage = null;

    // 기본 
    private rootContainer: createjs.Container = null;

    // 배경 씬
    private bgContainer: createjs.Container = null;

    // 연출 씬
    private sceneContainer: createjs.Container = null;

    // 메뉴
    private menuContainer: createjs.Container = null;

    // 최상 단 팝업
    //private  popupContainer: createjs.Container = null;

    public scene: Scene=null;
    
    
    private timerAlpha: number;

    public static instance(): SceneManager {
        if (SceneManager._instance === null) {
            SceneManager._instance = new SceneManager();
        }
        return SceneManager._instance;
    }

    constructor() {
        if (SceneManager._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneManager._instance = this;
    }
    
    public getSceneIndex(): number
    {
        return this._sceneIndex;
    }

    
    public queue: createjs.LoadQueue;

    public isLoadedBgm: boolean = false;
    //public isLoadedData: boolean = false;

    public bgm: createjs.AbstractSoundInstance = null;
    public tree: createjs.AbstractSoundInstance = null;

    //public mouse_sound: createjs.AbstractSoundInstance = null;
    public soundplay(): void {
        createjs.Sound.play("mouse_over", createjs.Sound.INTERRUPT_NONE);
    }

    public soundClickPlay(): void {
        createjs.Sound.play("mouse_click", createjs.Sound.INTERRUPT_NONE);
    }


    public soundTreePlay(): void {
        if (this.tree == null) {
            this.tree = createjs.Sound.play("tree_mouse_over", createjs.Sound.INTERRUPT_ANY, 0, 0, -1, 0.35);
            return;
        }
        this.tree.paused = false;
        //this.tree.play();
    }

    public soundTreeStop(): void {
        if (this.tree == null)
            return;
        this.tree.paused = true;
        //this.tree.stop();
    }

    public soundPagePlay(): void {
        createjs.Sound.play("page_movement", createjs.Sound.INTERRUPT_NONE);
    }

    public createBG(): void
    {
        this.stage = new createjs.Stage(document.getElementById('uicanvas'));
        createjs.Touch.enable(this.stage);

        this.rootContainer = new createjs.Container();
        this.stage.addChild(this.rootContainer);

        this.bgContainer = new createjs.Container();

        this.bgContainer.addChild(SceneStar.instance());

        //var mask2: createjs.Shape = new createjs.Shape();
        //mask2.graphics.beginFill("#000").drawRect(0, 0, 1920, 1080);
        //this.rootContainer.mask = mask2;


        this.rootContainer.addChild(this.bgContainer);
        this.sceneContainer = new createjs.Container();

        var mask: createjs.Shape = new createjs.Shape();
        mask.graphics.beginFill("#FFF").drawRect(0, 0, 1920, 1080);
        this.sceneContainer.mask = mask;

        this.rootContainer.addChild(this.sceneContainer);

        createjs.Ticker.addEventListener("tick", this.stage);
        createjs.Ticker.setFPS(30);
        this.stage.update();
        this.stage.enableMouseOver(30);
        this.stage.mouseMoveOutside = true;
        
        this.rootContainer.addEventListener("tick", update);

        this.stage.on("stagemousemove", function (event: createjs.MouseEvent) {

            var lx: number = (event.stageX - SceneManager.instance().rootContainer.x) / SceneManager.instance().rootContainer.scaleX;
            var ly: number = (event.stageY - SceneManager.instance().rootContainer.y) / SceneManager.instance().rootContainer.scaleY;

            SceneManager.instance().updateMouseXY(lx,ly);

        });


        this.nextSceneIndex(SceneManager.LOADING);

        function update(event: Event): void {
            SceneManager.instance().playScene();
        }
    }

    public updateMouseXY(mx:number, my:number): void {
        for (var i: number = 0; i < this.bgContainer.numChildren; i++) {
            (<Scene>this.bgContainer.getChildAt(i)).updateMouseXY(mx,my);
        }

        if (this.sceneContainer.visible == false)
            return;

        for (var i: number = 0; i < this.sceneContainer.numChildren; i++) {
            (<Scene>this.sceneContainer.getChildAt(i)).updateMouseXY(mx, my);
        }
    }
    
    public playScene(): void {
        for (var i: number = 0; i < this.bgContainer.numChildren; i++) {
            (<Scene>this.bgContainer.getChildAt(i)).playScene();
        }

        for (var i: number = 0; i < this.sceneContainer.numChildren; i++) {
            (<Scene>this.sceneContainer.getChildAt(i)).playScene();
        }
    }

    public initBG(): void {
        
        //this.bgContainer.addChild(SceneStar.instance());
        this.menuContainer = new createjs.Container();
        this.rootContainer.addChild(this.menuContainer);
        this.menuContainer.addChild(MenuBar.instance());
    }

    // 
    public setSize(w: number, h: number): void
    {
        if (this.rootContainer == null)
            return;

        var render3d: HTMLDivElement = <HTMLDivElement>document.getElementById('render3d');

        if (1920 / 1080 > w / h)
        {
            this.rootContainer.scaleX = w / 1920;
            this.rootContainer.scaleY = w / 1920;
            this.rootContainer.x = 0;
            this.rootContainer.y = (h - 1080 * w / 1920) / 2;
        } else {
            this.rootContainer.scaleX = h / 1080;
            this.rootContainer.scaleY = h / 1080;
            this.rootContainer.x = (w - 1920 * h / 1080)/2;
            this.rootContainer.y = 0;
        }
        
    }

    
    public oldIndex: number = -1;
    private startTime: number = 0;
    public nextSceneIndex(index: number, isPlay: boolean = true): void {
    
        if (index == this._sceneIndex)
            return;

        
        if (this.scene!=null &&  (Date.now() - this.startTime) < this.scene.getStopSceneTime() * 1000 && this.oldIndex!=-1)
            return;

        this.startTime = Date.now();

        console.log("index",index, this._sceneIndex, this.oldIndex);

        if (SceneManager.LOADING != index) {
            MenuBar.instance().setMenuButton(index);
        }

        if (this.scene === null) {
        } else {

            this.scene.stopScene();
            var s: Scene = this.scene;

            if (isPlay == true) {

                setTimeout(function () { SceneManager.instance().sceneContainer.removeChild(s) }, this.scene.getStopSceneTime() * 1000);

            } else {
                setTimeout(function () { SceneManager.instance().sceneContainer.removeChild(s) }, this.scene.getStopSceneTime() * 1000);

                //SceneManager.instance().sceneContainer.removeChild(s);
            }
            
            this.scene = null;
        }

        this.oldIndex = this._sceneIndex;
        this._sceneIndex = index;
        this._startTime = Date.now();

        //MenuBar.instance().updateIndex();
        switch (index) {
            case SceneManager.LOADING:
                this.scene = new SceneLoading();
                break;
            case SceneManager.INTRO:
                this.scene = SceneIntro.instance();
                break;
            case SceneManager.MAIN: // 포트포리오 메인

                MenuBar.instance().setMenu(MenuBar.NO_SUB_MENU);
                MenuBar.instance().hide17Th();

                this.scene = SceneMainMainPage.instance();

                if (this.oldIndex == SceneManager.INTRO) {
                    SceneStar.instance().scroll(0, 1, 43 / 12);
                    this.scene.scrollXY(0, 1080, 0, 0, 43 / 12);
                    Scene3DManager.instance().startScene();
                    
                } else if (this.oldIndex == SceneManager.ABOUT_MEDIA_DESIGN) {
                    this.soundPagePlay();
                    SceneStar.instance().scroll(0, -1, 1);
                    this.scene.scrollXY(0, -1080, 0, 0, 1);
                } else {
                    this.scene.scrollXY(0, 0, 0, 0, 43 / 12);
                }


                if (this.oldIndex == SceneManager.POSTER
                    || this.oldIndex == SceneManager.VIDEOGRAPHY
                    || this.oldIndex == SceneManager.INTERACTIVE
                    || this.oldIndex == SceneManager.CONTENTS
                    || this.oldIndex == SceneManager.ANIMATION
                )
                {
                    this.soundPagePlay();
                }



                //Scene3DManager.instance().goCamera(0, 0, 43 / 12);
                Scene3DManager.instance().goCamera(0, 0, 2);
                break;
            case SceneManager.INTERACTIVE:
                MenuBar.instance().setMenu(MenuBar.PORTFOLO);
                MenuBar.instance().hide17Th();
                // 완료
                // todo // 좌상
                this.scene = ScenePortInter.instance();

                if (isPlay == true) {
                    SceneStar.instance().scroll(-1, 0, 1);
                    Scene3DManager.instance().goCamera(-300, 0, 1);
                    SceneMainMainPage.instance().scrollXY(0, 0, 1920, 0, 1);
                    this.scene.scrollXY(645 - ScenePortInter.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 1);
                } else {
                    
                    Scene3DManager.instance().goCamera(-300, 0, 0);
                    SceneMainMainPage.instance().scrollXY(0, 0, 1920, 0, 0);
                    this.scene.scrollXY(645 - ScenePortInter.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 0);
                }

                break;
            case SceneManager.ANIMATION:
                MenuBar.instance().setMenu(MenuBar.PORTFOLO);
                MenuBar.instance().hide17Th();

                
                // todo 우상
                this.scene = ScenePortAnimation.instance();

                if (isPlay == true) 
                    {
                        SceneStar.instance().scroll(1, 0, 1);
                        Scene3DManager.instance().goCamera(300, 0, 1);
                        SceneMainMainPage.instance().scrollXY(0, 0, -1920, 0, 1);
                        this.scene.scrollXY(1115 + ScenePortAnimation.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 1);
                } else {
                    Scene3DManager.instance().goCamera(300, 0, 0);
                    SceneMainMainPage.instance().scrollXY(0, 0, -1920, 0, 0);
                    this.scene.scrollXY(1115 + ScenePortAnimation.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 0);
                 }

                break;
            case SceneManager.VIDEOGRAPHY: 
                // 완료
                // 좌 하
                MenuBar.instance().setMenu(MenuBar.PORTFOLO);
                MenuBar.instance().hide17Th();
                this.scene = ScenePortVideo.instance();

                if (isPlay == true) {
                    SceneStar.instance().scroll(-1, 0, 1);

                    Scene3DManager.instance().goCamera(-300, 0, 1);
                    SceneMainMainPage.instance().scrollXY(0, 0, 1920, 0, 1);
                    this.scene.scrollXY(712 - ScenePortVideo.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 1);

                } else {

                    Scene3DManager.instance().goCamera(-300, 0, 0);
                    SceneMainMainPage.instance().scrollXY(0, 0, 1920, 0, 0);
                    this.scene.scrollXY(712 - ScenePortVideo.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 0);

                }
                
                break;
            case SceneManager.CONTENTS:

                // 우 하
                MenuBar.instance().setMenu(MenuBar.PORTFOLO);
                MenuBar.instance().hide17Th();

                this.scene = ScenePortContents.instance();

                if (isPlay == true) {
                    SceneStar.instance().scroll(1, 0, 1);
                    Scene3DManager.instance().goCamera(300, 0, 1);
                    SceneMainMainPage.instance().scrollXY(0, 0, -1920, 0, 1);
                    this.scene.scrollXY(1101 + ScenePortContents.instance().page_w / 2 - 1920 / 2, 0, 0, 0, 1);

                } else {
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

                } else {
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
                } else {
                    //SceneStar.instance().scroll(0, 1, 0);
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
            //case SceneManager.MDOT_17:
            //    MenuBar.instance().setAbout(true);
                
            //    Scene3DManager.instance().goCamera(0, -100, 2);
            //    break;
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

    }

    public fullscreenOn(): void {


        if (this._sceneIndex == SceneManager.VIDEOGRAPHY_WORK) {
            ScenePortVideographyWork.instance().fullscreenOn();
        }

        if (this._sceneIndex == SceneManager.ANIMATION_WORK) {
            ScenePortAnimationWork.instance().fullscreenOn();
        }
    }

    public fullscreenOff(): void {
        if (this._sceneIndex == SceneManager.VIDEOGRAPHY_WORK) {
            ScenePortVideographyWork.instance().fullscreenOff();
        }

        if (this._sceneIndex == SceneManager.ANIMATION_WORK) {
            ScenePortAnimationWork.instance().fullscreenOff();
        }

    }



    public bgmOff(): void {
        MenuBar.instance().sound_button.visible = false;
        MenuBar.instance().sound_off.visible = true;
        this.bgm.paused = true;
       
    }

    public isResumeBGM: boolean = true;
    public resumeBGM(): void {
        if (this.isResumeBGM == true) {
            MenuBar.instance().sound_button.visible = true;
            MenuBar.instance().sound_off.visible = false;
            this.bgm.paused = false;
        }
    }

    public popupSitemap(): void {
        if (this.menuContainer.numChildren > 1) {
            return;
        }
        Scene3DManager.instance().particleSystem.visible = false;
        MenuBar.instance().hideForPopup();
        this.sceneContainer.visible = false;
        this.menuContainer.addChild(SceneSitemap.instance());
    }


    public closeSitemap(): void {
        Scene3DManager.instance().particleSystem.visible = true;
        MenuBar.instance().show();
        this.sceneContainer.visible = true;
        this.menuContainer.removeChild(SceneSitemap.instance());
    }

    public closeSitemapNext(index: number): void {
        Scene3DManager.instance().particleSystem.visible = true;
        MenuBar.instance().show();
        this.closeSitemap();
        this.nextSceneIndex(index, false);
    }

    public popupInfomation(): void {
        if (this.menuContainer.numChildren > 1) {
            return;
        }
        MenuBar.instance().hideForPopup();

        Scene3DManager.instance().particleSystem.visible = false;
        this.sceneContainer.visible = false;
        SceneMainInfomation.instance().startScene();
        this.menuContainer.addChild(SceneMainInfomation.instance());
    }

    public closeInfomation(): void {
        MenuBar.instance().show();
        Scene3DManager.instance().particleSystem.visible = true;
        this.sceneContainer.visible = true;
        Scene3DManager.instance().particleSystem.visible = true;
        SceneMainInfomation.instance().stopScene();
        this.menuContainer.removeChild(SceneMainInfomation.instance());
    }

    public popupPortAnimation(index: number): void {

        this.nextSceneIndex(SceneManager.ANIMATION_WORK, false);
        ScenePortAnimationWork.instance().setIndex(index + 1);
    }

    public popupPortVideo(index: number): void {
        this.nextSceneIndex(SceneManager.VIDEOGRAPHY_WORK, false);
        ScenePortVideographyWork.instance().setIndex(index+1);
    }

    
    public popupPortContents(index: number): void {
        this.nextSceneIndex(SceneManager.CONTENTS_WORK, false);
        ScenePortContentsWork.instance().setIndex(index + 1);
    }

    
    public popupPortInter(index: number): void {
        this.nextSceneIndex(SceneManager.INTERACTIVE_WORK, false);
        ScenePortInterWork.instance().setIndex(index + 1);
    }

    public popupPortPoster(index: number): void {
        this.nextSceneIndex(SceneManager.POSTER_WORK, false);
        ScenePortPosterWork.instance().setIndex(index + 1);
    }

} 