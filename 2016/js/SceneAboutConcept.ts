/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class SceneAboutConcept extends Scene {

    private static _instance: SceneAboutConcept = null;
    public static instance(): SceneAboutConcept {
        if (SceneAboutConcept._instance === null) {
            SceneAboutConcept._instance = new SceneAboutConcept();
        }
        return SceneAboutConcept._instance;
    }

    constructor() {
        super();

        if (SceneAboutConcept._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAboutConcept._instance = this;
        this.init();
    }

    public init(): void {
        var concept: createjs.Bitmap = new createjs.Bitmap(this.getTex("concept"));
        concept.x = 567;
        concept.y = 225;
        this.addChild(concept);



        //var mdot_logo: createjs.Bitmap = new createjs.Bitmap(this.getTex("mdot_logo"));
        //mdot_logo.x = 1111;
        //mdot_logo.y = 503;
        //this.addChild(mdot_logo);


        var media_concept: createjs.Bitmap = new createjs.Bitmap(this.getTex("about media_concept"));
        media_concept.x = 1111;
        media_concept.y = 665;
        this.addChild(media_concept);


        var mdot_logo: createjs.Bitmap = new createjs.Bitmap(this.getTex("about media _17th_concept_mdot Logo-02"));
        mdot_logo.x = 1085;
        mdot_logo.y = 503;
        this.addChild(mdot_logo);


        var title: createjs.Bitmap = new createjs.Bitmap(this.getTex("4_1_concept_typo"));
        title.x = 394;
        title.y = 110;
        this.addChild(title);


    }

    public updateMouseXY(mx: number, my: number): void {
    }

    public startScene(): void {

        this.alpha = 0;
        createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);

    }

    public stopScene(): void {
        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
    }

    public getStopSceneTime(): number {
        return 2;
    }

}


