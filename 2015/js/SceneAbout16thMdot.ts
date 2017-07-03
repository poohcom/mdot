/// <reference path="../Scripts/typings/createjs/createjs.d.ts" />
/// <reference path="../Scripts/typings/easeljs/easeljs.d.ts" />
/// <reference path="../Scripts/typings/preloadjs/preloadjs.d.ts" />


class SceneAbout16thMdot extends Scene {

    private static _instance: SceneAbout16thMdot = null;

    constructor() {
        super();
        if (SceneAbout16thMdot._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout16thMdot._instance = this;

        this.init();
    }

    public static instance(): SceneAbout16thMdot {
        if (SceneAbout16thMdot._instance === null) {
            SceneAbout16thMdot._instance = new SceneAbout16thMdot();
        }
        return SceneAbout16thMdot._instance;
    }

    public image_decoration: createjs.Bitmap;
    public image_decoration_text: createjs.Bitmap;

    public mdot_text: createjs.Bitmap;

    

    public init(): void {
        this.image_decoration = new createjs.Bitmap(this.getTex("image_decoration"));
        this.image_decoration.x = 358;
        this.image_decoration.y = 241;
        this.addChild(this.image_decoration);

        this.image_decoration_text = new createjs.Bitmap(this.getTex("image_decoration_text"));
        this.image_decoration_text.x = 1134;
        this.image_decoration_text.y = 326;
        this.addChild(this.image_decoration_text);

        this.mdot_text = new createjs.Bitmap(this.getTex("16thmdot_text"));
        this.mdot_text.x = 1134;
        this.mdot_text.y = 571;
        this.addChild(this.mdot_text);
    }

    public startScene(): void {
        this.alpha = 0;
        createjs.Tween.get(this, { loop: false }).wait(300).to({ alpha: 1 }, 500, createjs.Ease.linear);

    }

    public stopScene(): void {
        createjs.Tween.get(this, { loop: false }).to({ alpha: 0 }, 300, createjs.Ease.linear);
    }

} 