/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class SceneAboutProfessors extends Scene {

    private static _instance: SceneAboutProfessors = null;
    public static instance(): SceneAboutProfessors {
        if (SceneAboutProfessors._instance === null) {
            SceneAboutProfessors._instance = new SceneAboutProfessors();
        }
        return SceneAboutProfessors._instance;
    }

    constructor() {
        super();

        if (SceneAboutProfessors._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAboutProfessors._instance = this;
        this.init();
    }

    public init(): void {
        var ANIMATION: createjs.Bitmap = new createjs.Bitmap(this.getTex("ANIMATION-01"));
        ANIMATION.x = 497;
        ANIMATION.y = 281;
        this.addChild(ANIMATION);


        var CONTENTS: createjs.Bitmap = new createjs.Bitmap(this.getTex("CONTENTS-01"));
        CONTENTS.x = 1222;
        CONTENTS.y = 637;
        this.addChild(CONTENTS);

        var INTERACTIVE: createjs.Bitmap = new createjs.Bitmap(this.getTex("INTERACTIVE-01"));
        INTERACTIVE.x = 941;
        INTERACTIVE.y = 431;
        this.addChild(INTERACTIVE);


        var POSTER: createjs.Bitmap = new createjs.Bitmap(this.getTex("POSTER-01"));
        POSTER.x = 647;
        POSTER.y = 699;
        this.addChild(POSTER);


        var VIDEOGRAPHY: createjs.Bitmap = new createjs.Bitmap(this.getTex("VIDEOGRAPHY-01"));
        VIDEOGRAPHY.x = 1476;
        VIDEOGRAPHY.y = 301;
        this.addChild(VIDEOGRAPHY);
        
        var spriteSheet0C: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("animation_16x9")],
            "frames": { "regX": 0, "height": 531 / 9, "count": 142, "regY": 0, "width": 1008 / 16 },
            "animations": {
                "ani": [0, 141, "ani", 1]
            }
        });

        var spriteSheet1C: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("poster_15x7")],
            "frames": { "regX": 0, "height": 385 / 7, "count": 95, "regY": 0, "width": 975 / 15 },
            "animations": {
                "ani": [0, 94, "ani", 1]
            }
        });

        var spriteSheet2C: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("inter_17x10")],
            "frames": { "regX": 0, "height": 520 / 10, "count": 160, "regY": 0, "width": 969 / 17 },
            "animations": {
                "ani": [0, 159, "ani", 1]
            }
        });


        var spriteSheet3C: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("contents_17x8")],
            "frames": { "regX": 0, "height": 416 / 8, "count": 128, "regY": 0, "width": 1003 / 17 },
            "animations": {
                "ani": [0, 127, "ani", 1]
            }
        });

        var spriteSheet4C: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("video_17x8")],
            "frames": { "regX": 0, "height": 464 / 8, "count": 123, "regY": 0, "width": 986 / 17 },
            "animations": {
                "ani": [0, 122, "ani", 1]
            }
        });

        
        //var grant0: createjs.Bitmap = new createjs.Bitmap(this.getTex("animation_stop"));
        //grant0.x = 537-10;
        //grant0.y = 376 - 10;
        
        //this.addChild(grant0);
        
        var grant0C: createjs.Sprite = new createjs.Sprite(spriteSheet0C, "ani");
        grant0C.x = 537;
        grant0C.y = 376;
