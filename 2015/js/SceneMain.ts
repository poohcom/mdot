/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../Scripts/typings/tweenjs/tweenjs.d.ts" />

class SceneMain extends Scene {

    private static _instance: SceneMain = null;

    public static instance(): SceneMain {
        if (SceneMain._instance === null) {
            SceneMain._instance = new SceneMain();
        }
        return SceneMain._instance;
    }
    constructor() {
        super();
        if (SceneMain._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneMain._instance = this;


        //        this.assets.loadManifest([]);
        this.init();
    }

    public startY: number;
    public startMouseY: number;
    
    public scrollToY(ty: number): void {
        this.y = this.startY + ty - this.startMouseY;
    }

    
    public sceneMainInfomation: SceneMainInfomation;

    public init(): void {
        var container: createjs.Container = new createjs.Container;

        this.addChild(container);
        var hit: createjs.Shape = new createjs.Shape();
        hit.graphics.beginFill("#FFF").drawRect(0, 0, 1920,1080*3);
        container.hitArea = hit;

        container.on("mousedown", function (event: createjs.MouseEvent) {

            if (SceneManager.instance().getSceneIndex() >= 10)
                return;
            SceneMain.instance().startMouseY = event.localY;
            SceneMain.instance().startY = SceneMain.instance().y;

        });

        container.on("pressmove", function (event: createjs.MouseEvent) {
            if (SceneManager.instance().getSceneIndex() > 2)
                return;

            SceneMain.instance().scrollToY(event.localY);
        });

        container.on("pressup", function (event: createjs.MouseEvent) {
            if (SceneManager.instance().getSceneIndex() > 2)
                return;
            
            SceneMain.instance().scrollToY(event.localY);
            var dy: number = SceneMain.instance().startMouseY - event.localY;

            SceneMain.instance().startMouseY = 0;

            if (Math.abs(dy) < 50) {
                if (SceneMain.instance().y > -540) {
                    SceneManager.instance().nextSceneIndex(0);
                    //createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: 0 }, 1000, createjs.Ease.circOut);
                } else if (SceneMain.instance().y > -540 - 1080) {
                    SceneManager.instance().nextSceneIndex(1);
                    
                    //createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: -1080 }, 1000, createjs.Ease.circOut);
                } else if (SceneMain.instance().y > -540 - 1080 - 1080) {
                    SceneManager.instance().nextSceneIndex(2);
                    //createjs.Tween.get(SceneMain.instance(), { loop: false }).to({ y: -2160 }, 1000, createjs.Ease.circOut);
                }
                return;
            }

            if (dy < 0) {

                SceneManager.instance().nextSceneIndex(Math.max(0, SceneManager.instance().getSceneIndex() - 1));

            } else {

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

    }

    public startScene(): void {
    }

    public stopScene(): void {
    }

    public clearScene(): void {
        super.clearScene();

    }

    public playScene(): void {
    }


} 