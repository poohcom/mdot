/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class SceneAbout16thConceptPage1 extends Scene {


    private static _instance: SceneAbout16thConceptPage1 = null;

    constructor() {
        super();
        if (SceneAbout16thConceptPage1._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thConceptPage1._instance = this;


        //this.assets.loadManifest([
        //    { id: "image_decoration", src: "assets/about_media_design/4_16th_concept/image_decoration.png" },
        //    { id: "text_decoration", src: "assets/about_media_design/4_16th_concept/text_decoration.png" }
        //    ]);

        this.init();
    }

    public static instance(): SceneAbout16thConceptPage1 {
        if (SceneAbout16thConceptPage1._instance === null) {
            SceneAbout16thConceptPage1._instance = new SceneAbout16thConceptPage1();
        }
        return SceneAbout16thConceptPage1._instance;
    }

    public image_text_decoration: createjs.Bitmap;
    public text_decoration: createjs.Bitmap;
    
    

    public init(): void {
        this.image_text_decoration = new createjs.Bitmap(this.getTex("image_decoration"));
        this.image_text_decoration.x = 579;
        this.image_text_decoration.y = 164;
        this.addChild(this.image_text_decoration);

        this.text_decoration = new createjs.Bitmap(this.getTex("text_decoration"));
        this.text_decoration.x = 523;
        this.text_decoration.y = 750;
        this.addChild(this.text_decoration);
    }

    public startScene(): void {
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        
    }

    public stopScene(): void {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
    }

} 