//        grant0C.alpha = 0;
        this.addChild(grant0C);

        
        //var grant1: createjs.Bitmap = new createjs.Bitmap(this.getTex("poster_stop"));
        //grant1.x = 688 - 10;
        //grant1.y = 799 - 10;
        
        //this.addChild(grant1);

        var grant1C: createjs.Sprite = new createjs.Sprite(spriteSheet1C, "ani");
        grant1C.x = 688;
        grant1C.y = 799;
  //      grant1C.alpha = 0;
        this.addChild(grant1C);

        
        //var grant2: createjs.Bitmap = new createjs.Bitmap(this.getTex("interactive_stop"));
        //grant2.x = 1011 - 10;
        //grant2.y = 528 - 10;
        
        //this.addChild(grant2);

        var grant2C: createjs.Sprite = new createjs.Sprite(spriteSheet2C, "ani");
        grant2C.x = 1011;
        grant2C.y = 528;
        //grant2C.alpha = 0;
        this.addChild(grant2C);

        
        //var grant3: createjs.Bitmap = new createjs.Bitmap(this.getTex("contents_stop"));
        //grant3.x = 1341 - 10;
        //grant3.y = 745 - 10;
        
        //this.addChild(grant3);

        var grant3C: createjs.Sprite = new createjs.Sprite(spriteSheet3C, "ani");
        grant3C.x = 1341;
        grant3C.y = 745;
//        grant3C.alpha = 0;
        this.addChild(grant3C);

        
        //var grant4: createjs.Bitmap = new createjs.Bitmap(this.getTex("video_stop"));
        //grant4.x = 1519 - 10;
        //grant4.y = 400 - 10;
        
        //this.addChild(grant4);

        var grant4C: createjs.Sprite = new createjs.Sprite(spriteSheet4C, "ani");
        grant4C.x = 1519;
        grant4C.y = 400;
//        grant4C.alpha = 0;
        
        this.addChild(grant4C);


        //var hit0: createjs.Shape = new createjs.Shape();
        //hit0.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        //grant0.hitArea = hit0;


        //var hit1: createjs.Shape = new createjs.Shape();
        //hit1.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        //grant1.hitArea = hit1;


        //var hit2: createjs.Shape = new createjs.Shape();
        //hit2.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        //grant2.hitArea = hit2;


        //var hit3: createjs.Shape = new createjs.Shape();
        //hit3.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        //grant3.hitArea = hit3;


        //var hit4: createjs.Shape = new createjs.Shape();
        //hit4.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        //grant4.hitArea = hit4;

        
        //grant0.on("mouseover", function (event: createjs.MouseEvent) {
        //    grant0.alpha = 0;
        //    grant0C.alpha = 1;
            
            
        //});

        //grant0.on("mouseout", function (event: createjs.MouseEvent) {
        //    grant0.alpha = 1;
        //    grant0C.alpha = 0;
        //});

        //grant1.on("mouseover", function (event: createjs.MouseEvent) {

        //    grant1.alpha = 0;
        //    grant1C.alpha = 1;
        //});

        //grant1.on("mouseout", function (event: createjs.MouseEvent) {
        //    grant1.alpha = 1;
        //    grant1C.alpha = 0;
        //});

        //grant2.on("mouseover", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
        //    grant2.alpha = 0;
        //    grant2C.alpha = 1;
        //});

        //grant2.on("mouseout", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).stop();
        //    grant2.alpha = 1;
        //    grant2C.alpha = 0;
        //});

        //grant3.on("mouseover", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
        //    grant3.alpha = 0;
        //    grant3C.alpha = 1;
        //});

        //grant3.on("mouseout", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).stop();
        //    grant3.alpha = 1;
        //    grant3C.alpha = 0;
        //});

        //grant4.on("mouseover", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
        //    grant4.alpha = 0;
        //    grant4C.alpha = 1;
        //});

        //grant4.on("mouseout", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).stop();
        //    grant4.alpha = 1;
        //    grant4C.alpha = 0;
        //});



        var title: createjs.Bitmap = new createjs.Bitmap(this.getTex("2_professors_typo"));
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


//class SceneAboutProfessors extends Scene {

//    private static _instance: SceneAboutProfessors = null;
//    public static instance(): SceneAboutProfessors {
//        if (SceneAboutProfessors._instance === null) {
//            SceneAboutProfessors._instance = new SceneAboutProfessors();
//        }
//        return SceneAboutProfessors._instance;
//    }

