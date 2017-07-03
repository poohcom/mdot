/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />


class SceneMainInfomation extends Scene {


    private static _instance: SceneMainInfomation = null;

    constructor() {
        super();
        if (SceneMainInfomation._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneMainInfomation._instance = this;
        this.init();
    }

    public static instance(): SceneMainInfomation {
        if (SceneMainInfomation._instance === null) {
            SceneMainInfomation._instance = new SceneMainInfomation();
        }
        return SceneMainInfomation._instance;
    }

    public close_button: Button;
    public exhibition_info: createjs.Bitmap;
    public light: createjs.Bitmap;

    public init(): void {

        var close_button: Button = new Button(this.getTex("X"), 45, 45);
        close_button.x = 1679;
        close_button.y = 185;
        close_button.on("click", function () { SceneManager.instance().closeInfomation(); });
        close_button.regX = 12;
        close_button.regY = 12;


        close_button.on("mouseover", function () {
            SceneManager.instance().soundplay();
            if (this.rotation == 0) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 90 }, 300, createjs.Ease.circOut);
            }

        });
        close_button.on("mouseout", function () {
            if (this.rotation == 90) {
                createjs.Tween.get(this, { loop: false }).to({ rotation: 0 }, 300, createjs.Ease.circOut);
            }

        });

        this.addChild(close_button);


        this.exhibition_info = new createjs.Bitmap(this.getTex("exhibition_info"));
        //this.exhibition_info.x = 94;
        //this.exhibition_info.y = 168;
        
        this.addChild(this.exhibition_info);

        this.light = new createjs.Bitmap(this.getTex("light"));
        this.light.x = 820-45;
        this.light.y = 475-38;
        this.addChild(this.light);


    }

    private lightTween: createjs.Tween;
    public startScene(): void {

        this.light.alpha = 0;
        this.lightTween = createjs.Tween.get(this.light, { loop: true }).to({ alpha: 1 }, 1000, createjs.Ease.linear).to({ alpha: 0 }, 1000, createjs.Ease.linear);
    }

    public stopScene(): void {
        //createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);


        createjs.Tween.removeTweens(this.lightTween);
    }

    

} 