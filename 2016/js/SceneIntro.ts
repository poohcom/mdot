/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class SceneIntro extends Scene {

    private static _instance: SceneIntro = null;
    public static instance(): SceneIntro {
        if (SceneIntro._instance === null) {
            SceneIntro._instance = new SceneIntro();
        }
        return SceneIntro._instance;
    }

    constructor() {
        super();

        if (SceneIntro._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneIntro._instance = this;
        this.init();
    }
    
    private INTRO_LOGO: createjs.Bitmap;
    private intro_media_design: createjs.Bitmap;
    
    
    private D: createjs.Bitmap;
    private intro_info: createjs.Bitmap; // private text2_2: createjs.Bitmap;
    private Y: createjs.Bitmap;

    private M: createjs.Bitmap;
    private N1: createjs.Bitmap;
    private N2: createjs.Bitmap;

    
    
    
    
    private text4_1: createjs.Bitmap;
    private text4_2: createjs.Bitmap;
    private text5_1: createjs.Bitmap;
    private text5_2: createjs.Bitmap;
    private text6_off: createjs.Bitmap;
    private text6_on: createjs.Bitmap;


    public rect1: Rect;
    public rect2: Rect;
    public rect3: Rect;


    private copyright: createjs.Bitmap;

    public init(): void {
        
        this.INTRO_LOGO = new createjs.Bitmap(this.getTex("INTRO_LOGO"));
        this.INTRO_LOGO.x = 727;
        this.INTRO_LOGO.y = 299;
        this.addChild(this.INTRO_LOGO);

        this.intro_media_design = new createjs.Bitmap(this.getTex("intro_media_design"));
        this.intro_media_design.x = 790;
        this.intro_media_design.y = 487;
        this.addChild(this.intro_media_design);
        
        this.D = new createjs.Bitmap(this.getTex("D"));
        this.D.x = 746;
        this.D.y = 568;
        this.addChild(this.D);


        this.intro_info = new createjs.Bitmap(this.getTex("intro_info"));
        this.intro_info.x = 801;
        this.intro_info.y = 569;
        this.addChild(this.intro_info);

        this.Y = new createjs.Bitmap(this.getTex("Y"));
        this.Y.x = 1168;
        this.Y.y = 568;
        this.addChild(this.Y);


        


        this.M = new createjs.Bitmap(this.getTex("M"));
        this.M.x = 847;
        this.M.y = 595;
        this.addChild(this.M);
        
        this.N1 = new createjs.Bitmap(this.getTex("n"));
        this.N1.x = 770;
        this.N1.y = 595;
        this.addChild(this.N1);

        this.N2 = new createjs.Bitmap(this.getTex("n"));
        this.N2.x = 1141;
        this.N2.y = 622;
        this.addChild(this.N2);






        this.text5_1 = new createjs.Bitmap(this.getTex("JUNE7"));
        this.text5_1.x = 760;
        this.text5_1.y = 698;
        this.addChild(this.text5_1);

        this.rect1 = new Rect();
        this.rect1.x = 917;
        this.rect1.y = 705;
        this.rect1.init(0, 1, "#939393");
        this.addChild(this.rect1);

        this.text5_2 = new createjs.Bitmap(this.getTex("JUNE2_2016"));
        this.text5_2.x = 987;
        this.text5_2.y = 698;
        this.addChild(this.text5_2);



        this.rect3 = new Rect();
        this.rect3.x = 957 - 98;
        this.rect3.y = 774;
        this.rect3.init(196, 47, "#adadad", true, true);
        this.rect3.w = 0;
        this.rect3.alpha = 0;
        this.addChild(this.rect3);

        this.rect2 = new Rect();

        var mask: createjs.Shape = new createjs.Shape();
        mask.graphics.beginFill("#000").drawRect(0, 0, 196, 47);

        this.rect2.hitArea = mask;


        this.rect2.x = 957;
        this.rect2.y = 774;
        this.rect2.init(0, 47, "#7a7a7a");

        this.addChild(this.rect2);
        
        this.text6_off = new createjs.Bitmap(this.getTex("EXPLORE_OFF"));
        this.text6_off.x = 903;
        this.text6_off.y = 789;
        this.addChild(this.text6_off);

        this.text6_on = new createjs.Bitmap(this.getTex("EXPLORE_ON"));
        this.text6_on.x = 903;
        this.text6_on.y = 789;
        this.text6_on.visible = false;
        this.addChild(this.text6_on);

        this.rect2.on("mouseover", function (event: createjs.MouseEvent) {
            callIn();
        });

        this.rect2.on("mouseout", function (event: createjs.MouseEvent) {
            callOut();
        });

        var THIS: SceneIntro = this;
        function callIn(): void {
            THIS.rect3.alpha = 1;
            createjs.Tween.get(THIS.rect3).to({ w: 196 }, 500, createjs.Ease.linear);
            THIS.text6_off.visible = false;
            THIS.text6_on.visible = true;
        }
        function callOut(): void {
            createjs.Tween.get(THIS.rect3).to({ w: 0 }, 500, createjs.Ease.linear).call(callFadeOut);
            

            THIS.text6_off.visible = true;
            THIS.text6_on.visible = false;
        }
        function callFadeOut(): void {
            THIS.rect3.alpha = 0;
        }

        this.rect2.on("click", function (event: createjs.MouseEvent) {
            
            SceneManager.instance().nextSceneIndex(SceneManager.MAIN);
        });


        this.copyright = new createjs.Bitmap(this.getTex("copyright"));
        this.copyright.x = 678;
        this.copyright.y = 1026;
        this.addChild(this.copyright);



        
    }


    public startScene(): void {
        Scene3DManager.instance().isStop = true;

        this.INTRO_LOGO.alpha = 0;
        createjs.Tween.get(this.INTRO_LOGO).to({ alpha: 1 }, 2000, createjs.Ease.linear);

        this.D.alpha = 0;
        createjs.Tween.get(this.D).wait(1.6 * 1000).to({ alpha: 1 }, (4.3 - 1.6) * 1000, createjs.Ease.linear);
        this.D.x = 746;
        createjs.Tween.get(this.D).wait(1.14 * 1000).to({ x: 784 }, (4.6 - 1.14) * 1000, createjs.Ease.linear);

        this.intro_info.alpha = 0;

        createjs.Tween.get(this.intro_info).wait(1.54 * 1000).to({ alpha: 1 }, (3.48 - 1.54) * 1000, createjs.Ease.linear);


        this.Y.alpha = 0;
        createjs.Tween.get(this.Y).wait(1.6 * 1000).to({ alpha: 1 }, (4.3 - 1.6) * 1000, createjs.Ease.linear);

        this.Y.x = 1168;
        createjs.Tween.get(this.Y).wait(1.14 * 1000).to({ x: 1130 }, (4.48 - 1.14) * 1000, createjs.Ease.linear);


        this.M.alpha = 0;
        createjs.Tween.get(this.M).wait(2.18 * 1000).to({ alpha: 1 }, (4.48 - 2.18) * 1000, createjs.Ease.linear);
        this.M.x = 847;
        createjs.Tween.get(this.M).wait(2.18 * 1000).to({ x: 887 }, (4.48 - 2.18) * 1000, createjs.Ease.linear);



     
        
        this.N1.alpha = 0;
        createjs.Tween.get(this.N1).wait(2.24 * 1000).to({ alpha: 1 }, (4.48 - 2.24) * 1000, createjs.Ease.linear);
        this.N1.x = 1065;
        createjs.Tween.get(this.N1).wait(2.24 * 1000).to({ x: 1032 }, (4.48 - 2.24) * 1000, createjs.Ease.linear);


        this.N2.alpha = 0;
        createjs.Tween.get(this.N2).wait(2.72 * 1000).to({ alpha: 1 }, (5 - 2.72) * 1000, createjs.Ease.linear);

        this.N2.x = 1141;
        createjs.Tween.get(this.N2).wait(2.72 * 1000).to({ x: 1101 }, (5 - 2.72) * 1000, createjs.Ease.linear);


        this.text5_1.alpha = 0;
        createjs.Tween.get(this.text5_1).wait(3.3 * 1000).to({ alpha: 1 }, (5.3 - 3.3) * 1000, createjs.Ease.linear);
        this.text5_1.x = 756;
        
        createjs.Tween.get(this.text5_1).wait(3.3 * 1000).to({ x: 795 }, (5.3 - 3.3) * 1000, createjs.Ease.linear);


        this.rect1.x = 917;
        this.rect1.w = 1;
        createjs.Tween.get(this.rect1).wait(3.3 * 1000).to({ w: 34, x: 917-17  }, (5.3 - 3.3) * 1000, createjs.Ease.linear);


        this.text5_2.alpha = 0;
        createjs.Tween.get(this.text5_2).wait(3.3 * 1000).to({ alpha: 1 }, (5.3 - 3.3) * 1000, createjs.Ease.linear);
        this.text5_2.x = 1039;
        
        createjs.Tween.get(this.text5_2).wait(3.3 * 1000).to({ x: 942 }, (5.3 - 3.3) * 1000, createjs.Ease.linear);
        
        this.rect3.alpha = 0;

        this.rect2.x = 957;
        this.rect2.w = 0;
        this.rect2.alpha = 0;
        createjs.Tween.get(this.rect2).wait(3.24* 1000).to({ alpha:1 , w: 196, x: 957-98}, (5.24 - 3.24) * 1000, createjs.Ease.linear);

        

        this.text6_off.alpha = 0;
        this.text6_on.alpha = 1;
        this.text6_on.visible = false;
        
        createjs.Tween.get(this.text6_off).wait(4.66 * 1000).to({ alpha: 1 }, (6.3 - 4.66) * 1000, createjs.Ease.linear);
        this.copyright.alpha = 0;
        createjs.Tween.get(this.copyright).to({ alpha:1 }, (2) * 1000, createjs.Ease.linear);
    }

    public getStopSceneTime(): number {
        return 43/12;
    }

    public stopScene(): void {
        Scene3DManager.instance().isStop = false;
        //createjs.Tween.get(this.text1).to({ alpha: 0 }, 1000, createjs.Ease.linear);

        createjs.Tween.get(this.D).wait(0.18 * 1000).to({ alpha: 0 }, (2.12 - 0.18) * 1000, createjs.Ease.linear);
        createjs.Tween.get(this.intro_info).wait(0.18 * 1000).to({ alpha: 0 }, (2.12 - 0.18) * 1000, createjs.Ease.linear);
        createjs.Tween.get(this.Y).wait(0.18 * 1000).to({ alpha: 0 }, (2.12 - 0.18) * 1000, createjs.Ease.linear);
        createjs.Tween.get(this.M ).wait(0.18 * 1000).to({ alpha: 0 }, (2.12 - 0.18) * 1000, createjs.Ease.linear);
        //createjs.Tween.get(this.text3_2).wait(0.18 * 1000).to({ alpha: 0 }, (2.12 - 0.18) * 1000, createjs.Ease.linear);
        createjs.Tween.get(this.N1).wait(0.18 * 1000).to({ alpha: 0 }, (2.12 - 0.18) * 1000, createjs.Ease.linear);
        
        createjs.Tween.get(this.N2).wait(0.18 * 1000).to({ alpha: 0 }, (2.12 - 0.18) * 1000, createjs.Ease.linear);

        createjs.Tween.get(this.text5_1).wait(0.24 * 1000).to({ alpha: 0 }, (2.06 - 0.24) * 1000, createjs.Ease.linear);

        createjs.Tween.get(this.rect1).wait(0.48 * 1000).to({ alpha: 0 }, (2.06 - 0.48) * 1000, createjs.Ease.linear);
        createjs.Tween.get(this.text5_2).wait(0.48 * 1000).to({ alpha: 0 }, (2.18 - 0.48) * 1000, createjs.Ease.linear);

        createjs.Tween.get(this.rect2).wait(1.06 * 1000).to({ alpha: 0, w: 0, x: 856+98 }, (1.48 - 1.06) * 1000, createjs.Ease.linear);
        createjs.Tween.get(this.text6_off).wait(1.06 * 1000).to({ alpha: 0 }, (1.48 - 1.06) * 1000, createjs.Ease.linear);
        createjs.Tween.get(this.text6_on).wait(1.06 * 1000).to({ alpha: 0 }, (1.48 - 1.06) * 1000, createjs.Ease.linear);
        
        createjs.Tween.get(this).wait(0.05 * 1000).to({ alpha: 0}, (1.02- 0.05) * 1000, createjs.Ease.linear);
        this.scrollXY(0, 0, 0, -1080, 43/12);
    }

}