//    constructor() {
//        super();

//        if (SceneAboutProfessors._instance) {
//            throw new Error("Error: Config instead of new.");
//        }
//        SceneAboutProfessors._instance = this;
//        this.init();
//    }

//    public init(): void {
//        var ANIMATION: createjs.Bitmap = new createjs.Bitmap(this.getTex("ANIMATION-01"));
//        ANIMATION.x = 497;
//        ANIMATION.y = 281;
//        this.addChild(ANIMATION);


//        var CONTENTS: createjs.Bitmap = new createjs.Bitmap(this.getTex("CONTENTS-01"));
//        CONTENTS.x = 1222;
//        CONTENTS.y = 637;
//        this.addChild(CONTENTS);

//        var INTERACTIVE: createjs.Bitmap = new createjs.Bitmap(this.getTex("INTERACTIVE-01"));
//        INTERACTIVE.x = 941;
//        INTERACTIVE.y = 431;
//        this.addChild(INTERACTIVE);


//        var POSTER: createjs.Bitmap = new createjs.Bitmap(this.getTex("POSTER-01"));
//        POSTER.x = 647;
//        POSTER.y = 699;
//        this.addChild(POSTER);


//        var VIDEOGRAPHY: createjs.Bitmap = new createjs.Bitmap(this.getTex("VIDEOGRAPHY-01"));
//        VIDEOGRAPHY.x = 1476;
//        VIDEOGRAPHY.y = 301;
//        this.addChild(VIDEOGRAPHY);

//        var spriteSheet0: createjs.SpriteSheet = new createjs.SpriteSheet({
//            framerate: 30,
//            "images": [this.getTex("animation_mono_14x19")],
//            "frames": { "regX": 0, "height": 1235 / 19, "count": 260, "regY": 0, "width": 994 / 14 },
//            "animations": {
//                "ani": [0, 259, "ani", 1]
//            }
//        });

//        var spriteSheet0C: createjs.SpriteSheet = new createjs.SpriteSheet({
//            framerate: 30,
//            "images": [this.getTex("animation_color_14x19")],
//            "frames": { "regX": 0, "height": 1235 / 19, "count": 260, "regY": 0, "width": 994 / 14 },
//            "animations": {
//                "ani": [0, 259, "ani", 1]
//            }
//        });


//        var spriteSheet1: createjs.SpriteSheet = new createjs.SpriteSheet({
//            framerate: 30,
//            "images": [this.getTex("poster_mono_12x19")],
//            "frames": { "regX": 0, "height": 1292 / 19, "count": 222, "regY": 0, "width": 948 / 12 },
//            "animations": {
//                "ani": [0, 221, "ani", 1]
//            }
//        });

//        var spriteSheet1C: createjs.SpriteSheet = new createjs.SpriteSheet({
//            framerate: 30,
//            "images": [this.getTex("poster_color_12x19")],
//            "frames": { "regX": 0, "height": 1292 / 19, "count": 222, "regY": 0, "width": 948 / 12 },
//            "animations": {
//                "ani": [0, 221, "ani", 1]
//            }
//        });



//        var spriteSheet2: createjs.SpriteSheet = new createjs.SpriteSheet({
//            framerate: 30,
//            "images": [this.getTex("interact_mono_14x21")],
//            "frames": { "regX": 0, "height": 1470 / 21, "count": 281, "regY": 0, "width": 1022 / 14 },
//            "animations": {
//                "ani": [0, 280, "ani", 1]
//            }
//        });

//        var spriteSheet2C: createjs.SpriteSheet = new createjs.SpriteSheet({
//            framerate: 30,
//            "images": [this.getTex("interact_color_14x21")],
//            "frames": { "regX": 0, "height": 1470 / 21, "count": 281, "regY": 0, "width": 1022 / 14 },
//            "animations": {
//                "ani": [0, 280, "ani", 1]
//            }
//        });

