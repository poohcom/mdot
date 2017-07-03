/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class SceneAboutMediaDesign extends Scene {

    private static _instance: SceneAboutMediaDesign = null;
    public static instance(): SceneAboutMediaDesign {
        if (SceneAboutMediaDesign._instance === null) {
            SceneAboutMediaDesign._instance = new SceneAboutMediaDesign();
        }
        return SceneAboutMediaDesign._instance;
    }

    constructor() {
        super();

        if (SceneAboutMediaDesign._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAboutMediaDesign._instance = this;
        this.init();
    }

    public init(): void {
        var about_text:createjs.Bitmap = new createjs.Bitmap(this.getTex("about_text"));
        about_text.x = 486;
        about_text.y = 284;
        this.addChild(about_text);


        var title: createjs.Bitmap = new createjs.Bitmap(this.getTex("1_about_media_design_typo"));
        title.x = 394;
        title.y = 110;

        this.addChild(title);
    }

    public updateMouseXY(mx: number, my: number): void {
    }

    public startScene(): void {
        this.alpha = 0;
        //createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);
        createjs.Tween.get(this).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);
    }

    public stopScene(): void {
        this.alpha = 0;
        //createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    }

    public getStopSceneTime(): number {
        return 2;
    }

}


