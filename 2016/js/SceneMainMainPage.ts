/// <reference path="../tsd/createjs/createjs.d.ts" />
/// <reference path="../tsd/easeljs/easeljs.d.ts" />
/// <reference path="../tsd/preloadjs/preloadjs.d.ts" />

class SceneMainMainPage extends Scene {

    private static _instance: SceneMainMainPage = null;
    public static instance(): SceneMainMainPage {
        if (SceneMainMainPage._instance === null) {
            SceneMainMainPage._instance = new SceneMainMainPage();
        }
        return SceneMainMainPage._instance;
    }

    constructor() {
        super();
        
        if (SceneMainMainPage._instance) {
            throw new Error("Error: Config instead of new.");
        }

        SceneMainMainPage._instance = this;

        this.init();
    }
    
    public Tree_stem: createjs.Bitmap;
    public treeOut: SineShape;

    public portList: Array<createjs.Container>;
    public rotateState: Boolean = true;

    public particleManager: ParticleManager;

    public init(): void {

        this.particleManager = new ParticleManager;
        this.addChild(this.particleManager);


        this.portList = new Array<createjs.Container>();
        this.Tree_stem = new createjs.Bitmap(this.getTex("Tree_stem"));
        this.addChild(this.Tree_stem);

        this.treeOut = new SineShape();
        this.treeOut.init(DataTreeOut.p, DataTreeOut.l);
        this.treeOut.alpha = 0.7;
        this.treeOut.lineSize = 0.7;
        this.addChild(this.treeOut);

        ///
        var spriteSheet0C: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("inter_17x10")],
            "frames": { "regX": 0, "height": 520 / 10, "count": 160, "regY": 0, "width": 969 / 17 },
            "animations": {
                "ani": [0, 159, "ani", 1]
            }
        });

        var spriteSheet1C: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("animation_16x9")],
            "frames": { "regX": 0, "height": 531 / 9, "count": 142, "regY": 0, "width": 1008/ 16 },
            "animations": {
                "ani": [0, 141, "ani", 1]
            }
        });


        var spriteSheet2C: createjs.SpriteSheet = new createjs.SpriteSheet({
            framerate: 12,
            "images": [this.getTex("video_17x8")],
            "frames": { "regX": 0, "height": 464 / 8, "count": 123, "regY": 0, "width": 986 / 17 },
            "animations": {
                "ani": [0, 122, "ani", 1]
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
            "images": [this.getTex("poster_15x7")],
            "frames": { "regX": 0, "height": 385 / 7, "count": 95, "regY": 0, "width": 975 / 15 },
            "animations": {
                "ani": [0, 94, "ani", 1]
            }
        });

        var group: createjs.Container;
        var up: createjs.Bitmap;
        group = new createjs.Container;
        this.addChild(group);
        this.portList.push(group);

        up = new createjs.Bitmap(this.getTex("main_-02"));
        up.x = -27;
        up.y = -60;
        group.addChild(up);

        var img0: createjs.Bitmap = new createjs.Bitmap(this.getTex("interactive_stop"));
        group.addChild(img0);

        var grant0C: createjs.Sprite = new createjs.Sprite(spriteSheet0C, "ani");
        grant0C.x = 10;
        grant0C.y = 10;
        grant0C.alpha = 0;
        group.addChild(grant0C);

        group = new createjs.Container;
        this.addChild(group);
        this.portList.push(group);

        up = new createjs.Bitmap(this.getTex("main_-03"));
        up.x = -27;
        up.y = -60;
        group.addChild(up);

        var img1: createjs.Bitmap = new createjs.Bitmap(this.getTex("animation_stop"));
        group.addChild(img1);


        var grant1C: createjs.Sprite = new createjs.Sprite(spriteSheet1C, "ani");
        grant1C.x = 10;
        grant1C.y = 10;
        grant1C.alpha = 0;

        group.addChild(grant1C);

        group = new createjs.Container;
        this.addChild(group);
        this.portList.push(group);

        up = new createjs.Bitmap(this.getTex("main_-04"));
        up.x = -27;
        up.y = -60;
        group.addChild(up);

        var img2: createjs.Bitmap = new createjs.Bitmap(this.getTex("video_stop"));
        group.addChild(img2);


        var grant2C: createjs.Sprite = new createjs.Sprite(spriteSheet2C, "ani");
        grant2C.x = 10;
        grant2C.y = 10;
        grant2C.alpha = 0;

        group.addChild(grant2C);

        group = new createjs.Container;
        this.addChild(group);
        this.portList.push(group);

        up = new createjs.Bitmap(this.getTex("main_-05"));
        up.x = -27;
        up.y = -60;
        group.addChild(up);

        var img3: createjs.Bitmap = new createjs.Bitmap(this.getTex("contents_stop"));
        group.addChild(img3);


        var grant3C: createjs.Sprite = new createjs.Sprite(spriteSheet3C, "ani");
        grant3C.x = 10;
        grant3C.y = 10;
        grant3C.alpha = 0;

        group.addChild(grant3C);

        group = new createjs.Container;
        this.addChild(group);
        this.portList.push(group);

        up = new createjs.Bitmap(this.getTex("main_-06"));
        up.x = -27;
        up.y = -60;
        group.addChild(up);

        var img4: createjs.Bitmap = new createjs.Bitmap(this.getTex("poster_stop"));
        group.addChild(img4);


        var grant4C: createjs.Sprite = new createjs.Sprite(spriteSheet4C, "ani");
        grant4C.x = 10;
        grant4C.y = 10;
        grant4C.alpha = 0;

        group.addChild(grant4C);




        var hit0: createjs.Shape = new createjs.Shape();
        hit0.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        img0.hitArea = hit0;

        var hit1: createjs.Shape = new createjs.Shape();
        hit1.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        img1.hitArea = hit1;

        var hit2: createjs.Shape = new createjs.Shape();
        hit2.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        img2.hitArea = hit2;

        var hit3: createjs.Shape = new createjs.Shape();
        hit3.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        img3.hitArea = hit3;

        var hit4: createjs.Shape = new createjs.Shape();
        hit4.graphics.beginFill("#000").drawRect(0, 0, 80, 80);
        img4.hitArea = hit4;

        img0.on("mouseover", function (event: createjs.MouseEvent) {
            img0.alpha = 0;
            grant0C.alpha = 1;
            SceneManager.instance().soundplay();
            SceneMainMainPage.instance().rotateState = false;
        });

        img0.on("mouseout", function (event: createjs.MouseEvent) {
            img0.alpha = 1;
            grant0C.alpha = 0;
            SceneMainMainPage.instance().rotateState = true;
        });

        img0.on("click", function (event: MouseEvent) {

            SceneManager.instance().soundClickPlay();
            SceneManager.instance().nextSceneIndex(SceneManager.INTERACTIVE);
        });

        img1.on("mouseover", function (event: createjs.MouseEvent) {
            img1.alpha = 0;
            grant1C.alpha = 1;
            SceneManager.instance().soundplay();
            SceneMainMainPage.instance().rotateState = false;

        });

        img1.on("mouseout", function (event: createjs.MouseEvent) {
            img1.alpha = 1;
            grant1C.alpha = 0;
            SceneMainMainPage.instance().rotateState = true;
        });

        img1.on("click", function (event: MouseEvent) {
            SceneManager.instance().soundClickPlay();
            SceneManager.instance().nextSceneIndex(SceneManager.ANIMATION);
        });

        img2.on("mouseover", function (event: createjs.MouseEvent) {
            img2.alpha = 0;
            grant2C.alpha = 1;
            SceneManager.instance().soundplay();
            SceneMainMainPage.instance().rotateState = false;
        });

        img2.on("mouseout", function (event: createjs.MouseEvent) {
            img2.alpha = 1;
            grant2C.alpha = 0;
            SceneMainMainPage.instance().rotateState = true;
        });

        img2.on("click", function (event: MouseEvent) {
            SceneManager.instance().soundClickPlay();
            SceneManager.instance().nextSceneIndex(SceneManager.VIDEOGRAPHY);

        });


        img3.on("mouseover", function (event: createjs.MouseEvent) {
            img3.alpha = 0;
            grant3C.alpha = 1;
            SceneManager.instance().soundplay();
            SceneMainMainPage.instance().rotateState = false;
        });

        img3.on("mouseout", function (event: createjs.MouseEvent) {
            img3.alpha = 1;
            grant3C.alpha = 0;
            SceneMainMainPage.instance().rotateState = true;
        });

        img3.on("click", function (event: MouseEvent) {
            SceneManager.instance().soundClickPlay();
            SceneManager.instance().nextSceneIndex(SceneManager.CONTENTS);
        });


        img4.on("mouseover", function (event: createjs.MouseEvent) {
            img4.alpha = 0;
            grant4C.alpha = 1;
            SceneManager.instance().soundplay();
            SceneMainMainPage.instance().rotateState = false;

        });

        img4.on("mouseout", function (event: createjs.MouseEvent) {
            img4.alpha = 1;
            grant4C.alpha = 0;
            SceneMainMainPage.instance().rotateState = true;
        });

        img4.on("click", function (event: MouseEvent) {
            SceneManager.instance().soundClickPlay();
            SceneManager.instance().nextSceneIndex(SceneManager.POSTER);
        });

    }

    public updateMouseXY(mx: number, my: number): void {
        this.treeOut.updateMouseXY(mx, my);

        //if ((mx - 977) * (mx - 977) + (my - 450) * (my - 450) < 230*230) {

        if ((mx - 977) * (mx - 977) / 420 / 420 * 276 * 276 + (my - 451) * (my - 451) < 276 * 276) {
            SceneManager.instance().soundTreePlay();

            if ((this.count % 10) == 0) {
                this.particleManager.createXY(mx, my);
            }

            
        } else {
            SceneManager.instance().soundTreeStop();
        }
    }

    public startScene(): void {
        this.alpha = 0;
        createjs.Tween.get(this).wait(2.04 * 1000).to({ alpha: 1 }, (4.11 - 2.04) * 1000, createjs.Ease.linear);
    }

    public count: number = 0;

    //private IC: number[] = [0.25, 0.4, 0.35, 0.45, 0.3];
    //private RC: number[] = [30, 270, 90 ,150, 180];
    private IC: number[] = [0.2, 0.2, 0.2, 0.2, 0.2];
    //private RC: number[] = [0, 288, 144, 216, 72];
    private RC: number[] = [0, 72, 144 , 216, 288];

    public playScene(): void {
        if (this.rotateState == true) {
            this.count++;
        }
        this.treeOut.drawUpdate();

        if ((this.count % 10) == 0)
        {
            this.particleManager.createParticle();
        }

        this.particleManager.update();




        //for (var i: number = 0; i < this.portList.length; i++)
        //{
        //    (<createjs.Container>this.portList[i]).x = Math.sin(this.IC[i]* (this.count + this.RC[i])/360*Math.PI*2 ) * (i+1)*160 + 960 - 40;
        //    (<createjs.Container>this.portList[i]).y = -Math.cos(this.IC[i] *(this.count + this.RC[i]) / 360 * Math.PI * 2) * (i+1) * 30 + 938 - 80;
        //    (<createjs.Container>this.portList[i]).alpha = (-Math.cos(this.IC[i] *(this.count + this.RC[i])/ 360 * Math.PI * 2) + 1 )/2 *5;
        //}

        //for (var i: number = 0; i < this.portList.length; i++) {
        //    (<createjs.Container>this.portList[i]).x = Math.sin(this.IC[i] * (this.count + this.RC[i]) / 360 * Math.PI * 2) * (i + 1) * 160 + 960 - 40;
        //    (<createjs.Container>this.portList[i]).y = -Math.cos(this.IC[i] * (this.count + this.RC[i]) / 360 * Math.PI * 2) * (i + 1) * 30 + 938 - 80;
        //    (<createjs.Container>this.portList[i]).alpha = (-Math.cos(this.IC[i] * (this.count + this.RC[i]) / 360 * Math.PI * 2) + 1) / 2 * 5;
        //}

        //for (var i: number = 0; i < this.portList.length; i++) {
        //    (<createjs.Container>this.portList[i]).x = Math.sin( (this.IC[i] * this.count + this.RC[i]) / 360 * Math.PI * 2) * (i + 1) * 160 + 960 - 40;
        //    (<createjs.Container>this.portList[i]).y = -Math.cos((this.IC[i]* this.count + this.RC[i]) / 360 * Math.PI * 2) * (i + 1) * 30 + 938 - 80;
        //    (<createjs.Container>this.portList[i]).alpha = (-Math.cos( (this.IC[i]*this.count + this.RC[i]) / 360 * Math.PI * 2) + 1) / 2 * 5;
        //}

        for (var i: number = 0; i < this.portList.length; i++) {
            (<createjs.Container>this.portList[i]).x = -Math.cos((-this.IC[i] * this.count + this.RC[i]) / 360 * Math.PI * 2) * 4 * 160 + 960 - 40;
            (<createjs.Container>this.portList[i]).y = Math.sin((-this.IC[i] * this.count + this.RC[i]) / 360 * Math.PI * 2) * 4 * 30 + 938 - 80;
            (<createjs.Container>this.portList[i]).alpha = Math.sin((-this.IC[i] * this.count + this.RC[i]) / 360 * Math.PI * 2) / 2 +0.5 + 0.5;
        }


    }
    
    public stopScene(): void {
        this.particleManager.clear();
        //createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 0 }, 1 * 1000, createjs.Ease.linear);
        createjs.Tween.get(this).to({ alpha: 0 }, 1 * 1000, createjs.Ease.linear);
        //createjs.Tween.get(this).wait(1 * 1000).to({ alpha: 0 }, (1) * 1000, createjs.Ease.linear);
        
    }
    public getStopSceneTime(): number {
        return 1.2;
    }

} 