//        var spriteSheet3: createjs.SpriteSheet = new createjs.SpriteSheet({
//            framerate: 30,
//            "images": [this.getTex("contents_mono_14x18")],
//            "frames": { "regX": 0, "height": 1242 / 18, "count": 241, "regY": 0, "width": 966 / 14 },
//            "animations": {
//                "ani": [0, 240, "ani", 1]
//            }
//        });

//        var spriteSheet3C: createjs.SpriteSheet = new createjs.SpriteSheet({
//            framerate: 30,
//            "images": [this.getTex("contents_color_14x18")],
//            "frames": { "regX": 0, "height": 1242 / 18, "count": 241, "regY": 0, "width": 966 / 14 },
//            "animations": {
//                "ani": [0, 240, "ani", 1]
//            }
//        });


//        var spriteSheet4: createjs.SpriteSheet = new createjs.SpriteSheet({
//            framerate: 30,
//            "images": [this.getTex("video_mono_10x32")],
//            "frames": { "regX": 0, "height": 2240 / 32, "count": 315, "regY": 0, "width": 980 / 10 },
//            "animations": {
//                "ani": [0, 314, "ani", 1]
//            }
//        });

//        var spriteSheet4C: createjs.SpriteSheet = new createjs.SpriteSheet({
//            framerate: 30,
//            "images": [this.getTex("video_color_10x32")],
//            "frames": { "regX": 0, "height": 2240 / 32, "count": 315, "regY": 0, "width": 980 / 10 },
//            "animations": {
//                "ani": [0, 314, "ani", 1]
//            }
//        });

//        var grant0: createjs.Sprite = new createjs.Sprite(spriteSheet0, "ani");
//        grant0.x = 537;
//        grant0.y = 376;
//        grant0.stop();
//        this.addChild(grant0);

//        var grant0C: createjs.Sprite = new createjs.Sprite(spriteSheet0C, "ani");
//        grant0C.x = 537;
//        grant0C.y = 376;
//        grant0C.alpha = 0;
//        this.addChild(grant0C);

//        var grant1: createjs.Sprite = new createjs.Sprite(spriteSheet1, "ani");
//        grant1.x = 688;
//        grant1.y = 799;
//        grant1.stop();
//        this.addChild(grant1);

//        var grant1C: createjs.Sprite = new createjs.Sprite(spriteSheet1C, "ani");
//        grant1C.x = 688;
//        grant1C.y = 799;
//        grant1C.alpha = 0;
//        this.addChild(grant1C);

//        var grant2: createjs.Sprite = new createjs.Sprite(spriteSheet2, "ani");
//        grant2.x = 1011;
//        grant2.y = 528;
//        grant2.stop();
//        this.addChild(grant2);

//        var grant2C: createjs.Sprite = new createjs.Sprite(spriteSheet2C, "ani");
//        grant2C.x = 1011;
//        grant2C.y = 528;
//        grant2C.alpha = 0;
//        this.addChild(grant2C);

//        var grant3: createjs.Sprite = new createjs.Sprite(spriteSheet3, "ani");
//        grant3.x = 1341;
//        grant3.y = 745;
//        grant3.stop();
//        this.addChild(grant3);

//        var grant3C: createjs.Sprite = new createjs.Sprite(spriteSheet3C, "ani");
//        grant3C.x = 1341;
//        grant3C.y = 745;
//        grant3C.alpha = 0;
//        this.addChild(grant3C);

//        var grant4: createjs.Sprite = new createjs.Sprite(spriteSheet4, "ani");
//        grant4.x = 1519;
//        grant4.y = 400;
//        grant4.stop();
//        this.addChild(grant4);

//        var grant4C: createjs.Sprite = new createjs.Sprite(spriteSheet4C, "ani");
//        grant4C.x = 1519;
//        grant4C.y = 400;
//        grant4C.alpha = 0;

//        this.addChild(grant4C);


