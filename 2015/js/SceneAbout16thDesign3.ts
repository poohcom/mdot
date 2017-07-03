/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class SceneAbout16thDesign3 extends Scene {


    private static _instance: SceneAbout16thDesign3 = null;

    constructor() {
        super();
        if (SceneAbout16thDesign3._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thDesign3._instance = this;

        this.init();
    }

    public static instance(): SceneAbout16thDesign3 {
        if (SceneAbout16thDesign3._instance === null) {
            SceneAbout16thDesign3._instance = new SceneAbout16thDesign3();
        }
        return SceneAbout16thDesign3._instance;
    }

    public process_image1: createjs.Bitmap;
    public process_line_decoration: createjs.Bitmap;
    public date1: createjs.Bitmap;

    public init(): void {
        this.initBubble("#FFF");

        this.process_image1 = new createjs.Bitmap(this.getTex("process_image5"));
        this.process_image1.x = 311;
        this.process_image1.y = 372;
        this.addChild(this.process_image1);


        this.process_line_decoration = new createjs.Bitmap(this.getTex("process_line_decoration3"));
        this.process_line_decoration.x = (1920 - 116) / 2;
        this.process_line_decoration.y = 0;
        this.addChild(this.process_line_decoration);



        this.date1 = new createjs.Bitmap(this.getTex("spectrum_concept_typo"));
        this.date1.x = 861;
        this.date1.y = 274;
        this.addChild(this.date1);


    }

    public startScene(): void {
        this.count = 0;
        this.alpha = 1;
        //createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);
        this.addEventListener("tick", this.drawing);
    }

    public stopScene(): void {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 800, createjs.Ease.linear);
        this.removeEventListener("tick", this.drawing);
    }


    public drawing(event: Event): void {
        (<SceneAbout16thDesign3>event.target).drawLines();
    }

    public drawLines(): void {
        this.count++;

        this.updateBubble();
    }



} 