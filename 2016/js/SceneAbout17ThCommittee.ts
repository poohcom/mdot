/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class SceneAbout17ThCommittee extends Scene {

    private static _instance: SceneAbout17ThCommittee = null;
    public static instance(): SceneAbout17ThCommittee {
        if (SceneAbout17ThCommittee._instance === null) {
            SceneAbout17ThCommittee._instance = new SceneAbout17ThCommittee();
        }
        return SceneAbout17ThCommittee._instance;
    }

    constructor() {
        super();

        if (SceneAbout17ThCommittee._instance) {
            throw new Error("Error: Config instead of new.");
        }
        SceneAbout17ThCommittee._instance = this;
        this.init();
    }

    public init(): void {

        var spriteSheet0: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_6_17x10")],
            "frames": { "regX": 0, "height": 520/10, "count": 160, "regY": 0, "width": 969/17 },
            "animations": {
                "ani": [0, 159, "ani", 1]
            }
        });

        var spriteSheet1: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_1_20x8")],
            "frames": { "regX": 0, "height": 368 / 8, "count": 160, "regY": 0, "width": 1000 / 20 },
            "animations": {
                "ani": [0, 159, "ani", 1]
            }
        });

        var spriteSheet2: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_2_17x6")],
            "frames": { "regX": 0, "height": 294 / 6, "count": 95, "regY": 0, "width": 969 / 17 },
            "animations": {
                "ani": [0, 94, "ani", 1]
            }
        });

        var spriteSheet3: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_3_20x7")],
            "frames": { "regX": 0, "height": 357 / 7, "count": 123, "regY": 0, "width": 1020 / 20 },
            "animations": {
                "ani": [0, 122, "ani", 1]
            }
        });


        var spriteSheet4: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_4_18x8")],
            "frames": { "regX": 0, "height": 416 / 8, "count": 142, "regY": 0, "width": 990 / 18 },
            "animations": {
                "ani": [0, 141, "ani", 1]
            }
        });

        var spriteSheet5: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("committee_5_19x7")],
            "frames": { "regX": 0, "height": 322 / 7, "count": 128, "regY": 0, "width": 988 / 19 },
            "animations": {
                "ani": [0, 127, "ani", 1]
            }
        });
        
        var grant0: createjs.Sprite = new createjs.Sprite(spriteSheet0, "ani");
        grant0.x = 573;
        grant0.y = 352;
        this.addChild(grant0);


        var grant1: createjs.Sprite = new createjs.Sprite(spriteSheet1, "ani");
        grant1.x = 977 + 10;
        grant1.y = 436;
        this.addChild(grant1);

        var grant2: createjs.Sprite = new createjs.Sprite(spriteSheet3, "ani");
        grant2.x = 1369 + 10;
        grant2.y = 353;
        this.addChild(grant2);

        var grant3: createjs.Sprite = new createjs.Sprite(spriteSheet3, "ani");
        grant3.x = 428 + 10;
        grant3.y = 598;
        this.addChild(grant3);

        var grant4: createjs.Sprite = new createjs.Sprite(spriteSheet2, "ani");
        grant4.x = 757 + 10;
        grant4.y = 704;
        this.addChild(grant4);


        var grant5: createjs.Sprite = new createjs.Sprite(spriteSheet4, "ani");
        grant5.x = 1232 + 10;
        grant5.y = 694;
        this.addChild(grant5);


        var grant6: createjs.Sprite = new createjs.Sprite(spriteSheet5, "ani");
        grant6.x = 1547 + 10;
        grant6.y = 565;
        this.addChild(grant6);


        
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

        //var hit5: createjs.Shape = new createjs.Shape();
        //hit5.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        //grant5.hitArea = hit5;

        //var hit6: createjs.Shape = new createjs.Shape();
        //hit6.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        //grant6.hitArea = hit6;

        //grant0.stop();
        //grant1.stop();
        //grant2.stop();
        //grant3.stop();
        //grant4.stop();
        //grant5.stop();
        //grant6.stop();


        //grant0.on("mouseover", function (event: createjs.MouseEvent) {
        //    (<createjs.Sprite>event.currentTarget).play();
        //});

        //grant0.on("mouseout", function (event: createjs.MouseEvent) {
        //    (<createjs.Sprite>event.currentTarget).stop();
        //});


        //grant1.on("mouseover", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
        //    (<createjs.Sprite>event.currentTarget).play();
        //});

        //grant1.on("mouseout", function (event: createjs.MouseEvent) {
        //    (<createjs.Sprite>event.currentTarget).stop();
        //});

        //grant2.on("mouseover", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
        //    (<createjs.Sprite>event.currentTarget).play();
        //});

        //grant2.on("mouseout", function (event: createjs.MouseEvent) {
        //    (<createjs.Sprite>event.currentTarget).stop();
        //});

        //grant3.on("mouseover", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
        //    (<createjs.Sprite>event.currentTarget).play();
        //});

        //grant3.on("mouseout", function (event: createjs.MouseEvent) {
        //    (<createjs.Sprite>event.currentTarget).stop();
        //});

        //grant4.on("mouseover", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
        //    (<createjs.Sprite>event.currentTarget).play();
        //});

        //grant4.on("mouseout", function (event: createjs.MouseEvent) {
        //    (<createjs.Sprite>event.currentTarget).stop();
        //});

        //grant5.on("mouseover", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
        //    (<createjs.Sprite>event.currentTarget).play();
        //});

        //grant5.on("mouseout", function (event: createjs.MouseEvent) {
        //    (<createjs.Sprite>event.currentTarget).stop();
        //});


        //grant6.on("mouseover", function (event: createjs.MouseEvent) {
        //    //(<createjs.Sprite>event.currentTarget).gotoAndPlay("ani");
        //    (<createjs.Sprite>event.currentTarget).play();
        //});

        //grant6.on("mouseout", function (event: createjs.MouseEvent) {
        //    (<createjs.Sprite>event.currentTarget).stop();
        //});

        this.createText(Config.FONT_TYPE_BOLD, "정혜승", 587, 262);
        this.createText(Config.FONT_TYPE_BOLD, "강민정", 991, 376);
        this.createText(Config.FONT_TYPE_BOLD, "방선경", 1383, 291);
        this.createText(Config.FONT_TYPE_BOLD, "정다정", 444, 537);
        this.createText(Config.FONT_TYPE_BOLD, "배은영", 771, 642);
        this.createText(Config.FONT_TYPE_BOLD, "홍정원", 1247, 633);
        this.createText(Config.FONT_TYPE_BOLD, "장지영", 1560, 506);


        this.createText(Config.FONT_TYPE_NORMAL, "지도교수", 582 , 289);
        this.createText(Config.FONT_TYPE_NORMAL, "hess@dongduk.ac.kr", 538 ,316 );
        //this.createText(Config.FONT_TYPE_NORMAL, "졸업준비위원장", 968, 376);
        this.createText(Config.FONT_TYPE_NORMAL, "nikmaxive@naver.com", 940 , 402);
        this.createText(Config.FONT_TYPE_NORMAL, "bsk0528@naver.com",1334 , 318);
        this.createText(Config.FONT_TYPE_NORMAL, "thejjj33@naver.com", 397, 564);
        this.createText(Config.FONT_TYPE_NORMAL, "pencilbb@naver.com", 724, 670);
        this.createText(Config.FONT_TYPE_NORMAL, "hjewn@naver.com", 1207, 660 );
        this.createText(Config.FONT_TYPE_NORMAL, "255222147@naver.com", 1506 , 533 );
        this.createText(Config.FONT_TYPE_NORMAL, "SCRIPT", 1503 , 794 );
        this.createText(Config.FONT_TYPE_NORMAL, "SOUND", 1503,  829);
        this.createText(Config.FONT_TYPE_NORMAL, "예비졸준위", 1503,  865 );
        this.createText(Config.FONT_TYPE_NORMAL, "폰트제공", 1503, 900);
        this.createText(Config.FONT_TYPE_NORMAL, "장원준", 1611 , 794);
        this.createText(Config.FONT_TYPE_NORMAL, "정재민", 1611 , 829);
        this.createText(Config.FONT_TYPE_NORMAL, "김수희 남지연 이지은", 1611,865 );
        this.createText(Config.FONT_TYPE_NORMAL, "YOONDESIGN", 1611, 900);
        this.createText(Config.FONT_TYPE_NORMAL, "_윤고딕700WEBFONT", 1611, 930 );
        


        var title: createjs.Bitmap = new createjs.Bitmap(this.getTex("4_3_17th_committee_typo"));
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