//        var hit0: createjs.Shape = new createjs.Shape();
//        hit0.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
//        grant0.hitArea = hit0;


//        var hit1: createjs.Shape = new createjs.Shape();
//        hit1.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
//        grant1.hitArea = hit1;


//        var hit2: createjs.Shape = new createjs.Shape();
//        hit2.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
//        grant2.hitArea = hit2;


//        var hit3: createjs.Shape = new createjs.Shape();
//        hit3.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
//        grant3.hitArea = hit3;


//        var hit4: createjs.Shape = new createjs.Shape();
//        hit4.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
//        grant4.hitArea = hit4;


//        grant0.on("mouseover", function (event: createjs.MouseEvent) {
//            //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
//            grant0.alpha = 0;
//            grant0C.alpha = 1;

//            grant0C.gotoAndPlay(grant0.currentFrame);
//        });

//        grant0.on("mouseout", function (event: createjs.MouseEvent) {
//            //(<createjs.Sprite>event.currentTarget).stop();
//            grant0.alpha = 1;
//            grant0C.alpha = 0;

//            grant0.currentFrame = grant0C.currentFrame;

//            grant0.gotoAndStop(grant0C.currentFrame);
//        });

//        grant1.on("mouseover", function (event: createjs.MouseEvent) {
//            //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");

//            grant1.alpha = 0;
//            grant1C.alpha = 1;

//            grant1C.gotoAndPlay(grant1.currentFrame);
//        });

//        grant1.on("mouseout", function (event: createjs.MouseEvent) {
//            //(<createjs.Sprite>event.currentTarget).stop();
//            grant1.alpha = 1;
//            grant1C.alpha = 0;

//            grant1.gotoAndStop(grant1C.currentFrame);
//        });

//        grant2.on("mouseover", function (event: createjs.MouseEvent) {
//            //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
//            grant2.alpha = 0;
//            grant2C.alpha = 1;
//            grant2C.gotoAndPlay(grant2.currentFrame);
//        });

//        grant2.on("mouseout", function (event: createjs.MouseEvent) {
//            //(<createjs.Sprite>event.currentTarget).stop();
//            grant2.alpha = 1;
//            grant2C.alpha = 0;

//            grant2.gotoAndStop(grant2C.currentFrame);
//        });

//        grant3.on("mouseover", function (event: createjs.MouseEvent) {
//            //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
//            grant3.alpha = 0;
//            grant3C.alpha = 1;
//            grant3C.gotoAndPlay(grant3.currentFrame);
//        });

//        grant3.on("mouseout", function (event: createjs.MouseEvent) {
//            //(<createjs.Sprite>event.currentTarget).stop();
//            grant3.alpha = 1;
//            grant3C.alpha = 0;
//            grant3.gotoAndStop(grant3C.currentFrame);
//        });

//        grant4.on("mouseover", function (event: createjs.MouseEvent) {
//            //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
//            grant4.alpha = 0;
//            grant4C.alpha = 1;
//            grant4C.gotoAndPlay(grant4.currentFrame);
//        });

//        grant4.on("mouseout", function (event: createjs.MouseEvent) {
//            //(<createjs.Sprite>event.currentTarget).stop();
//            grant4.alpha = 1;
//            grant4C.alpha = 0;
//            grant4.gotoAndStop(grant4C.currentFrame);
//        });



//        var title: createjs.Bitmap = new createjs.Bitmap(this.getTex("2_professors_typo"));
//        title.x = 394;
//        title.y = 110;
//        this.addChild(title);


//    }

//    public updateMouseXY(mx: number, my: number): void {
//    }

//    public startScene(): void {

//        this.alpha = 0;
//        createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 1 }, (1) * 1000, createjs.Ease.linear);

//    }

//    public stopScene(): void {
//        createjs.Tween.get(this).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
//    }

//    public getStopSceneTime(): number {
//        return 2;
//    }

//}


